import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodAsync } from './../reducers/foodSlice';
import InputError from './InputError.jsx';
import InputLabel from './InputLabel.jsx';
import TextInput from './TextInput.jsx';
import FoodItem from './FoodItem.jsx';

export default function FoodForm () {
  const dispatch = useDispatch();
  const food = useSelector(state => state.food);
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(getFoodAsync(data));
  };

  const [data, setData] = useState('');

  return (
    <div className="form">
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
      <FoodItem food={food}/>
    </div>  
  );
}