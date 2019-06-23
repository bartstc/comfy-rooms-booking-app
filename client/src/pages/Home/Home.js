import React, { Component } from 'react';

import { SectionTitle } from './Home.styles';

import Banner from './home/Banner';
import SearchForm from '../../components/SearchForm/SearchForm';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';
// import HighestRated from './home/HighestRated';
// import MostVisited from './home/MostVisited';

class Home extends Component {
  render() {
    return (
      <>
        <ScrollToTopOnMount />
        <Banner />
        <SectionTitle>Choose your destination</SectionTitle>
        <SearchForm history={this.props.history} />
        {/* <HighestRated /> */}
        {/* <MostVisited /> */}
      </>
    );
  }
};

export default Home;