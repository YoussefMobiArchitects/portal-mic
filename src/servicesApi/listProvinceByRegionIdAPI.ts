

import axios from "./http-common";
import APIEndpoint from "./APIEndpoint";

import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { ProvinceResultI } from "../models/province";
import { getListProvinceByRegionIdAction } from "../redux/reducers/partenariat/listProvinceByRegionIdReducer";


export const GetListProvinceByRegionIdService = async (RegionId: string) => {
    const url = APIEndpoint.list().list_province_by_regionId_url + RegionId;
    const response = await axios.get<ProvinceResultI>(url);
    return response.data;
};

export const getListProvinceByRegionId = (RegionId: string) => async (dispatch: Dispatch<Action>) => {
    return await GetListProvinceByRegionIdService(RegionId)
        .then((response) => {
            var result = response;
            console.log("result =======>>>>>");
            console.log(result);
            if (result.success) {
                dispatch(getListProvinceByRegionIdAction(result.data))
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
