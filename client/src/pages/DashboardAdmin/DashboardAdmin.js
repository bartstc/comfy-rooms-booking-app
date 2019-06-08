import React, { Component } from 'react';

import Dashboard from '../../components/Dashboard/Dashboard';
import Requests from './dashboardAdmin/Requests';

class AdminDashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('signin');
  };

  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        <Requests />
      </Dashboard>
    );
  }
};

export default AdminDashboard;