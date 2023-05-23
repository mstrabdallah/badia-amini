import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    checkUser: false,
    firstLoad: false,
    data: [],
    users: [{vvvvv:'vvvv'}],
    loading: false
}


export const getUser = createAsyncThunk('auth/getUser',
    async (_, thunkAPI) => {
        const data = await axios.get('https://reqres.in/api/users/2')
        return data.data
    }
)




export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setFirstLoad: (state, action) => {
            state.firstLoad = action.payload
        },

        setCheckUser: (state, action) => {
            state.checkUser = action.payload
            console.log('setCheckUser=',state.checkUser)
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        },


        [getUser.fulfilled]: (state, action) => {
            console.log('action=', action.payload.data.id)
            state.users = action.payload

        },
    }
})

// Action creators are generated for each case reducer function
export const { setCheckUser, setFirstLoad } = authSlice.actions

export default authSlice.reducer

