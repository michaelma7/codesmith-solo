import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function GoogleMap({ apiKey, geolocation }) {
  //get position from user and if it fails use nyc
  const defaultPosition = { lat: 40.4305, lng: 74.0008 };
  let position;
  geolocation ? (position = geolocation) : (position = defaultPosition);
  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={position} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}
