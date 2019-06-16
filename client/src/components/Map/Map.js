import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";

import { MapWrapper, Navigation, Preview, PinWrapper } from './Map.styles';

const INITIAL_VIEWPORT = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
};

const Map = ({
  mapStyle,
  height,
  pin = null,
  handleCordsChange
}) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

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
        onClick={onMapClick}
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
                <Preview>

                </Preview>
              )}
            </Marker>
          </PinWrapper>
        )}
      </ReactMapGL>
    </MapWrapper>
  );
};

export default Map;