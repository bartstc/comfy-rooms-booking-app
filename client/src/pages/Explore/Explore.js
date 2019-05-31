import React, { Component } from 'react';

import { ExploreContainer, Sidebar } from './Explore.styles';

import SearchForm from '../../components/SearchForm/SearchForm';
import RoomList from './explore/RoomList';

class Explore extends Component {
  render() {
    return (
      <>
        <SearchForm />
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