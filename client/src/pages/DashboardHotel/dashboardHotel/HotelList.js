import React from 'react';
import { List, Empty } from './HotelList.styles';
import Hotel from './hotelList/Hotel';

const HotelList = () => (
  <>
    <Empty>No offer has been added yet.</Empty>
    <List>
      <Hotel />
      <Hotel />
      <Hotel />
    </List>
  </>
);

export default HotelList;