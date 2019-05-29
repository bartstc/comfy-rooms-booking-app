import React from 'react';

import { Banner, BannerTitle, BannerSubtitle } from './Home.styles';

import NavLink from '../../components/NavLink/NavLink';
import SearchForm from './home/SearchForm';

const Home = () => {
  return (
    <>
      <Banner>
        <BannerTitle>Application for booking rooms.</BannerTitle>
        <BannerSubtitle>Use our application and find the best accommodation for you.</BannerSubtitle>
        <NavLink to="/explore">Explore</NavLink>
      </Banner>
      <SearchForm />
    </>
  );
};

export default Home;