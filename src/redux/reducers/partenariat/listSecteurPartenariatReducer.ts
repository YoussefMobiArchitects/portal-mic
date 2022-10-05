import { SecteurPartenariatI, SecteurPartenariatResultI } from '../../../models/secteurPartenariat';
import { RootState } from '../../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
// import { GetListRegionService } from "../../servicesApi/apiRegion";


interface InitialStateI {
    data: SecteurPartenariatI[];
    loading: boolean;
    message: string;
    success: boolean;
}

const initialState: InitialStateI = {
    data: [] as SecteurPartenariatI[],
    loading: false,
    message: "",
    success: false
};

export const listSecteurPartenariatSlice = createSlice({
    name: 'listSecteurPartenariatReducer',
    initialState,
    reducers: {
        resetError: state => {
            state.message = "";
        },
        getListSecteurPartenariatAction: (state, action) => {
            console.log("getListSecteurPartenariatAction");
            console.log(action.payload);

            state.data = action.payload;
        }
    },
    extraReducers: builder => {

    }

})

export default listSecteurPartenariatSlice.reducer;
export const {
    resetError,
    getListSecteurPartenariatAction,
} = listSecteurPartenariatSlice.actions;
