import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_DIFFUSION_RESSOURCE_MATERIELLE } from "../../constants/DataConstants";
import { DiffusionRhItemI } from '../../models/diffusionRhItem';
import { DiffusionRessourcesMateriellesI } from '../../models/diffusionRessourcesMaterielles';


export interface InitialStateDiffusionRmI {
    liste_diffusion_rm: DiffusionRessourcesMateriellesI[];
    loading: boolean;
    error?: string;
}

const initialState: InitialStateDiffusionRmI = {
    liste_diffusion_rm: [] as DiffusionRessourcesMateriellesI[],
    loading: false,
    error: ""
};

export const deconcentrationListDiffusionRmSlice = createSlice({
    name: 'deconcentrationListDiffusionRmReducer',
    initialState,
    reducers: {
        getListeDiffusionRmAction: state => {
            state.liste_diffusion_rm = LIST_DIFFUSION_RESSOURCE_MATERIELLE;
        },
    },
    extraReducers: builder => {

    }
})

export default deconcentrationListDiffusionRmSlice.reducer;
export const { getListeDiffusionRmAction } = deconcentrationListDiffusionRmSlice.actions;