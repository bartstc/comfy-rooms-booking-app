import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRoom } from '../../modules/rooms/roomsActions';
import { DetailsContainer } from './RoomDetails.styles';

import Header from './roomDetails/Header';
import Slider from './roomDetails/Slider';
import CommentList from './roomDetails/CommentList';
import Description from './roomDetails/Description';
import Spinner from '../../components/Spinner/Spinner';
import Map from '../../components/Map/Map';

class RoomDetails extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.match.params.id);
  };

  render() {
    const { room, loading } = this.props.rooms;

    return (
      <DetailsContainer>
        {loading && <Spinner />}
        {room &&
          <>
            <Header
              name={room.hotel.name}
              city={room.city}
              address={room.hotel.address}
              stars={room.stars}
              rating={room.hotel.rating}
              votes={room.hotel.opinions.length}
              price={room.price}
              adults={room.adults}
              children={room.children}
            />
            <Slider
              images={room.hotel.images}
            />
            <Description
              facilities={room.facilities}
              description={room.hotel.description}
            />
            <Map
              mapStyle="dark"
              height="45vh"
              pin={room.hotel.pin}
              initViwport={{
                latitude: room.hotel.pin.latitude,
                longitude: room.hotel.pin.longitude,
                zoom: 13
              }}
            />
            <CommentList
              opinions={room.hotel.opinions}
            />
          </>
        }
      </DetailsContainer>
    );
  }
};

RoomDetails.propTypes = {
  rooms: PropTypes.object.isRequired,
  getRoom: PropTypes.func.isRequired
};

const mapStateToProps = ({ rooms }) => ({ rooms });

export default connect(mapStateToProps, { getRoom })(RoomDetails);