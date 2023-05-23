import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  docs: [],
};

export const getdocs = createAsyncThunk("docs/getdocs", async () => {
  const data = await axios.get("/car_insurance");
  return data.data.carInsurance;
});

export const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {},
  extraReducers: {
    [getdocs.pending]: (state) => {
      state.loading = true;
    },
    [getdocs.fulfilled]: (state, action) => {
      state.docs = action?.payload?.data;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function

export default docsSlice.reducer;
