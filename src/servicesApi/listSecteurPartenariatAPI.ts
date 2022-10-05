

import { SecteurPartenariatResultI } from "../models/secteurPartenariat";
import axios from "./http-common";
import APIEndpoint from "./APIEndpoint";
import { getListSecteurPartenariatAction } from "../redux/reducers/partenariat/listSecteurPartenariatReducer";
import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";


export const GetListSecteurPartenariatService = async () => {
    const url = `${APIEndpoint.list().list_secteur_partenariat_url}`;
    const response = await axios.get<SecteurPartenariatResultI>(url);
    return response.data;
    
};


export const getListSecteurPartenariat = () => async (dispatch: Dispatch<Action>) => {
    return await GetListSecteurPartenariatService()
        .then((response) => {
            var result = response;
            if (result.success) {
                dispatch(getListSecteurPartenariatAction(result.data))
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
