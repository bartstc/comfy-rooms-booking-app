import React from 'react';
import PropTypes from 'prop-types';
import { facilities, adults, children } from '../../../../../utils/categories';

import { AddBtn, Form, Divider } from './AddRoom.styles';

import Modal from '../../../../../components/Modal/Modal';
import Button from '../../../../../components/Button/Button';
import TextFieldGroup from '../../../../../components/Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../../../../../components/Inputs/SelectListGroup/SelectListGroup';
import CollapseCheckbox from '../../../../../components/Inputs/CollapseCheckbox/CollapseCheckbox';

const AddRoom = ({
  open,
  handleClickOpen,
  handleClickClose,
  handleChange,
  handleSubmit,
  handleFilter,
  values
}) => (
  <>
    <AddBtn onClick={handleClickOpen}>Add room</AddBtn>
    <Modal
      open={open}
      onClose={handleClickClose}
      title="Add room"
    >
      <Form onSubmit={handleSubmit}>
        <TextFieldGroup
          label="Price / night"
          placeholder="Enter price ..."
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
        />

        <SelectListGroup
          name="adults"
          id="adults"
          label="Adults"
          value={values.adults}
          onChange={handleChange}
          options={adults}
        />
        <SelectListGroup
          name="children"
          id="children"
          label="Children"
          value={values.children}
          onChange={handleChange}
          options={children}
        />
        <CollapseCheckbox
          open={false}
          title="Facilities"
          list={facilities}
          handleFilters={handleFilter}
          category="facilities"
        />
        <Divider />
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  </>
  );

  AddRoom.propTypes = {
    handleClickClose: PropTypes.func.isRequired,
    handleClickOpen: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    values: PropTypes.object.isRequired
  };

export default AddRoom;