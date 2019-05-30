import React, { Component } from 'react';

import { ExploreContainer, Sidebar } from './Explore.styles';

import Form from './explore/Form';
import RoomList from './explore/RoomList';

class Explore extends Component {
  render() {
    return (
      <>
        <Form />
        <ExploreContainer>
          <Sidebar>

          </Sidebar>
          <RoomList />
        </ExploreContainer>
      </>
    );
  }
}

export default Explore;