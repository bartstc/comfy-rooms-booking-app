import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../modules/auth/authActions';
import {
  getCurrentProfile,
  clearCurrentProfile,
  createUserProfile,
  askForRegistration
}
  from '../../modules/profile/profileActions';

import { Container, Header, Welcome } from './Dashboard.styles';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import SelectRole from './dashboard/SelectRole';

const Dashboard = ({
  children,
  name,
  logoutUser,
  getCurrentProfile,
  clearCurrentProfile,
  createUserProfile,
  askForRegistration,
  history,
  profile: { loading, profile }
}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const onLogout = e => {
    e.preventDefault();
    logoutUser();
    clearCurrentProfile();
    history.push('signin');
  };

  const renderContent = () => {
    if (loading || profile === null) return <Spinner />;
    if (!Object.keys(profile).length > 0) return <SelectRole
      createUserProfile={createUserProfile}
      handleRegistration={askForRegistration}
      handleLogout={logoutUser}
    />;
    if (Object.keys(profile).length > 0) return children;
  };

  return (
    <Container>
      <Header>
        <Welcome>Welcome, {name}!</Welcome>
        <Button onClick={onLogout}>Logout</Button>
      </Header>
      {renderContent()}
    </Container>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  name: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  createUserProfile: PropTypes.func.isRequired,
  askForRegistration: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, {
  logoutUser,
  getCurrentProfile,
  createUserProfile,
  clearCurrentProfile,
  askForRegistration
})(Dashboard);