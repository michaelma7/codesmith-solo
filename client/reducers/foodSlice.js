import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    name: 'No location selected',
    country: '',
    region: '',
    history: '',
    description: '',
  },
  reducers: {
    getFood: (state, action) => {
      state.name = action.payload.name;
      state.country = action.payload.country;
      state.region = action.payload.region;
      state.history = action.payload.history;
      state.description = action.payload.description;
    }
  },
});

//thunk for getting food information
export const getFoodAsync = location => {
  return async (dispatch, getState) => {
    try {
      const foodData = await fetch(`/api/${location}`);
      //check for empty data 
      if(!foodData.name) {
        throw 'Could not find food for area. Check back later!';
      }
      dispatch(getFood(foodData));
    } catch (err) {
      console.log('Getting foodData error: ', err)
    }
  }
}
//action creator/actions const
export const {
  getFood
} = foodSlice.actions;
export default foodSlice.reducer;
