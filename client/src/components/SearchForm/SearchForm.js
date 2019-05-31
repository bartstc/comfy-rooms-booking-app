import React, { useState } from 'react';
import isAfter from 'date-fns/isAfter';

import Form from './searchForm/Form';

const initState = {
  destination: 'London',
  adults: '2',
  children: '1'
};

const SearchForm = () => {
  // date state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // rest od state
  const [values, setValues] = useState(initState);

  const onChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onDateChange = ({ start, end }) => {
    start = start || startDate;
    end = end || endDate;

    if (isAfter(start, end)) {
      end = start;
    };

    setStartDate(start);
    setEndDate(end);
  };

  const onDateChangeStart = start => onDateChange({ start });

  const onDateChangeEnd = end => onDateChange({ end });

  const onSubmit = e => {
    e.preventDefault();
    console.log(startDate, endDate);
    console.log(values);

    // handle actions (set search values)
  }

  return (
    <Form
      handleSubmit={onSubmit}
      startDate={startDate}
      endDate={endDate}
      handleDateChangeStart={onDateChangeStart}
      handleDateChangeEnd={onDateChangeEnd}
      handleChange={onChange}
      values={values}
    />
  );
};

export default SearchForm;