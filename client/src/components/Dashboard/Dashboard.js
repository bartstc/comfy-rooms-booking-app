import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../modules/auth/authActions';

import { Container, Header, Welcome } from './Dashboard.styles';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import SelectRole from './dashboard/SelectRole';

const Dashboard = ({ children, name, logoutUser, history, profile: { loading, profile } }) => {
  const onLogout = e => {
    e.preventDefault();
    logoutUser();
    history.push('signin');
  };

  // useEffect and set profile!

  let dashboardContent;
  let profileExists = Object.keys(profile).length > 0 || null;

  if (loading) dashboardContent = <Spinner />;
  if (!loading && !profileExists) dashboardContent = <SelectRole />;
  if (!loading && profileExists) dashboardContent = children;

  return (
    <Container>
      <Header>
        <Welcome>Welcome, {name}!</Welcome>
        <Button onClick={onLogout}>Logout</Button>
      </Header>
      {dashboardContent}
    </Container>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, { logoutUser })(Dashboard);