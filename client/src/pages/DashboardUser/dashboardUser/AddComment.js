import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ratings } from '../../../utils/categories';

import { Form } from './AddComment.styles';

import Button from '../../../components/Button/Button';
import TextAreaFieldGroup from '../../../components/Inputs/TextareaFieldGroup/TextareaFieldGroup';
import SelectListGroup from '../../../components/Inputs/SelectListGroup/SelectListGroup';
import Modal from '../../../components/Modal/Modal';

const AddComment = ({
  handleClose,
  handleAddOpinion,
  open,
  hotelName,
  orderId
}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('0');
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      setError('Text field is required');
      return;
    };

    const opinionData = {
      hotelName,
      orderId,
      text,
      rating
    };

    handleAddOpinion(opinionData);

    handleClose();
    setError('');
    setText('');
    setRating('');
  };

  const handleTextChange = e => setText(e.target.value);

  const handleRatingChange = e => setRating(e.target.value);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Add comment"
    >
      <Form onSubmit={onSubmit}>
        <TextAreaFieldGroup
          placeholder="Add opinion"
          name="text"
          value={text}
          onChange={handleTextChange}
          error={error}
        />
        <SelectListGroup
          name="rating"
          id="rating"
          label="Add rating"
          value={rating}
          onChange={handleRatingChange}
          options={ratings}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  )
};

History.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleAddOpinion: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  hotelName: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired
};

export default AddComment;