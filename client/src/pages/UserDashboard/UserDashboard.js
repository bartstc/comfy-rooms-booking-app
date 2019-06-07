import React, { Component } from 'react';
import { History, Table, Empty } from './UserDashboard.styles';
import Dashboard from '../../components/Dashboard/Dashboard';

class UserDashboard extends Component {
  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        <History>
          {/* <Empty>Your history of orders is empty for now.</Empty> */}
          <Table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Hotel</th>
                <th>Contact</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </Table>
        </History>
      </Dashboard>
    );
  }
};

export default UserDashboard;