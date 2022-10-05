import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_PROJET_FILTRED } from "../../constants/DataConstants";
import { ItemProjetConsulterConvI } from '../../models/itemProjetConsulterConv';
import { ItemListProjetIFiltredI } from '../../models/itemListProjetFiltred';


interface InitialStateI {
    liste_projet: ItemListProjetIFiltredI[];
    loading: boolean;
    error?: string;
}

const initialState: InitialStateI = {
    liste_projet: [] as ItemListProjetIFiltredI[],
    loading: false,
    error: ""
};


export const listeProjetFiltredSlice = createSlice({
    name: 'listeProjetFiltredReducer',
    initialState,
    reducers: {
        getListeProjFiltredAction: state => {
            state.liste_projet = LIST_PROJET_FILTRED;
        },
        resetErrorAction: state => {
            state.error = undefined;
        },
    },
    extraReducers: builder => {

    }

})

export default listeProjetFiltredSlice.reducer;
export const { getListeProjFiltredAction, resetErrorAction } = listeProjetFiltredSlice.actions;