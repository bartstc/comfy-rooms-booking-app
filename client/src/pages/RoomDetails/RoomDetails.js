import React, { Component } from 'react';

import { DetailsContainer } from './RoomDetails.styles';

import Header from './roomDetails/Header';
import Slider from './roomDetails/Slider';
import CommentList from './roomDetails/CommentList';
import Description from './roomDetails/Description';

class RoomDetails extends Component {

  render() {
    return (
      <DetailsContainer>
        <Header />
        <Slider />
        <Description />
        <CommentList />
      </DetailsContainer>
    );
  }
};

export default RoomDetails;