import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './ducks/characterSlice';
import characterDetails from './ducks/charDetailsSlice';

export default configureStore({
  reducer: {
    characters: characterSlice,
    characterDetails,
  },
});
