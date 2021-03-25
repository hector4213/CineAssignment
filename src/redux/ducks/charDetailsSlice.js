import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import SWAPI from '../../services/SWAPI';

export const getCharById = createAsyncThunk(
  'charDetails/getCharById',
  async (id) => {
    const character = await SWAPI.getPersonById(id);
    return character;
  },
);

const charDetailsSlice = createSlice({
  name: 'charDetails',
  initialState: {
    isLoading: true,
    char: {},
    isError: false,
  },
  reducers: {},
  extraReducers: {
    [getCharById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharById.rejected]: (state) => {
      state.isError = true;
    },
    [getCharById.fulfilled]: (state, { payload }) => {
      state.char = payload;
    },
  },
});

export default charDetailsSlice.reducer;
