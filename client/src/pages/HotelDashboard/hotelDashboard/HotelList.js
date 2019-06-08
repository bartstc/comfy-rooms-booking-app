import React from 'react';
import { List, Empty } from './HotelList.styles';
import Hotel from './hotelList/Hotel';

const HotelList = () => {
  return (
    <List>
      <Empty>No offer has been added yet.</Empty>
      <Hotel />
      <Hotel />
      <Hotel />
    </List>
  );
};

export default HotelList;