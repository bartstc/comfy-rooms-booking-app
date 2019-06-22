import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHotel } from '../../../modules/profile/profileActions';

import { Form } from './AddHotel.styles';

import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import TextAreaFieldGroup from '../../../components/Inputs/TextareaFieldGroup/TextareaFieldGroup';
import TextFieldGroup from '../../../components/Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../../../components/Inputs/SelectListGroup/SelectListGroup';
import FileUpload from '../../../components/Inputs/FileUpload/FileUpload';
import Map from '../../../components/Map/Map';

const types = [
  { label: 'apartment', value: 'apartment' },
  { label: 'hotel', value: 'hotel' },
  { label: 'villa', value: 'villa' },
  { label: 'guesthouse', value: 'guesthouse' }
];

const starsList = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

const initState = {
  type: 'apartment',
  stars: '1',
  name: '',
  city: '',
  address: '',
  contact: '',
  description: '',
  emailTitle: '',
  emailSubject: '',
  emailBody: '',
  images: [],
  longitude: 0,
  latitude: 0,
  open: false
};

const AddHotel = ({
  errors,
  addHotel
}) => {
  const [state, setState] = useState(initState);

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const onCordsChange = (longitude, latitude) => setState({ ...state, longitude, latitude });

  const onImageUpload = images => setState({ ...state, images });

  const onClickOpen = () => setState({ ...state, open: true });

  const onClickClose = () => setState({ ...state, open: false });

  const onSubmit = async e => {
    e.preventDefault();
    const { type, stars, name, city, address, contact, description, emailTitle, emailSubject, emailBody, images, longitude, latitude } = state;

    const hotelData = {
      type,
      stars,
      name,
      city,
      address,
      contact,
      description,
      emailTitle,
      emailSubject,
      emailBody,
      images,
      pin: {
        longitude,
        latitude,
        title: name,
        description: address
      }
    };

    await addHotel(hotelData);

    if (!Object.keys(errors).length > 0) // if error obj is empty
      setState({ ...initState });
  };

  const { type, stars, name, city, address, contact, description, emailTitle, emailSubject, emailBody, longitude, latitude, open } = state;

  return (
    <>
      <Button onClick={onClickOpen}>New hotel</Button>
      <Modal
        open={open}
        onClose={onClickClose}
        title="Add hotel"
      >
        <Form onSubmit={onSubmit}>
          <TextFieldGroup
            label="Name"
            placeholder="Enter hotel name ..."
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            error={errors.name}
          />
          <TextFieldGroup
            label="City"
            placeholder="Enter city name ..."
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            error={errors.city}
          />
          <TextFieldGroup
            label="Address"
            placeholder="Enter address ..."
            id="address"
            name="address"
            value={address}
            onChange={onChange}
            error={errors.address}
          />
          <TextFieldGroup
            label="Contact"
            placeholder="Enter contact number ..."
            id="contact"
            name="contact"
            type="number"
            value={contact}
            onChange={onChange}
            error={errors.contact}
          />
          <TextAreaFieldGroup
            placeholder="Add description"
            name="description"
            value={description}
            onChange={onChange}
            error={errors.description}
          />
          <SelectListGroup
            name="type"
            id="type"
            label="Type"
            value={type}
            onChange={onChange}
            options={types}
            error={errors.type}
          />
          <SelectListGroup
            name="stars"
            id="stars"
            label="Stars"
            value={stars}
            onChange={onChange}
            options={starsList}
            error={errors.stars}
          />
          <TextFieldGroup
            label="Email Title"
            placeholder="Enter email title ..."
            id="emailTitle"
            name="emailTitle"
            value={emailTitle}
            onChange={onChange}
            error={errors.emailTitle}
          />
          <TextFieldGroup
            label="Email Subject"
            placeholder="Enter email subject ..."
            id="emailSubject"
            name="emailSubject"
            value={emailSubject}
            onChange={onChange}
            error={errors.emailSubject}
          />
          <TextFieldGroup
            label="Email Body"
            placeholder="Enter email body ..."
            id="emailBody"
            name="emailBody"
            value={emailBody}
            onChange={onChange}
            error={errors.emailBody}
          />
          <FileUpload
            handleUpload={onImageUpload}
          />
          <Map
            height="400px"
            mapStyle="streets"
            pin={{ longitude, latitude }}
            handleCordsChange={onCordsChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  );
};

AddHotel.propTypes = {
  addHotel: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addHotel })(AddHotel);