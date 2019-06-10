import React, { useState } from 'react';
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
  description,
  emailTitle,
  emailSubject,
  emailBody,
  name,
  opinions,
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

export default Hotel;