import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { facilities, adults, children } from '../../../../../utils/categories';

import { AddBtn, Form, Divider, Limiter } from './AddRoom.styles';

import Modal from '../../../../../components/Modal/Modal';
import Button from '../../../../../components/Button/Button';
import TextFieldGroup from '../../../../../components/Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../../../../../components/Inputs/SelectListGroup/SelectListGroup';
import CollapseCheckbox from '../../../../../components/Inputs/CollapseCheckbox/CollapseCheckbox';

const initState = {
  facilities: [],
  price: '',
  adults: '1',
  children: '0'
};

const AddRoom = ({
  hotelId,
  type,
  city,
  stars,
  fetchRooms
}) => {
  const [state, setState] = useState(initState);
  const [open, setOpen] = useState(false);

  const onClickOpen = () => setOpen(true);

  const onClickClose = () => setOpen(false);

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const onFilter = (facilities, category) => setState({ ...state, facilities });

  const onSubmit = async e => {
    e.preventDefault();

    const roomData = {
      hotelId,
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

  return (
    <>
      <AddBtn onClick={onClickOpen}>Add room</AddBtn>
      <Modal
        open={open}
        onClose={onClickClose}
        title="Add room"
      >
        <Form onSubmit={onSubmit}>
          <TextFieldGroup
            label="Price / night"
            placeholder="Enter price ..."
            id="price"
            name="price"
            type="number"
            value={state.price}
            onChange={onChange}
          />
          <SelectListGroup
            name="adults"
            id="adults"
            label="Adults"
            value={state.adults}
            onChange={onChange}
            options={adults}
          />
          <SelectListGroup
            name="children"
            id="children"
            label="Children"
            value={state.children}
            onChange={onChange}
            options={children}
          />
          <Limiter>
            <CollapseCheckbox
              open={false}
              title="Facilities"
              list={facilities}
              handleFilters={onFilter}
              category="facilities"
            />
          </Limiter>
          <Divider />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  )
};

AddRoom.propTypes = {
  hotelId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  fetchRooms: PropTypes.func.isRequired
};

export default AddRoom;