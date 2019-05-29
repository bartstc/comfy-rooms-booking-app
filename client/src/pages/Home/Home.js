import React from 'react';

import { Banner, BannerTitle, BannerSubtitle } from './Home.styles';

import NavLink from '../../components/NavLink/NavLink';
import SearchForm from './home/SearchForm';
import HighestRated from './home/HighestRated';
import MostVisited from './home/MostVisited';
import AccomodationTypes from './home/AccomodationTypes';
import AuthInfo from './home/AuthInfo';

const Home = () => {
  return (
    <>
      <Banner>
        <BannerTitle>Application for booking rooms.</BannerTitle>
        <BannerSubtitle>Use our application and find the best accommodation for you.</BannerSubtitle>
        <NavLink to="/explore">Explore</NavLink>
      </Banner>
      <SearchForm />
      <HighestRated />
      <MostVisited />
      <AccomodationTypes />
      <AuthInfo />
    </>
  );
};

export default Home;