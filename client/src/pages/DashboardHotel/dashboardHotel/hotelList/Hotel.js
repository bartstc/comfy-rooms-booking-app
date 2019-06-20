import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HotelCard, Title, Info, Description, ToggleBtn } from './Hotel.styles';
import useToggle from '../../../../hooks/useToggle';
import axios from 'axios';

import Rooms from './hotel/Rooms';
import AddRoom from './hotel/AddRoom';
import Spinner from '../../../../components/Spinner/Spinner';

const initState = {
  facilities: [],
  price: '',
  adults: '1',
  children: '0'
};

const Hotel = ({
  address,
  city,
  contact,
  emailTitle,
  emailSubject,
  emailBody,
  name,
  rating,
  stars,
  type,
  _id
}) => {
  const [toggle, setToggle] = useToggle();
  const [state, setState] = useState(initState);
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFilter = (facilities, category) => setState({ ...state, facilities });

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const onAddRoomSubmit = async e => {
    e.preventDefault();

    const roomData = {
      hotelId: _id,
      type,
      city,
      stars,
      ...state
    };

    await axios.post('/api/rooms/room', roomData);
    onClickClose();
    fetchRooms(); // Refetch rooms data
    setState(initState);
  };

  const submitFetchRooms = () => { // Show rooms panel and fetch rooms
    onToggle();
    fetchRooms();
  };

  const fetchRooms = async () => {
    setLoading(true);
    const res = await axios.get(`/api/rooms/rooms/${_id}`);
    setLoading(false);
    setRooms(res.data);
  };

  const removeRoom = async id => {
    await axios.delete(`/api/rooms/room/${id}`);
    fetchRooms();
  };

  const onClickOpen = () => setOpen(true);

  const onClickClose = () => setOpen(false);

  const onToggle = () => setToggle();

  return (
    <HotelCard>
      <Title>{name}</Title>
      <ToggleBtn onClick={submitFetchRooms}>{toggle ? 'Close' : 'Manage'}</ToggleBtn>
      {toggle && loading && <Spinner />}
      {toggle && !loading &&
        <>
          <Description>
            <Info>Type: <span>{type}</span></Info>
            <Info>Stars: <span>{stars}</span></Info>
            <Info>Rating: <span>{rating}</span></Info>
            <Info>City: <span>{city}</span></Info>
            <Info>Address: <span>{address}</span></Info>
            <Info>Contact: <span>{contact}</span></Info>
            <Info>Email title: <span>{emailTitle}</span></Info>
            <Info>Email subject: <span>{emailSubject}</span></Info>
            <Info>Email body: <span>{emailBody}</span></Info>
          </Description>
          <Rooms
            id={_id}
            rooms={rooms}
            handleRemoveRoom={removeRoom}
          />
          <AddRoom
            open={open}
            handleClickOpen={onClickOpen}
            handleClickClose={onClickClose}
            handleChange={onChange}
            handleSubmit={onAddRoomSubmit}
            values={state}
            handleFilter={onFilter}
          />
        </>
      }
    </HotelCard>
  );
};

Hotel.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  contact: PropTypes.number.isRequired,
  emailTitle: PropTypes.string.isRequired,
  emailSubject: PropTypes.string.isRequired,
  emailBody: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Hotel;