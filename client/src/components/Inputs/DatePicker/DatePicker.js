import React from 'react';
import PropTypes from 'prop-types';

import { DatePickerWrapper, Label, ReactDatePicker, Error, Info } from './DatePicker.styles.js';

const DatePicker = ({
  id,
  label,
  name,
  error,
  info,
  disabled,
  narrow,
  selected,
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  onChange
}) => {
  return (
    <DatePickerWrapper narrow={narrow}>
      <Label htmlFor={id}>{label}</Label>
      <ReactDatePicker
        id={id}
        error={error}
        name={name}
        onChange={onChange}
        disabled={disabled}
        selected={selected}
        minDate={new Date()}
        showDisabledMonthNavigation
        selectsStart={selectsStart}
        selectsEnd={selectsEnd}
        startDate={startDate}
        endDate={endDate}
      />
      {info && <Info>{info}</Info>}
      {error && <Error>{error}</Error>}
    </DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string.isRequired,
  narrow: PropTypes.bool
};

DatePicker.defaultProps = {
  error: ''
};

export default DatePicker;