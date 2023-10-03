import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: ''
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = '';
    }
  }
});

export const { changeFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
