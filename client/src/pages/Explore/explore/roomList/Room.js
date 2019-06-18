import React from 'react';
import { Link } from 'react-router-dom';

import { RoomCard, ImageWrapper, Image, Content, WrapperLeft, WrapperRight, Icons, Type, Info, Location, Name } from './Room.styles';

const Room = ({
  _id,
  type,
  city,
  hotel: { address, name, images, rating, opinions },
  stars,
  price
}) => {
  return (
    <RoomCard>
      <ImageWrapper>
        <Link to={`/room/${_id}`}>
          <Image src={images.length > 0 ? images[0].url : '/images/Showcase.jpg'} />
        </Link>
      </ImageWrapper>
      <Content>
        <WrapperLeft>
          <Type>{type}</Type>
          <Name>{name}</Name>
          <Location>{`${city}, ${address}`}</Location>
          <Icons>
            {Array.from(Array(stars)).map((star, i) => <i key={i} className="fas fa-star"></i>)}
          </Icons>
        </WrapperLeft>
        <WrapperRight>
          {rating === 0
            ? <Info>No ratings</Info>
            : <Info><span>{rating}</span> ({opinions.length} votes)</Info>
          }
          <Info><span>$ {price}</span> / night</Info>
        </WrapperRight>
      </Content>
    </RoomCard>
  );
};

export default Room;