import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/isAfter';
import { connect } from 'react-redux';
import { searchForRooms } from '../../modules/rooms/roomsActions';

import Form from './searchForm/Form';

const initState = {
  city: '',
  adults: '2',
  children: '0'
};

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SearchForm = ({ searchForRooms, history }) => {
  // date state (check in, check out)
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  // rest of state (city, adults, children)
  const [values, setValues] = useState(initState);

  const onChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: capitalize(e.target.value) }));
  };

  const onDateChange = ({ start, end }) => {
    start = start || checkIn;
    end = end || checkOut;

    if (isAfter(start, end)) {
      end = start;
    };

    setCheckIn(start);
    setCheckOut(end);
  };

  const onDateChangeStart = start => onDateChange({ start });

  const onDateChangeEnd = end => onDateChange({ end });

  const onSubmit = e => {
    e.preventDefault();

    searchForRooms(values, { ...values, checkIn, checkOut });
    if (history) history.push('/explore');
  };

  return (
    <Form
      handleSubmit={onSubmit}
      startDate={checkIn}
      endDate={checkOut}
      handleDateChangeStart={onDateChangeStart}
      handleDateChangeEnd={onDateChangeEnd}
      handleChange={onChange}
      values={values}
    />
  );
};

SearchForm.propTypes = {
  searchForRooms: PropTypes.func.isRequired
};

export default connect(null, { searchForRooms })(SearchForm);