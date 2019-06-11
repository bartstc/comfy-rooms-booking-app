import React from 'react';

import { Rooms, Results } from './RoomList.styles';

import Room from './roomList/Room';

const RoomList = ({ rooms, city, adults, children }) => {
  const isNoCriteria = () => {
    if (city === '' && adults === '' && children === '') return true;
    return false;
  };

  return (

    <Rooms>
      {isNoCriteria()
        ? null
        : <Results>Results for: <span>
          {city !== '' && `${city}, `}
          {adults} adult(s),
        {` ${children}`} children
        </span></Results>
      }
      {rooms.map(room => (
        <Room key={room._id} {...room} />
      ))}
    </Rooms>
  );
};

export default RoomList;