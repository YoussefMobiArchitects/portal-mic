import { createSlice } from '@reduxjs/toolkit';


export const appBarSlice = createSlice({
  name: 'appBarReducer',
  initialState: {
    selectedItemAppbar: "1",
  },
  reducers: {
    setSelectedItemAppbarAction: (state,action) => {
      state.selectedItemAppbar = action.payload
    },
  },
  extraReducers: {
    // add your async reducers here
  }
})
// Action creators
export const { setSelectedItemAppbarAction } = appBarSlice.actions;
export default appBarSlice.reducer;