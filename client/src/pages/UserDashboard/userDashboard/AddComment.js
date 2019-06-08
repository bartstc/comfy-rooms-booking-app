import React from 'react';
import PropTypes from 'prop-types';

import { Form } from './AddComment.styles';

import Button from '../../../components/Button/Button';
import TextAreaFieldGroup from '../../../components/Inputs/TextareaFieldGroup/TextareaFieldGroup';
import SelectListGroup from '../../../components/Inputs/SelectListGroup/SelectListGroup';
import Modal from '../../../components/Modal/Modal';

const AddComment = ({
  handleClose,
  open,
  values,
  handleChange,
  handleSubmit
}) => (
    <Modal
      open={open}
      onClose={handleClose}
      title="Add comment"
    >
      <Form onSubmit={handleSubmit}>
        <TextAreaFieldGroup
          placeholder="Add opinion"
          name="text"
          value={values.text}
          onChange={handleChange}
        // error={props.errors.text}
        />
        <SelectListGroup
          name="adults"
          id="adults"
          label="Adults"
          value={values.rating}
          onChange={handleChange}
          options={[{ label: '1', value: 1 }, { label: '2', value: 2 }]}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );

History.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired
};

export default AddComment;