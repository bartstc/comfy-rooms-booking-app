import React from 'react';

import { Rooms, Results } from './RoomList.styles';

import Room from './roomList/Room';

const RoomList = () => {
  return (
    <Rooms>
      <Results>Results for: <span>London, 2 adult(s), 2(children)</span></Results>
      <Room />
      <Room />
      <Room />
      <Room />
    </Rooms>
  );
};

export default RoomList;