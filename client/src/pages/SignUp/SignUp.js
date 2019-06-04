import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const initState = {
  fullname: '',
  email: '',
  password: ''
};

const fields = [
  { label: 'Full Name', placeholder: ' John Doe', name: 'fullname', type: 'text' },
  { label: 'Email', placeholder: ' johndoe@email.com', name: 'email', type: 'email' },
  { label: 'Password', placeholder: ' Password', name: 'password', type: 'password' }
];

const fakeErrors = {
  fullname: 'Name field required',
  email: 'Email already exists'
};

const SignIn = () => {
  const [errors, setErrors] = useState({});

  const signIn = () => {
    console.log(values);
    setErrors(fakeErrors);

    // handle actions
  };

  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  return (
    <div>
      <AuthWrapper
        handleSubmit={handleSubmit}
        title="Sign Up"
        subtitle="Do you already have an account?"
        path="signin"
        pathName="Sign In"
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