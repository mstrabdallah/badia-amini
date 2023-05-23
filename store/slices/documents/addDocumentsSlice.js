import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    apiErrors: [],
    stepCheck: 0,
    type: "",
    identitiesCurrent: [],
    current: 0,
    formData: {

    }
}


export const addDocumentsThunk = createAsyncThunk('documents/addDocuments/addDocumentsThunk',
    async (payload, { rejectWithValue }) => {

        try {
            const data = await axios.post('/car_insurance/create', payload)
            return data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

 


export const addDocumentsSlice = createSlice({
    name: 'documents/addDocuments',
    initialState,
    reducers: {

        setAddDocuments: (state, action) => {
            state.formData = { ...state.formData, [action.payload.item]: action.payload.value }
            console.log(state.formData)

        },
        setStepCheck: (state, action) => {
            state.stepCheck = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        },
        setIdentitiesCurrent: (state, action) => {
            state.identitiesCurrent = action.payload
        },
        setCurrent: (state, action) => {
            state.current = action.payload
        }



    },
    extraReducers: {

        // addIdentityThunk
        [addDocumentsThunk.pending]: (state) => {
            state.apiErrors = []
            state.loading = true
        },
        [addDocumentsThunk.fulfilled]: (state, action) => {
            state.data = action?.payload?.data
            state.loading = false
        },

        [addDocumentsThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loading = false
        },

 
    }
})

// Action creators are generated for each case reducer function
export const { setAddDocuments, setStepCheck, setType, setIdentitiesCurrent, setCurrent } = addDocumentsSlice.actions

export default addDocumentsSlice.reducer

