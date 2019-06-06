import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinUser } from '../../modules/auth/authActions';
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

const SignIn = ({ signinUser, history, errors, auth: { isAuth } }) => {
  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  function signIn() {
    signinUser(values, history);
  };

  if (isAuth) return <Redirect to="/profile" />;

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

SignIn.propTypes = {
  signinUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors, auth }) => ({ errors, auth });

export default connect(mapStateToProps, { signinUser })(SignIn);