import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SWAPI from '../../services/SWAPI';

export const fetchCharacters = createAsyncThunk(
  'chracters/fetchCharacters',
  async () => {
    const characters = await SWAPI.getPeople();
    return characters;
  },
);

export const goToPage = createAsyncThunk(
  'pages/goToPage',
  async (prevOrNext) => {
    const response = await SWAPI.goToPage(prevOrNext);
    return response;
  },
);

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    isLoading: true,
    results: [],
    isError: false,
    page: 1,
    next: null,
    prev: null,
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
      state.next = payload.next;
      state.prev = payload.previous;
      state.isLoading = false;
    },
    [goToPage.fulfilled]: (state, { payload }) => {
      const newPage = payload.results.map((char) => char);
      state.results = newPage;
      state.next = payload.next;
      state.prev = payload.previous;
    },
  },
});

export default characterSlice.reducer;
