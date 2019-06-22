import React from 'react';
import PropTypes from 'prop-types';
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

HotelList.propTypes = {
  hotels: PropTypes.array
};

export default HotelList;