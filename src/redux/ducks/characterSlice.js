import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SWAPI from '../../services/SWAPI';

export const fetchCharacters = createAsyncThunk(
  'chracters/fetchCharacters',
  async () => {
    const characters = await SWAPI.getPeople();
    return characters;
  },
);

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    isLoading: true,
    results: [],
    isError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected]: (state) => {
      state.isError = true;
    },
    [fetchCharacters.fulfilled]: (state, { payload }) => {
      const characters = payload.results.map((char) => char);
      state.results = characters;
      state.isLoading = false;
    },
  },
});

export default characterSlice.reducer;
