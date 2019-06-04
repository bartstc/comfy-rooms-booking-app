import React, { Component } from 'react';

import { DetailsContainer } from './RoomDetails.styles';

import Header from './roomDetails/Header';
import Slider from './roomDetails/Slider';
import CommentList from './roomDetails/CommentList';
import Description from './roomDetails/Description';

const iconClasses = {
  parking: 'fas fa-parking',
  freewifi: 'fas fa-wifi',
  swimmingpool: 'fas fa-swimming-pool',
  gym: 'fas fa-dumbbell',
  restaurant: 'fas fa-utensils',
  airporttransfer: 'fas fa-plane-departure',
  petsareallowed: 'fas fa-paw',
  nonsmokingrooms: 'fas fa-smoking-ban',
  terrace: 'fas fa-umbrella-beach',
  airconditioning: 'fas fa-wind'
};

const facilities = [
  'parking',
  'free wifi'
];

class RoomDetails extends Component {

  render() {
    return (
      <DetailsContainer>
        <Header />
        <Slider />
        <Description />
        <CommentList />
        {facilities.map(item => (
          <i className={iconClasses[item.replace(/\s/g, "")]}></i> // RegEx removes white spaces
        ))}
      </DetailsContainer>
    );
  }
};

export default RoomDetails;