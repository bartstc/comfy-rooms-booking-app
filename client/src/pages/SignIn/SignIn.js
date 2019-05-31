import React from 'react';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const initState = {
  email: '',
  password: ''
};

const SignIn = () => {
  const signIn = () => {
    console.log(values);

    // handle actions
  };

  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  const { email, password } = values;
  return (
    <div>
      <AuthWrapper
        handleSubmit={handleSubmit}
        title="Sign In"
        subtitle="You do not have an account?"
        path="signup"
        pathName="Sign Up"
      >
        <TextFieldGroup
          label="Email"
          placeholder="Enter email ..."
          id="email"
          name="email"
          type="email"
          // error="error"
          value={email || ''}
          onChange={handleChange}
        />
        <TextFieldGroup
          label="Password"
          placeholder="Enter password ..."
          id="password"
          name="password"
          type="password"
          // error="error"
          value={password || ''}
          onChange={handleChange}
        />
      </AuthWrapper>
    </div>
  );
};

export default SignIn;