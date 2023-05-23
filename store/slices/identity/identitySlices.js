import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: true,
    loadingAddIdentity: false,
    identities: [],
    allCarsByIdentity: [],
    allCarsByIdentityLoading: false,
    apiErrors: [],
    updateIdentity_apiErrors: []
}


export const getIdentity = createAsyncThunk('identity/getIdentity',
    async () => {
        const data = await axios.get('/identity')
        return data.data
    }
)

// get allCarsByIdentity
export const getAllCarsByIdentity = createAsyncThunk('identity/getAllCarsByIdentity',
    async (payload) => {
        const data = await axios.get(`/car/identity/${payload}`)
        return data.data
    }
)
// 
export const addIdentityThunk = createAsyncThunk('identity/addIdentityThunk',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await axios.post('/identity', payload)
            return data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })
//
export const updateIdentityThunk = createAsyncThunk('identity/updateIdentityThunk',
    async (payload, { rejectWithValue }) => {
        // var urlId = thunkAPI.getState().addDocuments.formData.identity_id
        try {
            const data = await axios.put('/identity/' + payload.identity_id, payload)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const identitySlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {


    },
    extraReducers: {

        [getIdentity.pending]: (state) => {
            state.loading = true
        },
        [getIdentity.fulfilled]: (state, action) => {
            state.identities = action?.payload?.identities
            state.loading = false
        },
        // -- getAllCarsByIdentity
        [getAllCarsByIdentity.pending]: (state) => {
            state.allCarsByIdentityLoading = true
        },
        [getAllCarsByIdentity.fulfilled]: (state, action) => {
            state.allCarsByIdentity = action?.payload?.cars
            state.allCarsByIdentityLoading = false
        },

        // addIdentityThunk
        [addIdentityThunk.pending]: (state) => {
            state.apiErrors = []
            state.loadingAddIdentity = true
        },
        [addIdentityThunk.fulfilled]: (state, action) => {
            state.data = action?.payload?.data
            state.loadingAddIdentity = false
        },

        [addIdentityThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loadingAddIdentity = false
        },

        // updateIdentityThunk
        [updateIdentityThunk.pending]: (state) => {
            state.updateIdentity_apiErrors = []
            state.loadingAddIdentity = true
        },
        [updateIdentityThunk.fulfilled]: (state, action) => {
            state.data = action?.payload?.data
            state.loadingAddIdentity = false
        },

        [updateIdentityThunk.rejected]: (state, action) => {
            console.log('action : ', action)
            state.updateIdentity_apiErrors = action.payload
            state.loadingAddIdentity = false
        }
    }
})

// Action creators are generated for each case reducer function
// export const { setGraphs } = identitySlice.actions

export default identitySlice.reducer

