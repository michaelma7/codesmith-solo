import React, { useState, useEffect } from 'react';
// import Map from './../components/Map.jsx';
import InputError from './../components/InputError.jsx';
import InputLabel from './../components/InputLabel.jsx';
import TextInput from './../components/TextInput.jsx';

export default function Homepage({ props }) {
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const [data, setData] = useState('');
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
      <form onSubmit={submit}>
        <InputLabel for='location' value='Location' />
        <TextInput
          id='location'
          className='mt-1 block w-full'
          value={data}
          handleChange={(e) => setData(e.target.value)}
          required
          isFocused
        />
        <InputError for='location' value='location' />
        <button className='submit' type='submit'>
          Set Location
        </button>
      </form>

      <button className='getFood'>I am feeling Lucky!</button>
    </div>
  );
}
