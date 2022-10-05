import { createSlice } from '@reduxjs/toolkit';
import { groupBy } from "../../utils/groupBy";

import { AxeI } from '../../models/axe';
import { DomiciliationContributionI } from '../../models/domiciliationContribution';
import { ComiteItemI } from '../../models/comiteItem';
import { LIST_MODE_GOUVERNANCE } from "../../constants/DataConstants";

export interface InfoGeneraleRenseignerConvRegionaleCadreI {

    titleConv: string;
    idRegion: number,
    nameRegion: string,
    idTypeConvention: number,
    nameTypeConvention: string,
    idCtxConvCadre: number,
    nameCtxConvCadre: string,
    isDimensionRoya: boolean,
    anneeSignature: string,
    dateSignature: string,
    anneeFinPrev: string,
    dateFinEffective: string,
    idSecteur: number,
    nameSecteur: string,
}

export interface ObjetbjectifsConvI {
    objet: string;
    listObjectif: string[];
}
export interface TotalAxesI {
    nbrAxes: number;
    totalCout: number;
    totalNbrDomaine: number;
    totalNbrProgProj: number;
}

export interface EcheancierI {
    echeancier: number
}
export interface ItemEcheancierI {
    echeancier: string;
    contribution: number,
}
export interface EngagementFinancierI {
    id: string;
    idTypeEngagement: string;
    nameTypeEngagement: string;
    idDipositifFinancier: string;
    nameDipositifFinancier: string;
    idModeDeblocage: string;
    nameModeDeblocage: string;
    // idAxe: string;
    nameAxe: string;
    nameProject: string;
    cout: number;
    listEcheancier: ItemEcheancierI[]
}
export interface EngagementFinancierGroupedByI {
    nameAxe: string;
    listEngagementFinancier: EngagementFinancierI[];
    isShowBtnEdit?: boolean;
}
export interface RenseignerConvInitialState {
    numCurrentStep: number;
    isEditRenseignerConv: boolean;
    infoGeneraleRenseignerConvRegionaleCadre: InfoGeneraleRenseignerConvRegionaleCadreI;
    objetObjectifs: ObjetbjectifsConvI;
    axes: AxeI[];
    totalAxes: TotalAxesI;
    listEngagementFinancier: EngagementFinancierI[];
    listEngagementFinancierGroupedByType: EngagementFinancierGroupedByI[];
    listDomiciliationContribution: DomiciliationContributionI[];
    listComites: ComiteItemI[];
    remarques: string[];


}

const initialState: RenseignerConvInitialState = {
    numCurrentStep: 0,
    isEditRenseignerConv: false,
    infoGeneraleRenseignerConvRegionaleCadre: <InfoGeneraleRenseignerConvRegionaleCadreI>{
        titleConv: "Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra",
        idRegion: 1,
        nameRegion: "Casablanca-Settat",
        idTypeConvention: 1,
        nameTypeConvention: "Convention Cadre",
        idCtxConvCadre: 1,
        nameCtxConvCadre: "NMDPS",
        isDimensionRoya: true,
        anneeSignature: "2020",
        dateSignature: "18/09/2020",
        anneeFinPrev: "2026",
        dateFinEffective: "-",
        idSecteur: 1,
        nameSecteur: "Industrie",
    },
    objetObjectifs: { objet: "", listObjectif: [] },
    axes: [] as AxeI[],
    totalAxes: { nbrAxes: 0, totalCout: 0, totalNbrDomaine: 0, totalNbrProgProj: 0 },
    listEngagementFinancier: [] as EngagementFinancierI[],
    listEngagementFinancierGroupedByType: [],
    listDomiciliationContribution: [] as DomiciliationContributionI[],
    listComites: [] as ComiteItemI[],
    remarques: [] as string[],
};


export const renseignerConvRegionaleCadreSlice = createSlice({
    name: 'renseignerConvRegionaleCadreReducer',
    initialState,
    reducers: {
        setNumStepAction: (state, action) => {
            console.log(action.payload);
            state.numCurrentStep = action.payload
        },
        isEditRenseignerConvAction: (state, action) => {
            state.isEditRenseignerConv = action.payload
        },
        editAnneeFinPrevAction: (state, action) => {
            console.log(action.payload);
            state.infoGeneraleRenseignerConvRegionaleCadre.anneeFinPrev = action.payload;
        },
        editInfoGeneraleAction: (state, action) => {
            console.log(action.payload);
            state.infoGeneraleRenseignerConvRegionaleCadre = action.payload;
        },
        addObjectifAction: (state, action) => {
            // state.objectifs = [...state.objectifs, action.payload]
        },
        deleteObjectifAction: (state, action) => {
            // state.objectifs = state.objectifs.filter(res => res !== action.payload)
        },
        editObjetObjectifsAction: (state, action) => {
            state.objetObjectifs = action.payload;
        },
        addListAxesAction: (state, action) => {
            state.axes = action.payload
        },
        totalAxesAction: (state) => {
            let totalAxesResult: TotalAxesI = { nbrAxes: 0, totalCout: 0, totalNbrDomaine: 0, totalNbrProgProj: 0 }

            totalAxesResult.nbrAxes = state.axes.length;
            totalAxesResult.totalCout = state.axes.reduce((accumulator, obj) => {
                return accumulator + parseInt(obj.cout);
            }, 0);
            totalAxesResult.totalNbrDomaine = state.axes.reduce((accumulator, obj) => {
                return accumulator + parseInt(obj.nbrDomaine);
            }, 0);
            totalAxesResult.totalNbrProgProj = state.axes.reduce((accumulator, obj) => {
                return accumulator + parseInt(obj.nbrProgProj);
            }, 0);

            console.log("tottal : ", totalAxesResult);
            state.totalAxes = totalAxesResult;
        },
        getListEngagementAction: (state) => {
            state.listEngagementFinancier = state.listEngagementFinancier;
        },
        editListEngagementFinancierAction: (state, action) => {
            console.log("editListEngagementFinancierAction", action.payload)
            state.listEngagementFinancier = action.payload;
        },
        getListEngagementGroupedByTypeAction: (state) => {

            let tempArray: Array<EngagementFinancierI> = [];
            tempArray = state.listEngagementFinancier;

            const results = groupBy(state.listEngagementFinancier, i => i.nameAxe);
            let res2 = JSON.parse(JSON.stringify(results));
            console.log("res2 ===>: ", res2);

            // convert object to array
            const entries = Object.entries(res2);
            console.log("entries : ", entries);

            // push item to new array
            let arrs: Array<EngagementFinancierGroupedByI> = [];
            entries.forEach(res => {
                arrs.push({ nameAxe: res[0] as string, listEngagementFinancier: res[1] as EngagementFinancierI[] });
            });
            console.log("final data : ", arrs);
            state.listEngagementFinancierGroupedByType = arrs
        },
        getListDomiciliationContributionAction: (state) => {
            console.log("getListDomiciliationContributionAction");
            state.listDomiciliationContribution = [
                {
                    id: "1",
                    articleConvention: 4,
                    organismeBeneficiaire: "Conseil de la région",
                    rib: "123456789123",
                    autreInfo: "Information1"
                },
                {
                    id: "2",
                    articleConvention: 3,
                    organismeBeneficiaire: "Conseil de la région",
                    rib: "123456789123",
                    autreInfo: "Information2"
                }
            ]
        },
        editListDomiciliationContributionAction: (state, action) => {
            console.log("editListDomiciliationContributionAction");
            state.listDomiciliationContribution = action.payload
        },
        getListModeGouvernanaceAction: (state) => {
            state.listComites = LIST_MODE_GOUVERNANCE;
        },
        editListModeGouvernanaceAction: (state, action) => {
            state.listComites = action.payload;
        },
        addModeGouvernanaceAction: (state, action) => {
            state.listComites = [...state.listComites, action.payload];
        },
        deleteModeGouvernanaceAction: (state, action) => {
            state.listComites = state.listComites.filter(res => res.id !== action.payload)
        },
        editModeGouvernanaceAction: (state, action) => {
            let tempArray = state.listComites;
            let objIndex = tempArray.findIndex((obj => obj.id === action.payload.id));
            tempArray[objIndex] = action.payload;
            state.listComites = tempArray;
        },
        getListRemarqueAction: (state) => {
            state.remarques = ["Remarques 1", "Remarques 2"];
        },
        addRemarqueAction: (state, action) => {
            state.remarques = [...state.remarques, action.payload];
        },
        deleteRemarqueAction: (state, action) => {
            state.remarques = state.remarques.filter(res => res !== action.payload);
        },
        editListRemarqueAction: (state, action) => {
            state.remarques = action.payload;
        },
    },
    extraReducers: {
        // add your async reducers here
    }
})
// Action creators
export const {
    setNumStepAction,
    isEditRenseignerConvAction,
    editAnneeFinPrevAction,
    editInfoGeneraleAction,
    addObjectifAction,
    deleteObjectifAction,
    editObjetObjectifsAction,
    addListAxesAction,
    totalAxesAction,
    getListEngagementAction,
    editListEngagementFinancierAction,
    getListEngagementGroupedByTypeAction,
    getListDomiciliationContributionAction,
    editListDomiciliationContributionAction,
    addModeGouvernanaceAction,
    deleteModeGouvernanaceAction,
    editModeGouvernanaceAction,
    getListModeGouvernanaceAction,
    editListModeGouvernanaceAction,
    getListRemarqueAction,
    addRemarqueAction,
    deleteRemarqueAction,
    editListRemarqueAction
} = renseignerConvRegionaleCadreSlice.actions;
export default renseignerConvRegionaleCadreSlice.reducer;