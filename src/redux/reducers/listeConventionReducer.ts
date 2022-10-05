import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Convention } from '../../models/convention';
import { ConventionI } from '../../models/interface/conventionI';

import { LIST_CONVENTION } from "../../constants/DataConstants";


export interface ProductInitialState {
    liste_convention: Convention[];
    liste_convention1: Convention[];
    liste_convention2: Convention[];
    liste_convention3: Convention[];
    liste_convention4: Convention[];
    liste_convention5: Convention[];
    loading: boolean;
    error?: string;

    liste_convention_by_status: ConventionI[];
    liste_convention_by_status1: ConventionI[];
    liste_convention_by_status2: ConventionI[];
    liste_convention_by_status3: ConventionI[];
    liste_convention_by_status4: ConventionI[];
    liste_convention_by_status5: ConventionI[];

}

const initialState: ProductInitialState = {
    liste_convention: [],
    liste_convention1: [],
    liste_convention2: [],
    liste_convention3: [],
    liste_convention4: [],
    liste_convention5: [],

    loading: false,
    error: "",
    liste_convention_by_status: [],
    liste_convention_by_status1: [],
    liste_convention_by_status2: [],
    liste_convention_by_status3: [],
    liste_convention_by_status4: [],
    liste_convention_by_status5: [],
};



export const listConventionSlice = createSlice({
    name: 'listConventionReducer',
    initialState,
    reducers: {
        getListeConventionAction: state => {
            state.liste_convention = LIST_CONVENTION;
            state.liste_convention1 = LIST_CONVENTION.filter(conv => conv.idStatusConvention === 1);
            state.liste_convention2 = LIST_CONVENTION.filter(conv => conv.idStatusConvention === 2);
            state.liste_convention3 = LIST_CONVENTION.filter(conv => conv.idStatusConvention === 3);
            state.liste_convention4 = LIST_CONVENTION.filter(conv => conv.idStatusConvention === 4);
            state.liste_convention5 = LIST_CONVENTION.filter(conv => conv.idStatusConvention === 5);
        },
        getListeConventionByStatusAction: (state, action) => {
            state.liste_convention_by_status = action.payload;
        },
        resetErrorAction: state => {
            state.error = undefined;
        },
    },
    extraReducers: builder => {

    }

})

export default listConventionSlice.reducer;
export const {
    getListeConventionAction,
    resetErrorAction,
    getListeConventionByStatusAction,
} = listConventionSlice.actions;