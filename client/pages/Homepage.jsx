import React, { useState } from 'react';
import InputError from './../components/InputError.jsx';
import InputLabel from './../components/InputLabel.jsx';
import TextInput from './../components/TextInput.jsx';

export default function Homepage({ props }) {
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    //get request for location from google maps?
  };

  const [data, setData] = useState('');

  return (
    <div className='homepage'>
      <h1 className='bg-indigo-500'>Want to try new food?</h1>
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
      <button className='getFood'>Try This!</button>
    </div>
  );
}
