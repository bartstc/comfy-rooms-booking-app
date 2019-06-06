import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../../modules/auth/authActions';
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

const SignUp = ({ signupUser, history, errors, auth: { isAuth } }) => {
  const { values, handleChange, handleSubmit } = useForm(signUp, initState);

  function signUp() {
    signupUser(values, history);
  };

  if (isAuth) return <Redirect to="/profile" />;

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

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors, auth }) => ({ errors, auth });

export default connect(mapStateToProps, { signupUser })(SignUp);