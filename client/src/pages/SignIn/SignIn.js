import React from 'react';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const SignIn = () => {
  const onSumit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <AuthWrapper
        handleSubmit={onSumit}
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
        // value={username}
        // handleChange={onChange}
        />
        <TextFieldGroup
          label="Password"
          placeholder="Enter password ..."
          id="password"
          name="password"
          type="password"
        // error="error"
        // value={username}
        // handleChange={onChange}
        />
      </AuthWrapper>
    </div>
  );
};

export default SignIn;