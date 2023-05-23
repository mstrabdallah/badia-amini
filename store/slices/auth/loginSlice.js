import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    apiErrors:[],
}

export const loginThunk = createAsyncThunk('auth/login',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await axios.post('/login', payload)
            return data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })


export const loginSlice = createSlice({
    name: 'auth/login',
    initialState,
    reducers: {

    },
    extraReducers: {

        [loginThunk.pending]: (state) => {
            state.loading = true
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.data = action?.payload?.data
            state.loading = false
        },

        [loginThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loading = false
        }
    }
})

// export const { setFirstLoad } = loginSlice.actions

export default loginSlice.reducer

