import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Map({ apiKey }) {
  let map;
  async function initMap() {
    
    //get position from user and if it fails use nyc
    const defaultPosition = { lat: 40.4305, lng: 74.0008 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map = new Map(/**div for map */, { zoom: 10, center: defaultPosition, mapId='57138afb5cc9e472'});
    const marker = new AdvancedMarkerElement({map: map, position: defaultPosition, title})
  }
  return ();
}
