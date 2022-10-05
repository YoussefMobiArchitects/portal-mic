import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_DIFFUSION_RH } from "../../constants/DataConstants";
import { DiffusionRhItemI } from '../../models/diffusionRhItem';


export interface InitialStateDiffusionRhI {
    liste_diffusion_rh: DiffusionRhItemI[];
    loading: boolean;
    error?: string;
}

const initialState: InitialStateDiffusionRhI = {
    liste_diffusion_rh: [] as DiffusionRhItemI[],
    loading: false,
    error: ""
};



export const deconcentrationListDiffusionRhSlice = createSlice({
    name: 'deconcentrationListDiffusionRhReducer',
    initialState,
    reducers: {
        getListeDiffusionRhAction: state => {
            state.liste_diffusion_rh = LIST_DIFFUSION_RH;
        },
        addDiffusionRhTempAction: (state, action) => {
           
        },
    },
    extraReducers: builder => {

    }

})

export default deconcentrationListDiffusionRhSlice.reducer;
export const { getListeDiffusionRhAction, addDiffusionRhTempAction } = deconcentrationListDiffusionRhSlice.actions;