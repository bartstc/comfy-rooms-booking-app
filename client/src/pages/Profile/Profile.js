import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../modules/auth/authActions';

import { ProfileContainer, Header, Welcome, History, Table, Empty } from './Profile.styles';

import Button from '../../components/Button/Button';

class Profile extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('signin');
  };

  render() {
    // if (!this.props.auth.isAuth) return <Redirect to="/signin" />

    return (
      <ProfileContainer>
        <Header>
          <Welcome>Welcome, John Doe!</Welcome>
          <Button onClick={this.onLogout}>Logout</Button>
        </Header>
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
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Profile);