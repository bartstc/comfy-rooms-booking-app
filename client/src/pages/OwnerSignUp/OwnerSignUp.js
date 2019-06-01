import React from 'react';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const initState = {
  company: '',
  email: '',
  password: ''
};

const OwnerSignUp = () => {
  const signIn = () => {
    console.log(values);

    // handle actions
  };

  const { values, handleChange, handleSubmit } = useForm(signIn, initState);
  const { company, email, password } = values;

  return (
    <div>
      <AuthWrapper
        handleSubmit={handleSubmit}
        title="Sign Up as Owner"
        subtitle="Do you already have an account?"
        path="owner_signin"
        pathName="Sign In as Owner"
      >
        <TextFieldGroup
          label="Company / Name"
          placeholder="Enter company ..."
          id="company"
          name="company"
          // error="error"
          value={company}
          onChange={handleChange}
        />
        <TextFieldGroup
          label="Email"
          placeholder="Enter email ..."
          id="email"
          name="email"
          type="email"
          // error="error"
          value={email}
          onChange={handleChange}
        />
        <TextFieldGroup
          label="Password"
          placeholder="Enter password ..."
          id="password"
          name="password"
          type="password"
          // error="error"
          value={password}
          onChange={handleChange}
        />
      </AuthWrapper>
    </div>
  );
};

export default OwnerSignUp;