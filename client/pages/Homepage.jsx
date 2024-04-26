import React, { useState, useEffect } from 'react';
import FoodForm from './../components/FoodForm.jsx';
import { Link } from 'react-router-dom';
// import Map from './../components/Map.jsx';

export default function Homepage({ props }) {
  
  const [key, setKey] = useState('');
  // on load fetch
  // useEffect(() => {
  //   async function fetchKey() {
  //     //fetch api key from backend
  //     try {
  //       const res = await fetch('http://localhost:3000/api', {
  //         mode: 'no-cors',
  //       });
  //       console.log(res);
  //       setKey('AIzaSyDopUhrzMq9AEFFdKUu9nSdCPyo56zGo8E');
  //       return;
  //     } catch (err) {
  //       console.log('Get Key Error: ', err);
  //     }
  //   }
  //   fetchKey();
  // }, []);

  // useEffect(() => {
  //   let map;
  //   async function initMap() {
  //     const defaultPosition = { lat: 40.4305, lng: 74.0008 };
  //     const { Map } = await google.maps.importLibrary('maps');
  //     const { AdvancedMarkerElement } = await google.maps.importLibrary(
  //       'marker'
  //     );
  //     map = new Map(document.getElementById('map'), {
  //       zoom: 10,
  //       center: defaultPosition,
  //       mapId: '57138afb5cc9e472',
  //     });
  //     const marker = new AdvancedMarkerElement({
  //       map: map,
  //       position: defaultPosition,
  //       title: 'Where You at',
  //     });
  //   }
  //   initMap();
  // }, []);

  return (
    <div className='homepage'>
      <h1 className='bg-indigo-500'>Want to try new food?</h1>
      <p>Pick a place on the map or submit your location below</p>
      {/* <Map apiKey={'AIzaSyDopUhrzMq9AEFFdKUu9nSdCPyo56zGo8E'} /> */}
      <FoodForm />
      <Link to={`addItem`}>Add New Food</Link>
      <button className='getFood'>I am feeling Lucky!</button>
    </div>
  );
}
