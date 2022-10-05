import { Product, ProductResult} from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListProductService } from '../../servicesApi/productsAPI';
import { AxiosError } from 'axios';


export interface ProductInitialState {
    data: Product[];
    loading: boolean;
    error?: string;
}

const initialState: ProductInitialState = {
    data: [] as Product[],
    loading: false,
    error: ""
};


export const getListProduct = createAsyncThunk('getListProduct', async (thh: string = "rr", { getState }) => {
    const store_state = getState() as RootState;
    // console.log("token :", store_state.profile.user?.accessToken)
    // console.log("thh :", thh)
    const response = await getListProductService();
    return await response;
});

export const listProductroductSlice = createSlice({
    name: 'listProductReducer',
    initialState,
    reducers: {
        resetError: state => {
            state.error = undefined;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getListProduct.fulfilled, (state, action) => {
                console.log("payload fulfilled: ", action.payload);
                state.data = action.payload.data;
                state.loading = false;
                state.error = ""
            })
            .addCase(getListProduct.pending, state => {
                console.log("getListProduct.pending");
                state.loading = true;
                state.error = "";
            })
            .addCase(getListProduct.rejected, (state, action) => {
                console.log("getListProduct.rejected");
                console.log("the error", action.payload);
                state.loading = false;
                state.error = action.payload as string;
            })

    }

})

export default listProductroductSlice.reducer;
export const { resetError, } = listProductroductSlice.actions;