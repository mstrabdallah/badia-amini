import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: true,
    carInsuranceCompanies: [],
    cars: [],
    car: [],
};

export const getcars = createAsyncThunk("cars/cars", async () => {
    const data = await axios.get("/car");
    return data.data;
});
export const getcar = createAsyncThunk("cars/car", async (payload) => {
    const data = await axios.get("/car/" + payload.id);
    return data.data;
});
// ----
export const updataCarsThunk = createAsyncThunk('cars/updataCars',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await axios.put('/car/' + payload.id, payload)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getCarInsuranceCompaniesThunk = createAsyncThunk('cars/getCarInsuranceCompaniesThunk',
    async (_, thunkAPI) => {
        const data = await axios.get('/car_insurance_companies?type=' + thunkAPI.getState().addDocuments.type)
        return data.data
    }
)


export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {



    },
    extraReducers: {

        [getcars.pending]: (state) => {
            state.loading = true;
        },
        [getcars.fulfilled]: (state, action) => {
            state.cars = action?.payload?.cars;
            state.loading = false;
        },
        [getcar.pending]: (state) => {
            state.loading = true;
        },
        [getcar.fulfilled]: (state, action) => {
            state.car = action.payload?.data;
            state.loading = false;
        },

        //--

        [updataCarsThunk.pending]: (state) => {
            state.loading = true
        },
        [updataCarsThunk.fulfilled]: (state, action) => {
            state.loading = false
        },

        // -- getCarInsuranceCompaniesThunk
        [getCarInsuranceCompaniesThunk.pending]: (state) => {
            state.loading = true
        },
        [getCarInsuranceCompaniesThunk.fulfilled]: (state, action) => {
            state.carInsuranceCompanies = action?.payload?.carInsuranceCompanies
            state.loading = false
        },
    }
})

// Action creators are generated for each case reducer function
// export const { setType } = carsSlice.actions

export default carsSlice.reducer

