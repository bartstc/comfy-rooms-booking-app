import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinUser } from '../../modules/auth/authActions';
import useForm from '../../hooks/useForm';

import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import SignInInputs from './signIn/SignInInputs';

const initState = {
  email: '',
  password: ''
};

const SignIn = ({ signinUser, history, errors, auth: { isAuth } }) => {
  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  function signIn() {
    signinUser(values, history);
  };

  if (isAuth) return <Redirect to="/user_dashboard" />;

  return (
    <AuthWrapper
      handleSubmit={handleSubmit}
      title="Sign In"
      subtitle="You do not have an account?"
      path="signup"
      pathName="Sign Up"
    >
      <SignInInputs
        errors={errors}
        values={values}
        handleChange={handleChange}
      />
    </AuthWrapper>
  );
};

SignIn.propTypes = {
  signinUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors, auth }) => ({ errors, auth });

export default connect(mapStateToProps, { signinUser })(SignIn);