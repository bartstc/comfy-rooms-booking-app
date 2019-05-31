import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, Label, Select, Option, Info, Error } from './SelectListGroup.styles';

const SelectListGroup = ({
  name,
  value,
  error,
  onChange,
  options,
  id,
  label,
  info,
  narrow }) => {

  const selectOptions = options.map((option, i) => (
    <Option key={i} value={option.value}>
      {option.label}
    </Option>
  ));

  return (
    <SelectWrapper narrow={narrow}>
      <Label htmlFor={id}>{label}</Label>
      <Select
        error={error}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </Select>
      {info && <Info>{info}</Info>}
      {error && <Error>{error}</Error>}
    </SelectWrapper>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  narrow: PropTypes.bool
};

SelectListGroup.defaultProps = {
  error: ''
};

export default SelectListGroup;
