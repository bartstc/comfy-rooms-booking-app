import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../modules/profile/profileActions';

import Dashboard from '../../components/Dashboard/Dashboard';
import Requests from './dashboardAdmin/Requests';

class AdminDashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('signin');
  };

  render() {
    const { auth, history, profile: { profile }, registerUser } = this.props;

    return (
      <Dashboard
        name={auth.user.fullname}
        history={history}
      >
        <Requests
          handleRegister={registerUser}
          requests={profile && profile.requests}
        />
      </Dashboard>
    );
  }
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

export default connect(null, { registerUser })(AdminDashboard);