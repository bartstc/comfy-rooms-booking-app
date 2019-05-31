import React, { Component } from 'react';

import { ExploreContainer } from './Explore.styles';

import SearchForm from '../../components/SearchForm/SearchForm';
import RoomList from './explore/RoomList';
import Filters from './explore/Filters';

class Explore extends Component {
  render() {
    return (
      <>
        <SearchForm />
        <ExploreContainer>
          <Filters />
          <RoomList />
        </ExploreContainer>
      </>
    );
  }
}

export default Explore;