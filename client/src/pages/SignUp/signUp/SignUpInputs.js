import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../../components/Inputs/TextFieldGroup/TextFieldGroup';

const fields = [
  { label: 'Full Name', placeholder: ' John Doe', name: 'fullname', type: 'text' },
  { label: 'Email', placeholder: ' johndoe@email.com', name: 'email', type: 'email' },
  { label: 'Password', placeholder: ' Password', name: 'password', type: 'password' }
];

const SignUpInputs = ({ values, errors, handleChange }) => (
  <>
    {fields.map(({ label, placeholder, name, type }) => (
      <TextFieldGroup
        key={name}
        label={label}
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        error={errors[name] || ''}
        value={values[name]}
        onChange={handleChange}
      />
    ))}
  </>
);

SignUpInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignUpInputs;