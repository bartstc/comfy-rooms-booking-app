import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { getRoom } from '../../modules/rooms/roomsActions';
import { DetailsContainer } from './RoomDetails.styles';
import isAfter from 'date-fns/isAfter';

import Header from './roomDetails/Header';
import Slider from './roomDetails/Slider';
import CommentList from './roomDetails/CommentList';
import Description from './roomDetails/Description';
import Spinner from '../../components/Spinner/Spinner';
import Map from '../../components/Map/Map';
import Order from './roomDetails/Order';

class RoomDetails extends Component {
  state = {
    checkIn: new Date(),
    checkOut: new Date(),
    open: false,
    sending: false
  };

  componentDidMount() {
    this.props.getRoom(this.props.match.params.id);
  };

  onDateChange = ({ start, end }) => {
    start = start || this.state.checkIn;
    end = end || this.state.checkOut;

    if (isAfter(start, end)) {
      end = start;
    };

    this.setState({ checkIn: start, checkOut: end });
  };

  onDateChangeStart = start => this.onDateChange({ start });

  onDateChangeEnd = end => this.onDateChange({ end });

  onSubmit = async e => {
    e.preventDefault();
    const { hotel: { name, address, contact }, city, price } = this.props.rooms.room;
    const { order } = this.props;
    const { checkIn, checkOut } = this.state;

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
      checkIn: order.checkIn || checkIn,
      checkOut: order.checkOut || checkOut
    };

    this.setState({ sending: true });
    await axios.put('/api/profiles/order', orderData);
    this.setState({ sending: false });
    this.onClickClose();
  };

  onClickOpen = () => this.setState({ open: true });

  onClickClose = () => this.setState({ open: false });

  render() {
    const { room, loading } = this.props.rooms;
    const { order, auth } = this.props;
    const { checkIn, checkOut, open, sending } = this.state;

    return (
      <DetailsContainer>
        {loading && <Spinner />}
        {room &&
          <>
            <Order
              open={open}
              loading={sending}
              isAuth={auth.isAuth}
              handleSubmit={this.onSubmit}
              startDate={checkIn}
              endDate={checkOut}
              handleDateChangeStart={this.onDateChangeStart}
              handleDateChangeEnd={this.onDateChangeEnd}
              handleClickClose={this.onClickClose}
              orderInfo={{
                hotel: room.hotel.name,
                address: room.hotel.address,
                city: room.city,
                adults: room.adults,
                children: room.children,
                checkIn: order.checkIn,
                checkOut: order.checkOut
              }}
            />
            <Header
              name={room.hotel.name}
              city={room.city}
              address={room.hotel.address}
              stars={room.stars}
              rating={room.hotel.rating}
              votes={room.hotel.opinions.length}
              price={room.price}
              adults={room.adults}
              children={room.children}
              handleOpenModal={this.onClickOpen}
            />
            <Slider
              images={room.hotel.images}
            />
            <Description
              facilities={room.facilities}
              description={room.hotel.description}
            />
            <Map
              mapStyle="dark"
              height="45vh"
              pin={room.hotel.pin}
              initViwport={{
                latitude: room.hotel.pin.latitude,
                longitude: room.hotel.pin.longitude,
                zoom: 13
              }}
            />
            <CommentList
              opinions={room.hotel.opinions}
            />
          </>
        }
      </DetailsContainer>
    );
  }
};

RoomDetails.propTypes = {
  rooms: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getRoom: PropTypes.func.isRequired
};

const mapStateToProps = ({ rooms, order, auth }) => ({ rooms, order, auth });

export default connect(mapStateToProps, { getRoom })(RoomDetails);