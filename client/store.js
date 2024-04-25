import { configureStore } from '@reduxjs/toolkit';
import foodReducer form './reducers/foodSlice';

export default configureStore({
  reducer: {
    food: foodReducer,
  },
});
