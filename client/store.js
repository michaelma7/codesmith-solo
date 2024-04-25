import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './reducers/foodSlice';

export default configureStore({
  reducer: {
    food: foodReducer,
  },
});
