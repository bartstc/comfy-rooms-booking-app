import React from 'react';
import PropTypes from 'prop-types';

import { Form } from './AddHotel.styles';

import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import TextAreaFieldGroup from '../../../components/Inputs/TextareaFieldGroup/TextareaFieldGroup';
import TextFieldGroup from '../../../components/Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../../../components/Inputs/SelectListGroup/SelectListGroup';
import FileUpload from '../../../components/Inputs/FileUpload/FileUpload';

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

const AddHotel = ({
  open,
  handleClickOpen,
  handleClickClose,
  handleChange,
  handleSubmit,
  handleUpload,
  values: {
    name,
    city,
    address,
    contact,
    type,
    stars,
    description,
    emailTitle,
    emailSubject,
    emailBody
  },
  errors
}) => (
    <>
      <Button onClick={handleClickOpen}>New hotel</Button>
      <Modal
        open={open}
        onClose={handleClickClose}
        title="Add hotel"
      >
        <Form onSubmit={handleSubmit}>
          <TextFieldGroup
            label="Name"
            placeholder="Enter hotel name ..."
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextFieldGroup
            label="City"
            placeholder="Enter city name ..."
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            error={errors.city}
          />
          <TextFieldGroup
            label="Address"
            placeholder="Enter address ..."
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
            error={errors.address}
          />
          <TextFieldGroup
            label="Contact"
            placeholder="Enter contact number ..."
            id="contact"
            name="contact"
            type="number"
            value={contact}
            onChange={handleChange}
            error={errors.contact}
          />
          <TextAreaFieldGroup
            placeholder="Add description"
            name="description"
            value={description}
            onChange={handleChange}
            error={errors.description}
          />
          <SelectListGroup
            name="type"
            id="type"
            label="Type"
            value={type}
            onChange={handleChange}
            options={types}
            error={errors.type}
          />
          <SelectListGroup
            name="stars"
            id="stars"
            label="Stars"
            value={stars}
            onChange={handleChange}
            options={starsList}
            error={errors.stars}
          />
          <TextFieldGroup
            label="Email Title"
            placeholder="Enter email title ..."
            id="emailTitle"
            name="emailTitle"
            value={emailTitle}
            onChange={handleChange}
            error={errors.emailTitle}
          />
          <TextFieldGroup
            label="Email Subject"
            placeholder="Enter email subject ..."
            id="emailSubject"
            name="emailSubject"
            value={emailSubject}
            onChange={handleChange}
            error={errors.emailSubject}
          />
          <TextFieldGroup
            label="Email Body"
            placeholder="Enter email body ..."
            id="emailBody"
            name="emailBody"
            value={emailBody}
            onChange={handleChange}
            error={errors.emailBody}
          />
          <FileUpload
            handleUpload={handleUpload}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  );

AddHotel.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object
};

export default AddHotel;