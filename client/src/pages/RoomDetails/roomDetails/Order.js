import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Form, Divider, Info } from './Order.styles';

import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import DatePicker from '../../../components/Inputs/DatePicker/DatePicker';
import Spinner from '../../../components/Spinner/Spinner';

const Order = ({
  open,
  loading,
  handleClickClose,
  handleSubmit,
  startDate,
  endDate,
  handleDateChangeStart,
  handleDateChangeEnd,
  orderInfo: { hotel, city, address, adults, children, checkIn, checkOut }
}) => (
    <Modal
      open={open}
      onClose={handleClickClose}
      title="Make order"
    >
      <Info>Hotel: <span>{hotel}</span></Info>
      <Info>City: <span>{city}</span></Info>
      <Info>Address: <span>{address}</span></Info>
      {checkIn && (
        <>
          <Info>Check In: <span>{moment(checkIn).format('MMMM Do YYYY')}</span></Info>
          <Info>Check Out: <span>{moment(checkOut).format('MMMM Do YYYY')}</span></Info>
        </>
      )}
      <Info>Adults: <span>{adults}</span></Info>
      <Info>Children: <span>{children}</span></Info>
      <Form onSubmit={handleSubmit}>
        {!checkIn && (
          <>
            <Info center>Choose the period of your stay:</Info>
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={handleDateChangeStart}
              label="Check in:"
              id="date"
              name="date"
            />
            <DatePicker
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              onChange={handleDateChangeEnd}
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
    </Modal>
  );

Order.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClickClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  handleDateChangeStart: PropTypes.func.isRequired,
  handleDateChangeEnd: PropTypes.func.isRequired,
  orderInfo: PropTypes.object.isRequired
};

export default Order;