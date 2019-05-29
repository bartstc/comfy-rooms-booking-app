import React, { useState } from 'react';
import isAfter from 'date-fns/isAfter';

import { FormWrapper } from './SearchForm.styles';
import { SectionTitle } from '../Home.styles';

import TextFieldGroup from '../../../components/Inputs/TextFieldGroup/TextFieldGroup';
// import TextareaFieldGroup from '../../../components/Inputs/TextareaFieldGroup/TextareaFieldGroup';
import SelectListGroup from '../../../components/Inputs/SelectListGroup/SelectListGroup';
import DatePicker from '../../../components/Inputs/DatePicker/DatePicker';
import Button from '../../../components/Button/Button';

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = ({ start, end }) => {
    start = start || startDate;
    end = end || endDate;

    if (isAfter(start, end)) {
      end = start;
    };

    setStartDate(start);
    setEndDate(end);
  };

  const handleChangeStart = start => handleChange({ start });

  const handleChangeEnd = end => handleChange({ end });

  return (
    <>
      <SectionTitle>Choose your destination</SectionTitle>
      <FormWrapper>
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