import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";

import { MapWrapper, Navigation, Popup, PinWrapper, Image, Info, Title, Desc } from './Map.styles';

const INITIAL_VIEWPORT = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
};

const Map = ({
  mapStyle,
  height,
  pin = null,
  handleCordsChange,
  initViwport
}) => {
  const [viewport, setViewport] = useState(initViwport || INITIAL_VIEWPORT);

  const onMapClick = ({ lngLat, leftButton }) => {
    if (!leftButton) return;
    const [longitude, latitude] = lngLat;
    handleCordsChange(longitude, latitude);
  };

  return (
    <MapWrapper>
      <ReactMapGL
        width="100%"
        height={height}
        mapStyle={`mapbox://styles/mapbox/${mapStyle}-v9`}
        mapboxApiAccessToken="pk.eyJ1IjoiYmFydHN0YyIsImEiOiJjanVpcnlpeHMxYzJzM3lwZGZsNmlvNTc2In0.xerR67g9x883LTLBNBRV0A"
        onViewportChange={newViewport => setViewport(newViewport)}
        onClick={handleCordsChange && onMapClick}
        {...viewport}
      >
        <Navigation>
          <NavigationControl
            onViewportChange={newViewport => setViewport(newViewport)}
          />
        </Navigation>

        {pin && pin.latitude !== 0 && (
          <PinWrapper>
            <Marker
              latitude={pin.latitude}
              longitude={pin.longitude}
              offsetLeft={-19}
              offsetTop={-37}
            >
              <PlaceTwoTone
                style={{ fontSize: '40px', color: 'gold' }}
              />
              {pin.title && (
                <Popup>
                  <Image src={pin.image}></Image>
                  <Info>
                    <Title>{pin.title}</Title>
                    <Desc>{pin.description}</Desc>
                  </Info>
                </Popup>
              )}
            </Marker>
          </PinWrapper>
        )}
      </ReactMapGL>
    </MapWrapper>
  );
};

Map.propTyles = {
  mapStyle: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  pin: PropTypes.object,
  handleCordsChange: PropTypes.func,
  initViwport: PropTypes.object
};

export default Map;