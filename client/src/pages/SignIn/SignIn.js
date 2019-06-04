import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const initState = {
  email: '',
  password: ''
};

const fields = [
  { label: 'Email', placeholder: ' johndoe@email.com', name: 'email', type: 'email' },
  { label: 'Password', placeholder: ' Password', name: 'password', type: 'password' }
];

const SignIn = () => {
  const [errors, setErrors] = useState({});

  const signIn = () => {
    console.log(values);

    // handle actions
  };

  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  return (
    <div>
      <AuthWrapper
        handleSubmit={handleSubmit}
        title="Sign In"
        subtitle="You do not have an account?"
        path="signup"
        pathName="Sign Up"
      >
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
      </AuthWrapper>
    </div>
  );
};

export default SignIn;