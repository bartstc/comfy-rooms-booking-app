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
        title="Sign Up"
        subtitle="Do you already have an account?"
        path="signin"
        pathName="Sign In"
      >
        <TextFieldGroup
          label="First name"
          placeholder="Enter first name ..."
          id="firstname"
          name="firstname"
        // error="error"
        // value={username}
        // handleChange={onChange}
        />
        <TextFieldGroup
          label="Second name"
          placeholder="Enter second name ..."
          id="secondname"
          name="secondname"
        // error="error"
        // value={username}
        // handleChange={onChange}
        />
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
        <TextFieldGroup
          label="Confirm"
          placeholder="Confirm password ..."
          id="confirm"
          name="confirm"
          type="confirm"
        // error="error"
        // value={username}
        // handleChange={onChange}
        />
      </AuthWrapper>
    </div>
  );
};

export default SignIn;