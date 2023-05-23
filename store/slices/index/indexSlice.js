import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: true,
    dataHome: [],
 }


export const gethome = createAsyncThunk('index/gethome',
    async () => {
        const data = await axios.get('/home')
        return data.data
    }
)


export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
 

    },
    extraReducers: {

        [gethome.pending]: (state) => {
            state.loading = true
        },
        [gethome.fulfilled]: (state, action) => {
            state.dataHome = action?.payload
            state.loading = false
        },
    }
})

// Action creators are generated for each case reducer function
// export const {  } = indexSlice.actions

export default indexSlice.reducer

