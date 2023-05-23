import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  idloading: false,
  identity: {},
};
export const editId = createAsyncThunk(
  "identity/editId",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put("/identity/" + payload.id, payload.data);
      return data.data;
    } catch {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const editCarSlice = createSlice({
  name: "identity",
  initialState,
  reducers: {},
  extraReducers: {
    [editId.pending]: (state) => {
      state.idloading = true;
    },
    [editId.fulfilled]: (state, action) => {
      state.identity = action?.payload?.car;
      state.idloading = false;
    },
    [editId.rejected]: (state, action) => {
      state.idloading = false;
      state.error = action.payload?.error;
    },
  },
});

// Action creators are generated for each case reducer function

export default editCarSlice.reducer;
