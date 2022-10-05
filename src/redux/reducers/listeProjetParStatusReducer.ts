import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_PROJET_PAR_STATUS } from "../../constants/DataConstants";
import { ItemProjetI } from '../../models/itemListProjetFiltred';


interface InitialStateI {
    liste_projet: ItemProjetI[];
    loading: boolean;
    error?: string;
}

const initialState: InitialStateI = {
    liste_projet: [] as ItemProjetI[],
    loading: false,
    error: ""
};


export const listeProjetParStatusSlice = createSlice({
    name: 'listeProjetParStatusReducer',
    initialState,
    reducers: {
        getListeProjetParStatusAction: state => {
            state.liste_projet = LIST_PROJET_PAR_STATUS;
        },
        resetErrorAction: state => {
            state.error = undefined;
        },
    },
    extraReducers: builder => {

    }

})

export default listeProjetParStatusSlice.reducer;
export const { getListeProjetParStatusAction, resetErrorAction } = listeProjetParStatusSlice.actions;