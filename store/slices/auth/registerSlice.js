import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    apiErrors: [],

}


export const registerThunk = createAsyncThunk('auth/register',
    async (payload, { rejectWithValue }) => {

        try {
            const data = await axios.post('/register', payload)
            return data


        } catch (error) {
            return rejectWithValue(error.response.data)
        }


    })


export const registerSlice = createSlice({
    name: 'auth/register',
    initialState,
    reducers: {


    },
    extraReducers: {


        [registerThunk.pending]: (state) => {
            state.loading = true
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.data = action?.payload?.data
            state.loading = false
        },
        [registerThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loading = false
        }
    }
})

// Action creators are generated for each case reducer function
// export const { setFirstLoad } = registerSlice.actions

export default registerSlice.reducer

