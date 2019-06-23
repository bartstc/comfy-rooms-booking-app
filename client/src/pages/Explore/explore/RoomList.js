import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rooms, Results, Warning } from './RoomList.styles';
import Room from './roomList/Room';
import Button from '../../../components/Button/Button';

const RoomList = ({
  rooms: { rooms },
  order: { city, adults, children },
  loadMoreResults,
  limit,
  skip
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
      {rooms.length > 0 && rooms.length >= limit + skip
        ? <Button onClick={loadMoreResults}>Load more</Button>
        : null
      }
    </Rooms>
  );
};

RoomList.propTypes = {
  order: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired,
  loadMoreResults: PropTypes.func.isRequired
};

const mapStateToProps = ({ rooms, order }) => ({ rooms, order });

export default connect(mapStateToProps)(RoomList);