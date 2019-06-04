import React from 'react';
import PropTypes from 'prop-types';

import { TextareaWrapper, Label, Textarea, Error, Info } from './TextareaFieldGroup.styles';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  id,
  onChange,
  label,
  info,
  narrow
}) => (
    <TextareaWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
      {info && <Info>{info}</Info>}
      {error && <Error>{error}</Error>}
    </TextareaWrapper>
  );

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  info: PropTypes.string,
  narrow: PropTypes.bool
};

TextAreaFieldGroup.defaultProps = {
  error: ''
};

export default TextAreaFieldGroup;
