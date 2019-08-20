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

const SignIn = ({ signinUser, history, errors, auth: { isAuth, user } }) => {
  const { values, handleChange, handleSubmit } = useForm(signIn, initState);

  function signIn() {
    signinUser(values, history);
  };

  if (isAuth && user.role === 0) return <Redirect to="/user_dashboard" />;
  if (isAuth && user.role === 1) return <Redirect to="/user_dashboard" />;
  if (isAuth && user.role === 2) return <Redirect to="/hotel_dashboard" />;
  if (isAuth && user.role === 3) return <Redirect to="/admin_dashboard" />;

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