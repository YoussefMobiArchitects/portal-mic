

import { RegionResultI } from "../models/region";
import axios from "./http-common";
import APIEndpoint from "./APIEndpoint";
import { getListRegionAction } from "../redux/reducers/listRegionReducer";
import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";


export const GetListRegionService = async () => {
    const url = `${APIEndpoint.list().list_region_url}`;
    const response = await axios.get<RegionResultI>(url);
    return response.data;
};


export const getListRegion = () => async (dispatch: Dispatch<Action>) => {
    return await GetListRegionService()
        .then((response) => {
            var result = response;
            if (result.success) {
                dispatch(getListRegionAction(result.data))
                return result;
            } else {
                let message = "Un problème survenu";
                throw ({ error: message });
            }
        }).catch((e) => {
            console.log(e)
            let message = e.response?.data?.error;
            throw ({ error: message });
        });
};
