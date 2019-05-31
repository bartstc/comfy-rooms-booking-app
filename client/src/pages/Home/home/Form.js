import React, {useState} from 'react';
import isAfter from 'date-fns/isAfter';

import SearchForm from '../../../components/SearchForm/SearchForm';

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onDateChange = ({ start, end }) => {
    start = start || startDate;
    end = end || endDate;

    if (isAfter(start, end)) {
      end = start;
    };

    setStartDate(start);
    setEndDate(end);
  };

  const onChangeStart = start => onDateChange({ start });

  const onChangeEnd = end => onDateChange({ end });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(startDate, endDate);
  }

  return (
    <SearchForm 
      handleSubmit={handleSubmit}
      startDate={startDate}
      endDate={endDate}
      handleChangeStart={onChangeStart}
      handleChangeEnd={onChangeEnd}
    />
  );
};

export default Form;