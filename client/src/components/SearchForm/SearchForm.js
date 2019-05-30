import React from 'react';

import { FormWrapper } from './SearchForm.styles';

import TextFieldGroup from '../Inputs/TextFieldGroup/TextFieldGroup';
import SelectListGroup from '../Inputs/SelectListGroup/SelectListGroup';
import DatePicker from '../Inputs/DatePicker/DatePicker';
import Button from '../Button/Button';

const SearchForm = ({ 
  handleSubmit,
  startDate,
  endDate,
  handleChangeStart,
  handleChangeEnd
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
        // error="error"
        // value={username}
        // onChange={onChange}
        />
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={handleChangeStart}
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
          onChange={handleChangeEnd}
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
          // onChange={onChange}
          options={[{ label: '1', value: 1 }, { label: '2', value: 2 }]}
        />
        <SelectListGroup
          name="children"
          id="children"
          label="Children"
          narrow
          // onChange={onChange}
          options={[{ label: '1', value: 1 }, { label: '2', value: 2 }]}
        />
        <Button type="submit">Search</Button>
      </FormWrapper>

      {/* <TextareaFieldGroup
        label="Add Comment"
        placeholder="Comment text ..."
        id="description"
        name="description"
        // value={text}
        // onChange={onChange}
      /> */}

      {/* <SelectListGroup
        name="genres"
        id="genres"
        label="Select genres"
        // onChange={onChange}
        options={[{label: '1', value: 1}, {label: '2', value: 2}]}
      /> */}
    </>
  )
};

export default SearchForm;