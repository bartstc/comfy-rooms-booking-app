import React, {Component} from 'react';

import { SectionTitle } from './Home.styles';

import Banner from './home/Banner';
import SearchForm from '../../components/SearchForm/SearchForm';
import HighestRated from './home/HighestRated';
import MostVisited from './home/MostVisited';

class Home extends Component {
  render () {
    return (
      <>
        <Banner />
        <SectionTitle>Choose your destination</SectionTitle>
        <SearchForm />
        <HighestRated />
        <MostVisited />
      </>
    );
  }
};

export default Home;