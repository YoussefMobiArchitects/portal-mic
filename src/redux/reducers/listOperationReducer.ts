import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_OPERATION } from "../../constants/DataConstants";
import { OperationI } from '../../models/operation';


export interface ProductInitialState {
    liste_operation: OperationI[];
    loading: boolean;
    error?: string;
}

const initialState: ProductInitialState = {
    liste_operation: [] as OperationI[],
    loading: false,
    error: ""
};



export const listOperationSlice = createSlice({
    name: 'listOperationReducer',
    initialState,
    reducers: {
        getListeOperationAction: state => {
            state.liste_operation = LIST_OPERATION;

        },
    },
    extraReducers: builder => {

    }

})

export default listOperationSlice.reducer;
export const { getListeOperationAction } = listOperationSlice.actions;