import React, { Component } from 'react';

import { ProfileContainer, UserData, Title, UserInfo, HistoryList, ListItem, OfferInfo } from './Profile.styles';

class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <UserData>
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

export default Profile;