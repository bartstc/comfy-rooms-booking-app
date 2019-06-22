import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rooms, Results, Warning } from './RoomList.styles';
import Room from './roomList/Room';

const RoomList = ({ 
  rooms: { rooms }, 
  order: { city, adults, children } 
}) => {
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
      {rooms.length === 0 && <Warning>No results</Warning>}
    </Rooms>
  );
};

RoomList.propTypes = {
  order: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired
};

const mapStateToProps = ({ rooms, order }) => ({ rooms, order });

export default connect(mapStateToProps)(RoomList);