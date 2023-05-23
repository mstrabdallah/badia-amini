import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  identities: [],
};

export const getids = createAsyncThunk("index/ids", async () => {
  const data = await axios.get("/identity");
  return data.data;
});

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {},
  extraReducers: {
    [getids.pending]: (state) => {
      state.loading = true;
    },
    [getids.fulfilled]: (state, action) => {
      state.identities = action?.payload?.identities;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function

export default indexSlice.reducer;
