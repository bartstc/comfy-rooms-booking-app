import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../modules/auth/authActions';

import { Container, Header, Welcome } from './Dashboard.styles';

import Button from '../Button/Button';

const Dashboard = ({ children, name, logoutUser, auth, history }) => {
  const onLogout = e => {
    e.preventDefault();
    logoutUser();
    history.push('signin');
  };

  if (!auth.isAuth) return <Redirect to="/signin" />

  return (
    <Container>
      <Header>
        <Welcome>Welcome, {name}!</Welcome>
        <Button onClick={onLogout}>Logout</Button>
      </Header>
      {children}
    </Container>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);