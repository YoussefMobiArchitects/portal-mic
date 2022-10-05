

import { ListConventionResultI } from "../models/interface/conventionI";
import axios from "./http-common";
import APIEndpoint from "./APIEndpoint";
import { getListeConventionByStatusAction } from "../redux/reducers/listeConventionReducer";
import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";


export const GetListConvByStatusService = async () => {
    const url = `${APIEndpoint.list().list_convention_by_status_url}`;
    const response = await axios.get<ListConventionResultI>(url);
    return response.data;
};


export const getListConvByStatus = () => async (dispatch: Dispatch<Action>) => {
    return await GetListConvByStatusService()
        .then((response) => {
            var result = response;
            if (result.success) {
                console.log("result.data", result.data)
                dispatch(getListeConventionByStatusAction(result.data))
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
