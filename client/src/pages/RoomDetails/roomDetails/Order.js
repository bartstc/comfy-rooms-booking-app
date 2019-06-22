import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/isAfter';
import moment from 'moment';

import { Form, Divider, Info } from './Order.styles';

import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import DatePicker from '../../../components/Inputs/DatePicker/DatePicker';
import Spinner from '../../../components/Spinner/Spinner';

const Order = ({
  open,
  handleClickClose,
  orderInfo: { hotel, city, address, adults, children },
  order,
  rooms: { room },
  auth: { isAuth }
}) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const onDateChange = ({ start, end }) => {
    start = start || checkIn;
    end = end || checkOut;

    if (isAfter(start, end)) {
      end = start;
    };

    setCheckIn(start);
    setCheckOut(end);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { hotel: { name, address, contact }, city, price } = room;

    const start = moment(order.checkIn ? order.checkIn : checkIn);
    const end = moment(order.checkOut ? order.checkOut : checkOut);

    //Difference in number of days
    const days = moment.duration(end.diff(start)).asDays() + 1;

    const orderData = {
      name,
      address,
      contact,
      city,
      total: Math.round(days * price),
      checkIn: start,
      checkOut: end
    };

    setLoading(true);
    await axios.put('/api/profiles/order', orderData);
    setLoading(false);
    handleClickClose();
  };

  const onDateChangeStart = start => onDateChange({ start });

  const onDateChangeEnd = end => onDateChange({ end });

  return (
    <Modal
      open={open}
      onClose={handleClickClose}
      title="Book a room"
    >
      {!isAuth && <Info center>You must create an account to be able to book rooms.</Info>}
      {isAuth &&
        <>
          <Info>Hotel: <span>{hotel}</span></Info>
          <Info>City: <span>{city}</span></Info>
          <Info>Address: <span>{address}</span></Info>
          {order.checkIn && (
            <>
              <Info>Check In: <span>{moment(order.checkIn).format('MMMM Do YYYY')}</span></Info>
              <Info>Check Out: <span>{moment(order.checkOut).format('MMMM Do YYYY')}</span></Info>
            </>
          )}
          <Info>Adults: <span>{adults}</span></Info>
          <Info>Children: <span>{children}</span></Info>
          <Form onSubmit={onSubmit}>
            {!order.checkIn && (
              <>
                <Info center>Choose the period of your stay:</Info>
                <DatePicker
                  selected={checkIn}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  onChange={onDateChangeStart}
                  label="Check in:"
                  id="date"
                  name="date"
                />
                <DatePicker
                  selected={checkOut}
                  selectsEnd
                  startDate={checkIn}
                  endDate={checkOut}
                  onChange={onDateChangeEnd}
                  label="Check out:"
                  id="date"
                  name="date"
                />
              </>
            )}
            <Info>After placing an order, it will be added to the list of orders. Check your profile's desktop to make a payment. After that, you can also rate the hotel by adding a rating and opinion. Thank you for using our services and we wish you a pleasant stay. Visit us again!</Info>
            <Divider />
            {loading ? <Spinner /> : <Button type="submit">Submit</Button>}
          </Form>
        </>
      }
    </Modal>
  )
};

Order.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClickClose: PropTypes.func.isRequired,
  orderInfo: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ rooms, order, auth }) => ({ rooms, order, auth });

export default connect(mapStateToProps)(Order);