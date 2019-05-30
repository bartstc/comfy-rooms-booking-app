import React from 'react';

import { Rooms } from './RoomList.styles';

import Room from './roomList/Room';

const RoomList = () => {
  return (
    <Rooms>
      <Room />
      <Room />
      <Room />
      <Room />
    </Rooms>
  );
};

export default RoomList;