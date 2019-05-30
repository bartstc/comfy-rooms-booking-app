import React from 'react';

import { HeaderWrapper, Wrapper, Title, Icons, Location, Value } from './Header.styles';
import {Key} from '../RoomDetails.styles';

import Button from '../../../components/Button/Button';

const Header = () => (
  <HeaderWrapper>
    <Wrapper>
      <Title>Triple estate hotel</Title>
      <Location>Amsterdam, First Common Lake 25</Location>
      <Icons>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </Icons>
      <Button>Order</Button>
    </Wrapper>
    <Wrapper>
      <Key>Rating (23 votes):</Key>
      <Value>9.3</Value>
      <Key>Price per night:</Key>
      <Value>$ 640</Value>
      <Key>For:</Key>
      <Icons>
        <i className="fas fa-male"></i>
        <i className="fas fa-male"></i>
        <i className="fas fa-male"></i>
        <i className="fas fa-male"></i>
        <i className="fas fa-baby"></i>
        <i className="fas fa-baby"></i>
      </Icons>
    </Wrapper>
  </HeaderWrapper>
)

export default Header;