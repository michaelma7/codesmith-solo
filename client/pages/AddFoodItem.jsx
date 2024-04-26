import React, { useState } from 'react';
import InputError from '../components/InputError.jsx';
import InputLabel from '../components/InputLabel.jsx';
import TextInput from '../components/TextInput.jsx';
import { Link } from 'react-router-dom';

export default function AddFoodItem () {
  
  const initialValues = {
    id: 1,
    name: '',
    region: '',
    country: '',
    description: '',
    history: '',
  };

  const [values, setValues] = useState(initialValues);
  const changeData = (e) => {
    const {id, value} = e.target;
    setValues({
      ...values,
      [id] : value,
    });
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(values),
      });
      if (!response) throw console.log('Something went wrong!');
      console.log(response);
      //reset form
      setValues(initialValues);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  return(
    <div>
      {/* <Link to={`/`}>Back</Link> */}
      <form className="createFood" onSubmit={submit}>
        <InputLabel for='name' value='name' />
        <TextInput 
          id='name'
          className='mt-1 block w-full'
          value={values.name}
          handleChange={changeData}
          required
          isFocused
        />
        <InputError for='name' value='name' />

        <InputLabel for='region' value='region' />
        <TextInput 
          id='region'
          className='mt-1 block w-full'
          value={values.region}
          handleChange={changeData}
          required
          isFocused
        />
        <InputError for='region' value='region' />
        <InputLabel for='country' value='country' />
        <TextInput 
          id='country'
          className='mt-1 block w-full'
          value={values.country}
          handleChange={changeData}
          required
          isFocused
        />
        <InputError for='country' value='country' />
        <InputLabel for='description' value='description' />
        <TextInput 
          id='description'
          className='mt-1 block w-full'
          value={values.description}
          handleChange={changeData}
          required
          isFocused
        />
        <InputError for='description' value='description' />
        <InputLabel for='history' value='history' />
        <TextInput 
          id='history'
          className='mt-1 block w-full'
          value={values.history}
          handleChange={changeData}
          required
          isFocused
        />
        <InputError for='history' value='history' />
        <button className='submit' type='submit'>
          Create New Food Item
        </button>
      </form>
    </div>
  );
}