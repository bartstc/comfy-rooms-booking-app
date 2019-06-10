import React from 'react';
import { List, Empty } from './HotelList.styles';
import Hotel from './hotelList/Hotel';

const HotelList = ({ hotels }) => (
  <>
    {hotels.length === 0 && <Empty>No offer has been added yet.</Empty>}
    <List>
      {hotels.map(hotel => (
        <Hotel key={hotel._id} {...hotel} />
      ))}
    </List>
  </>
);

export default HotelList;