import React from 'react';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import TextFieldGroup from '../../components/Inputs/TextFieldGroup/TextFieldGroup';

const initState = {
  firstname: '',
  secondname: '',
  email: '',
  password: ''
};

const SignIn = () => {
  const signIn = () => {
    console.log(values);

    // handle actions
  };

  const { values, handleChange, handleSubmit } = useForm(signIn, initState);
  const { firstname, secondname, email, password } = values;

  return (
    <div>
      <AuthWrapper
        handleSubmit={handleSubmit}
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
          value={firstname}
          onChange={handleChange}
        />
        <TextFieldGroup
          label="Second name"
          placeholder="Enter second name ..."
          id="secondname"
          name="secondname"
          // error="error"
          value={secondname}
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

export default SignIn;