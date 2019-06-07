import React, { Component } from 'react';
import { Table, Empty, AcceptBtn } from './AdminDashboard.styles';

import Dashboard from '../../components/Dashboard/Dashboard';

class AdminDashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('signin');
  };

  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        {/* <Empty>No offer has been added yet.</Empty> */}
        <Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Email</th>
              <th>Register</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5556dhdhjjsh78</td>
              <td>test@gmail.com</td>
              <td><AcceptBtn>Accept</AcceptBtn></td>
            </tr>
          </tbody>
        </Table>
      </Dashboard>
    );
  }
};

export default AdminDashboard;