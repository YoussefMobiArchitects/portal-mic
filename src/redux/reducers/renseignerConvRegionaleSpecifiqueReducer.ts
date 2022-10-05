import { createSlice } from '@reduxjs/toolkit';
import { groupBy } from "../../utils/groupBy";

import { AxeI } from '../../models/axe';
import { DomiciliationContributionI } from '../../models/domiciliationContribution';
import { ComiteItemI } from '../../models/comiteItem';
import { LIST_AUTRE_ENGAGEMENT_CONV_REGIONALE_SPECIFIQUE, LIST_CONTRIBUTION_PARTENAIRE, LIST_ENGAGEMENT_FINANCIER_CONV_REGIONALE_SPECIFIQUE, LIST_MODE_GOUVERNANCE } from "../../constants/DataConstants";
import { EngagementFinancierConvRegionaleSpecifiqueI } from '../../models/engagementFinancierConvRegionaleSpecifique';
import { AutreEngagementConvRegionaleSpecifiqueI } from '../../models/autreEngagementConvRegionaleSpecifique';
import { ContributionPartenaireI } from '../../models/contributionPartenaire';
import { ContributionPartenaireGroupedByI } from '../../models/contributionPartenaireGroupedBy';
import { TypeEngagementI } from '../../models/typeEngagement';
import { DipositifFinancementI } from '../../models/dipositifFinancement';
import { ModeDeblocageI } from '../../models/modeDeblocage';

export interface InfoGeneraleRenseignerConvRegionaleSpecifiqueI {
    titleConv?: string;
    idRegion: number;
    nameRegion: string;
    idTypeConvention: number;
    nameTypeConvention: string;
    idProvince: number;
    nameProvince: string;
    isRattacheeConvCadre: boolean;
    isDimensionRoya: boolean;
    dateSignature: string;
    idSecteur: number;
    nameSecteur: string;
    anneeSignature: string;
    dateFinEffective: string | null;
    anneeFinPrev: string;

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
export interface RenseignerConvRegionaleSpecifiqueInitialStateI {
    numCurrentStep: number;
    isEditRenseignerConv: boolean;
    infoGeneraleRenseignerConvRegionaleSpecifique: InfoGeneraleRenseignerConvRegionaleSpecifiqueI;
    objetObjectifs: ObjetbjectifsConvI;
    listConsistance: string[];
    listDomiciliationContribution: DomiciliationContributionI[];
    typeEngagement: TypeEngagementI,
    dipositifFinancement: DipositifFinancementI,
    modeDeblocage: ModeDeblocageI,

    listEngagementFinancierConvRegionaleSpecifique: EngagementFinancierConvRegionaleSpecifiqueI[];
    listAutreEngagementConvRegionaleSpecifique: AutreEngagementConvRegionaleSpecifiqueI[];
    listContributionPartenaire: ContributionPartenaireI[];
    listContributionPartenaireGroupedBy: ContributionPartenaireGroupedByI[];
    // axes: AxeI[];   LIST_AUTRE_ENGAGEMENT_CONV_REGIONALE_SPECIFIQUE: AutreEngagementConvRegionaleSpecifiqueI[] 
    // totalAxes: TotalAxesI;
    // listEngagementFinancier: EngagementFinancierI[];
    // listEngagementFinancierGroupedByType: EngagementFinancierGroupedByI[];
    // listDomiciliationContribution: DomiciliationContributionI[];
    listComite: ComiteItemI[];
    remarques: string[];


}

const initialState: RenseignerConvRegionaleSpecifiqueInitialStateI = {
    numCurrentStep: 0,
    isEditRenseignerConv: false,
    infoGeneraleRenseignerConvRegionaleSpecifique: <InfoGeneraleRenseignerConvRegionaleSpecifiqueI>{
        titleConv: "Convention Spécifique pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra",
        idRegion: 1,
        nameRegion: "Casablanca-Settat",
        idTypeConvention: 1,
        nameTypeConvention: "Convention Spécifique",
        idProvince: 1,
        nameProvince: "Benslimane",
        isRattacheeConvCadre: true,
        isDimensionRoya: true,
        anneeSignature: "2020",
        dateSignature: "18/09/2020",
        idSecteur: 1,
        nameSecteur: "Commerce",
        dateFinEffective: "-",
        anneeFinPrev: "2026"
    },
    objetObjectifs: { objet: "", listObjectif: [] },
    listConsistance: [],
    listDomiciliationContribution: [] as DomiciliationContributionI[],
    typeEngagement: {} as TypeEngagementI,
    dipositifFinancement: {} as DipositifFinancementI,
    modeDeblocage: {} as ModeDeblocageI,
    listEngagementFinancierConvRegionaleSpecifique: [] as EngagementFinancierConvRegionaleSpecifiqueI[],
    listAutreEngagementConvRegionaleSpecifique: [] as AutreEngagementConvRegionaleSpecifiqueI[],
    listContributionPartenaire: [] as ContributionPartenaireI[],
    listContributionPartenaireGroupedBy: [] as ContributionPartenaireGroupedByI[],
    listComite: [] as ComiteItemI[],
    remarques: [] as string[],
};


export const renseignerConvRegionaleSpecifiqueSlice = createSlice({
    name: 'renseignerConvRegionaleSpecifiqueReducer',
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
            state.infoGeneraleRenseignerConvRegionaleSpecifique.anneeFinPrev = action.payload;
        },
        editObjetObjectifsAction: (state, action) => {
            state.objetObjectifs = action.payload;
        },
        editListConsistanceAction: (state, action) => {
            state.listConsistance = action.payload;
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
        getListComiteAction: (state) => {
            state.listComite = LIST_MODE_GOUVERNANCE;
        },
        editListComiteAction: (state, action) => {
            state.listComite = action.payload;
        },
        addComiteAction: (state, action) => {
            state.listComite = [...state.listComite, action.payload];
        },
        deleteComiteAction: (state, action) => {
            state.listComite = state.listComite.filter(res => res.id !== action.payload)
        },
        editComiteAction: (state, action) => {
            let tempArray = state.listComite;
            let objIndex = tempArray.findIndex((obj => obj.id === action.payload.id));
            tempArray[objIndex] = action.payload;
            state.listComite = tempArray;
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

        setTypeEngagementAction: (state, action) => {
            console.log("setTypeEngagementAction");
            console.log(action.payload);
            state.typeEngagement = action.payload;
        },
        setDipositifFinancementAction: (state, action) => {
            console.log("setDipositifFinancementAction");
            state.dipositifFinancement = action.payload;
        },
        setModeDeblocageAction: (state, action) => {
            console.log("setModeDeblocageAction");
            state.modeDeblocage = action.payload;
        },
        getlistEngagementFinancierConvRegionaleSpecifiqueAction: (state) => {
            state.listEngagementFinancierConvRegionaleSpecifique = LIST_ENGAGEMENT_FINANCIER_CONV_REGIONALE_SPECIFIQUE;
        },
        editListEngagementFinancierConvRegionaleSpecifiqueAction: (state, action) => {
            state.listEngagementFinancierConvRegionaleSpecifique = action.payload;
        },
        getListAutreEngagementConvRegionaleSpecifiqueAction: (state) => {
            state.listAutreEngagementConvRegionaleSpecifique = LIST_AUTRE_ENGAGEMENT_CONV_REGIONALE_SPECIFIQUE;
        },
        editListAutreEngagementConvRegionaleSpecifiqueAction: (state, action) => {
            state.listAutreEngagementConvRegionaleSpecifique = action.payload;
        },
        getListContributionPartenaireAction: (state) => {
            state.listContributionPartenaire = LIST_CONTRIBUTION_PARTENAIRE
        },
        getListContributionPartenaireGroupedByAction: (state) => {
            let tempArray: Array<ContributionPartenaireI> = [];
            tempArray = state.listContributionPartenaire;

            const results = groupBy(tempArray, i => i.nameProjet);
            let res2 = JSON.parse(JSON.stringify(results));
            console.log("res2 ===>: ", res2);

            // convert object to array
            const entries = Object.entries(res2);
            console.log("entries : ", entries);

            // push item to new array
            let arrs: Array<ContributionPartenaireGroupedByI> = [];
            entries.forEach(res => {
                arrs.push({ nameProjet: res[0] as string, listContributionPartenaire: res[1] as ContributionPartenaireI[] });
            });
            state.listContributionPartenaireGroupedBy = arrs
        },
        editListContributionPartenaireAction: (state, action) => {
            console.log("editListContributionPartenaireAction", action.payload)
            state.listContributionPartenaire = action.payload;
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
    editObjetObjectifsAction,
    editListConsistanceAction,
    getListDomiciliationContributionAction,
    editListDomiciliationContributionAction,

    getListComiteAction,
    editListComiteAction,
    addComiteAction,
    deleteComiteAction,
    editComiteAction,

    getListRemarqueAction,
    addRemarqueAction,
    deleteRemarqueAction,
    editListRemarqueAction,

    setTypeEngagementAction,
    setDipositifFinancementAction,
    setModeDeblocageAction,
    getlistEngagementFinancierConvRegionaleSpecifiqueAction,
    getListAutreEngagementConvRegionaleSpecifiqueAction,
    getListContributionPartenaireAction,
    getListContributionPartenaireGroupedByAction,
    editListContributionPartenaireAction,
    editListEngagementFinancierConvRegionaleSpecifiqueAction,
    editListAutreEngagementConvRegionaleSpecifiqueAction,

} = renseignerConvRegionaleSpecifiqueSlice.actions;
export default renseignerConvRegionaleSpecifiqueSlice.reducer;