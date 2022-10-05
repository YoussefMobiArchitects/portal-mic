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
import { TypeModificationConvAvenantI } from '../../models/typeModificationConvAvenant';
import { TypeEngagementFinancierConvAvenantI } from '../../models/typeEngagementFinancierConvAvenant';

export interface InfoGeneraleRenseignerConvRegionaleAvenantI {
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
    ctxConventionCadre: string;
    intituleConventionSpecifique: string;
    derniereConventionModifierParAvenant: string;
    intituleAvenant: string;
}

export interface ObjetbjectifsConvI {
    objet: string;
    listObjectif: string[];
}

export interface RenseignerConvRegionaleAvenantInitialStateI {
    numCurrentStep: number;
    isEditRenseignerConv: boolean;
    infoGeneraleRenseignerConvRegionaleAvenant: InfoGeneraleRenseignerConvRegionaleAvenantI;
    typeModificationConvAvenant: TypeModificationConvAvenantI;
    typeEngagementFinancierConvAvenant: TypeEngagementFinancierConvAvenantI;
    objetObjectifs: ObjetbjectifsConvI;
    autreAspect: string;
    listConsistance: string[];
    listDomiciliationContribution: DomiciliationContributionI[];
    listContributionPartenaire: ContributionPartenaireI[];
    listContributionPartenaireGroupedBy: ContributionPartenaireGroupedByI[];

    typeEngagement: TypeEngagementI,
    dipositifFinancement: DipositifFinancementI,
    modeDeblocage: ModeDeblocageI,

    listEngagementFinancierConvRegionaleSpecifique: EngagementFinancierConvRegionaleSpecifiqueI[];
    listAutreEngagementConvRegionaleSpecifique: AutreEngagementConvRegionaleSpecifiqueI[];
    listComites: ComiteItemI[];
    remarques: string[];
}

const initialState: RenseignerConvRegionaleAvenantInitialStateI = {
    numCurrentStep: 0,
    isEditRenseignerConv: false,
    infoGeneraleRenseignerConvRegionaleAvenant: <InfoGeneraleRenseignerConvRegionaleAvenantI>{
        titleConv: "Convention avenant pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra",
        idRegion: 1,
        nameRegion: "Casablanca-Settat",
        idTypeConvention: 1,
        nameTypeConvention: "Convention Avenant",
        idProvince: 1,
        nameProvince: "Benslimane",
        isRattacheeConvCadre: true,
        isDimensionRoya: true,
        anneeSignature: "2020",
        dateSignature: "18/09/2020",
        idSecteur: 1,
        nameSecteur: "Commerce",
        dateFinEffective: "-",
        anneeFinPrev: "2026",
        ctxConventionCadre: "NMDPS",
        intituleConventionSpecifique: "Convention cadre pour le financement….",
        derniereConventionModifierParAvenant: "Convention cadre pour le financement….",
        intituleAvenant: "Convention Avenant…",
    },
    typeModificationConvAvenant: { id: 0, name: "" } as TypeModificationConvAvenantI,
    typeEngagementFinancierConvAvenant: { id: 0, name: "" } as TypeEngagementFinancierConvAvenantI,
    objetObjectifs: { objet: "", listObjectif: [] },
    autreAspect: "",
    listConsistance: [],
    listDomiciliationContribution: [] as DomiciliationContributionI[],
    listContributionPartenaire: [] as ContributionPartenaireI[],
    listContributionPartenaireGroupedBy: [] as ContributionPartenaireGroupedByI[],

    typeEngagement: {} as TypeEngagementI,
    dipositifFinancement: {} as DipositifFinancementI,
    modeDeblocage: {} as ModeDeblocageI,
    listEngagementFinancierConvRegionaleSpecifique: [] as EngagementFinancierConvRegionaleSpecifiqueI[],
    listAutreEngagementConvRegionaleSpecifique: [] as AutreEngagementConvRegionaleSpecifiqueI[],
    listComites: [] as ComiteItemI[],
    remarques: [] as string[],
};


export const renseignerConvRegionaleAvenantSlice = createSlice({
    name: 'renseignerConvRegionaleAvenantReducer',
    initialState,
    reducers: {
        setNumStepAction: (state, action) => {
            console.log(action.payload);
            state.numCurrentStep = action.payload
        },
        isEditRenseignerConvAction: (state, action) => {
            state.isEditRenseignerConv = action.payload
        },
        setTypeModificationConvAvenantAction: (state, action) => {
            state.typeModificationConvAvenant = action.payload
        },
        setTypeEngagementFinancierConvAvenantAction: (state, action) => {
            state.typeEngagementFinancierConvAvenant = action.payload
        },
        editObjetObjectifsAction: (state, action) => {
            state.objetObjectifs = action.payload;
        },
        setAutreAspectAction: (state, action) => {
            state.autreAspect = action.payload
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
        getListComiteAction: (state) => {
            state.listComites = LIST_MODE_GOUVERNANCE;
        },
        editListComiteAction: (state, action) => {
            state.listComites = action.payload;
        },
        getListRemarqueAction: (state) => {
            state.remarques = ["Remarques 1", "Remarques 2"];
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
    setTypeModificationConvAvenantAction,
    setTypeEngagementFinancierConvAvenantAction,
    editObjetObjectifsAction,
    setAutreAspectAction,
    editListConsistanceAction,
    getListDomiciliationContributionAction,
    editListDomiciliationContributionAction,
    getListContributionPartenaireAction,
    getListContributionPartenaireGroupedByAction,
    editListContributionPartenaireAction,


    setTypeEngagementAction,
    setDipositifFinancementAction,
    setModeDeblocageAction,
    getlistEngagementFinancierConvRegionaleSpecifiqueAction,
    editListEngagementFinancierConvRegionaleSpecifiqueAction,
    getListAutreEngagementConvRegionaleSpecifiqueAction,
    editListAutreEngagementConvRegionaleSpecifiqueAction,
    getListComiteAction,
    editListComiteAction,
    getListRemarqueAction,
    editListRemarqueAction,

} = renseignerConvRegionaleAvenantSlice.actions;
export default renseignerConvRegionaleAvenantSlice.reducer;