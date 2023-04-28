import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordersId: '',
  numOfPeople: 0,
  isLoading: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
});

export default orderSlice.reducer;
