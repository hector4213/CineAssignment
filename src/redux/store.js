import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './ducks/characterSlice';

export default configureStore({
  reducer: {
    characters: characterSlice,
  },
});
