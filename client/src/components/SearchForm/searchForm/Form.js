import React from 'react';
import PropTypes from 'prop-types';
import { adults, children } from '../../../utils/categories';

import { FormWrapper } from './Form.styles';

import TextFieldGroup from '../../Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup/SelectListGroup';
import DatePicker from '../../Inputs/DatePicker/DatePicker';
import Button from '../../Button/Button';



const SearchForm = ({
  handleSubmit,
  startDate,
  endDate,
  handleDateChangeStart,
  handleDateChangeEnd,
  handleChange,
  values
}) => {
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <TextFieldGroup
          label="Destination:"
          placeholder="Enter city ..."
          id="destination"
          name="destination"
          narrow
          value={values.destination}
          onChange={handleChange}
        />
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChangeStart}
          label="Date:"
          id="date"
          name="date"
          narrow
        />
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChangeEnd}
          label="Date:"
          id="date"
          name="date"
          narrow
        />
        <SelectListGroup
          name="adults"
          id="adults"
          label="Adults"
          narrow
          value={values.adults}
          onChange={handleChange}
          options={adults}
        />
        <SelectListGroup
          name="children"
          id="children"
          label="Children"
          narrow
          value={values.children}
          onChange={handleChange}
          options={children}
        />
        <Button type="submit">Search</Button>
      </FormWrapper>
    </>
  )
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  handleDateChangeStart: PropTypes.func.isRequired,
  handleDateChangeEnd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;