import React from 'react';

import { BannerWrapper, BannerTitle, BannerSubtitle } from './Banner.styles';

import NavLink from '../../../components/NavLink/NavLink';

const Banner = () => (
  <BannerWrapper>
    <BannerTitle>Application for booking rooms.</BannerTitle>
    <BannerSubtitle>Use our application and find the best accommodation for you.</BannerSubtitle>
    <NavLink to="/explore">Explore</NavLink>
  </BannerWrapper>
);

export default Banner;