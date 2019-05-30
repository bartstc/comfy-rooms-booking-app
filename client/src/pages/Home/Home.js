import React, {Component} from 'react';

import {SectionTitle} from './Home.styles';

import Banner from './home/Banner';
import Form from './home/Form';
import HighestRated from './home/HighestRated';
import MostVisited from './home/MostVisited';
import AuthInfo from './home/AuthInfo';

class Home extends Component {

  render () {
    return (
      <>
        <Banner />
        <SectionTitle>Choose your destination</SectionTitle>
        <Form />
        <HighestRated />
        <MostVisited />
        <AuthInfo />
      </>
    );
  }
};

export default Home;