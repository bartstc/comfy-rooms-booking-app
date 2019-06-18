import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, Wrapper, Title, Icons, Location, Value, HeaderInfo, Divider } from './Header.styles';
import { Key } from '../RoomDetails.styles';

import Button from '../../../components/Button/Button';

const Header = ({
  name,
  city,
  address,
  stars,
  rating,
  votes,
  price,
  adults,
  children
}) => (
    <HeaderWrapper>
      <Wrapper>
        <Title>{name}</Title>
        <Location>{`${city}, ${address}`}</Location>
        <Icons>
          {Array.from(Array(stars)).map((icon, i) => <i key={i} className="fas fa-star"></i>)}
        </Icons>
        <Divider />
        <Button>Order</Button>
      </Wrapper>
      <Wrapper>
        <HeaderInfo>
          <Key>Rating ({votes} votes):</Key>
          <Value>{rating}</Value>
        </HeaderInfo>
        <HeaderInfo>
          <Key>Price per night:</Key>
          <Value>$ {price}</Value>
        </HeaderInfo>
        <HeaderInfo>
          <Key>For:</Key>
          <Icons>
            {Array.from(Array(adults)).map((icon, i) => <i key={i} className="fas fa-male"></i>)}
            {Array.from(Array(children)).map((icon, i) => <i key={i} className="fas fa-baby"></i>)}
          </Icons>
        </HeaderInfo>
      </Wrapper>
    </HeaderWrapper>
  );

Header.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired
};

export default Header;