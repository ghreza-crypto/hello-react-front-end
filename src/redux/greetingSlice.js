import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const responce = await fetch('http://localhost:3000/greetings');
    const data = await responce.json();
    return data;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getGreeting.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default greetingSlice.reducer;
