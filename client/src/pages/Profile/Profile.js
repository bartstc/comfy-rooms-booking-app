import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../modules/auth/authActions';

import { ProfileContainer, UserData, Title, UserInfo, HistoryList, ListItem, OfferInfo } from './Profile.styles';

import Button from '../../components/Button/Button';

class Profile extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('signin');
  };

  render() {
    return (
      <ProfileContainer>
        <UserData>
          <Button onClick={this.onLogout}>Logout</Button>
          <Title>User data</Title>
          <UserInfo>First name: <span>John</span></UserInfo>
          <UserInfo>Second name: <span>Doe</span></UserInfo>
          <UserInfo>Email: <span>johndoe@gmail.com</span></UserInfo>
        </UserData>
        <HistoryList>
          <Title>History</Title>
          <ListItem>
            <OfferInfo>Hotel: <span>Triple estate hotel</span></OfferInfo>
            <OfferInfo>City: <span>Amsterdam</span></OfferInfo>
            <OfferInfo>Address: <span>Grove Street 22</span></OfferInfo>
            <OfferInfo>Contact: <span>333 444 555</span></OfferInfo>
            <OfferInfo>Check in: <span>02.09.2019</span></OfferInfo>
            <OfferInfo>Check out: <span>02.21.2019</span></OfferInfo>
          </ListItem>
          <ListItem>
            <OfferInfo>Hotel: <span>Triple estate hotel</span></OfferInfo>
            <OfferInfo>City: <span>Amsterdam</span></OfferInfo>
            <OfferInfo>Address: <span>Grove Street 22</span></OfferInfo>
            <OfferInfo>Contact: <span>333 444 555</span></OfferInfo>
            <OfferInfo>Check in: <span>02.09.2019</span></OfferInfo>
            <OfferInfo>Check out: <span>02.21.2019</span></OfferInfo>
          </ListItem>
        </HistoryList>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(null, {logoutUser})(Profile);