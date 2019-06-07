import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../../modules/auth/authActions';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import SignUpInputs from './signUp/SignUpInputs';

const initState = {
  fullname: '',
  email: '',
  password: ''
};

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
        <SignUpInputs
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
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