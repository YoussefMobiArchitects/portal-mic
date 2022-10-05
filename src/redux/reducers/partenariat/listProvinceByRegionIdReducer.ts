import { ProvinceI, ProvinceResultI } from '../../../models/province';
import { RootState } from '../../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


interface InitialStateI {
    data: ProvinceI[];
    loading: boolean;
    message: string;
    success: boolean;
}

const initialState: InitialStateI = {
    data: [] as ProvinceI[],
    loading: false,
    message: "",
    success: false
};

export const listProvinceByRegionIdSlice = createSlice({
    name: 'listProvinceByRegionIdReducer',
    initialState,
    reducers: {
        resetError: state => {
            state.message = "";
        },
        getListProvinceByRegionIdAction: (state, action) => {
            console.log("getListProvinceByRegionIdAction");
            state.data = action.payload;
        }
    },
    extraReducers: builder => {

    }

})

export default listProvinceByRegionIdSlice.reducer;
export const {
    resetError,
    getListProvinceByRegionIdAction,
} = listProvinceByRegionIdSlice.actions;
