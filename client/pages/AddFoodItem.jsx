import React, { useState } from 'react';
import InputError from '../components/InputError';
import InputLabel from '../components/InputLabel';
import TextInput from '../components/TextInput';

export default function AddFoodItem () {
  const initialValues = {
    name: '',
    region: '',
    country: '',
    description: '',
    history: '',
  };

  const [value, setValues] = useState(initialValues);
  const changeData = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    //dispatch(getFoodAsync(data));
  }

  return(
    <form className="createFood" onSubmit={submit}>
      <InputLabel for='name' value='name' />
      <TextInput 
        id='name'
        className='mt-1 block w-full'
        value={data}
        handleChange={changeData}
        required
        isFocused
      />
      <InputError for='name' value='name' />

      <InputLabel for='region' value='region' />
      <TextInput 
        id='region'
        className='mt-1 block w-full'
        value={data}
        handleChange={changeData}
        required
        isFocused
      />
      <InputError for='region' value='region' />
      <InputLabel for='country' value='country' />
      <TextInput 
        id='country'
        className='mt-1 block w-full'
        value={data}
        handleChange={changeData}
        required
        isFocused
      />
      <InputError for='country' value='country' />
      <InputLabel for='description' value='description' />
      <TextInput 
        id='description'
        className='mt-1 block w-full'
        value={data}
        handleChange={changeData}
        required
        isFocused
      />
      <InputError for='description' value='description' />
      <InputLabel for='history' value='history' />
      <TextInput 
        id='history'
        className='mt-1 block w-full'
        value={data}
        handleChange={changeData}
        required
        isFocused
      />
      <InputError for='history' value='history' />
      <button className='submit' type='submit'>
        Create New Food Item
      </button>
    </form>
  );
}