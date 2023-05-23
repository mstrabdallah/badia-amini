import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  carloading: false,
  car: {},
  error: {},
};
export const editCar = createAsyncThunk("car/editCar", async (payload) => {
  try {
    const data = await axios.put("/car/" + payload.id, payload.data);
    return data.data;
  } catch {
    return thunkAPI.rejectWithValue(error);
  }
});

export const editCarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: {
    [editCar.pending]: (state) => {
      state.carloading = true;
    },
    [editCar.fulfilled]: (state, action) => {
      state.car = action.payload?.car;
      state.carloading = false;
    },
    [editCar.rejected]: (state, action) => {
      state.carloading = false;
      state.error = action.payload?.error;
    },
  },
});

// Action creators are generated for each case reducer function

export default editCarSlice.reducer;
