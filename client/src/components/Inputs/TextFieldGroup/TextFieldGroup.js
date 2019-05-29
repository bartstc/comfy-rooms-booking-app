import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Input, Label, Error, Info } from './TextFieldGroup.styles.js';

const TextFieldGroup = ({
  name,
  id,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  narrow
}) => {
  return (
    <InputWrapper narrow={narrow}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        error={error}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <Info>{info}</Info>}
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string.isRequired,
  narrow: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: 'text',
  error: ''
};

export default TextFieldGroup;
