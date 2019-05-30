import React from 'react';
import { Link } from 'react-router-dom';

import { RoomCard, ImageWrapper, Image, Content, WrapperLeft, WrapperRight, Icons, Type, Info, Location, Name } from './Room.styles';

const Room = () => {
  return (
    <RoomCard>
        <ImageWrapper>
          <Link to="/">
            <Image src="/images/Showcase.jpg" />
          </Link>
        </ImageWrapper>
        <Content>
          <WrapperLeft>
            <Type>Apartament</Type>
            <Name>Triple Estate Hotel</Name>
            <Location>First Common Lane 25</Location>
            <Icons>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </Icons>
          </WrapperLeft>
          <WrapperRight>
            <Info><span>9.3</span> (23 votes)</Info>
            <Info><span>$ 640</span> / night</Info>
          </WrapperRight>
        </Content>
      </RoomCard>
  );
};

export default Room;