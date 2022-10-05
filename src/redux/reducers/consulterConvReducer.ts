import { createSlice } from '@reduxjs/toolkit';
import {
    LIST_MODE_GOUVERNANCE_CONSULTER_CONV,
    LIST_ETAT_AVANCEMENT_PROJET_CONSULTER_CONV,
    LIST_REMARQUE_CONSULTER_CONV,
    LIST_HISTORIQUE_REMARQUE_CONSULTER_CONV,
    LIST_CONVENTION_EN_LIEN_AVEC_CONVENTION_CADRE,
    LIST_PROJET_IMPLIQUANT_MINISTERE,
    CONTRIBUTION_FINANCIERE_MIC_PROJETS,
} from '../../constants/DataConstants';
import { AxeI } from '../../models/axe';
import { DomiciliationContributionI } from '../../models/domiciliationContribution';
import { EtatAvancementProjetI } from '../../models/etatAvancementProjet';
import { RemarqueConsulterConvI } from '../../models/remarqueConsulterConv';
import { ModeGouvernanceItemConsulterConvI } from '../../models/modeGouvernanceItemConsulterConv';
import { HistoriqueRemarqueI } from '../../models/historiqueRemarque';
import { Convention } from '../../models/convention';
import { ItemProjetConsulterConvI } from '../../models/itemProjetConsulterConv';
import { ContributionFinanciereMICProjetsI } from '../../models/contributionFinanciereMICProjets';

export interface InfoGeneraleRenseignerConvI {
    titleConv?: string;
    idTypePartenariat?: number;
    nameTypePartenariat?: string;
    idRegion: number;
    nameRegion: string;
    idTypeConvention: number;
    nameTypeConvention: string;
    idCtxConvCadre: number;
    nameCtxConvCadre: string;
    idDimensionRoya: number;
    nameDimensionRoya: string;
    anneeSignature: string;
    dateSignature: string;
    anneeFinPrev: string;
    dateFinEffective: string;
    idSecteur: number;
    nameSecteur: string;
}

export interface ConsulterConvInitialState {
    infoGeneraleRenseignerConv: InfoGeneraleRenseignerConvI;
    axes: AxeI[];
    listDomiciliationContribution: DomiciliationContributionI[];
    listModeGouvernanace: ModeGouvernanceItemConsulterConvI[];
    list_etat_avancement_projet: EtatAvancementProjetI[];
    list_remarque: RemarqueConsulterConvI[];
    list_historique_remarque: HistoriqueRemarqueI[];
    list_convention_en_lien_avec_convention_cadre: Convention[];
    list_projet_impliquant_ministere: ItemProjetConsulterConvI[];
    contribution_financiere_mic_projets: ContributionFinanciereMICProjetsI[]
}


const initialState: ConsulterConvInitialState = {
    infoGeneraleRenseignerConv: <InfoGeneraleRenseignerConvI>{},
    axes: [
        {
            id: "1",
            nameAxe: "axe1",
            cout: "20",
            nbrDomaine: "3",
            nbrProgProj: "2"
        },
        {
            id: "2",
            nameAxe: "axe2",
            cout: "30",
            nbrDomaine: "3",
            nbrProgProj: "2"
        }
    ],
    listDomiciliationContribution:
        [
            {
                id: "1",
                articleConvention: 4,
                organismeBeneficiaire: "Conseil de la région",
                rib: "123456789123",
                autreInfo: "Information1",
            },
            {
                id: "2",
                articleConvention: 3,
                organismeBeneficiaire: "Conseil de la région",
                rib: "123456789123",
                autreInfo: "Information2"
            }
        ],
    listModeGouvernanace: LIST_MODE_GOUVERNANCE_CONSULTER_CONV,
    list_etat_avancement_projet: LIST_ETAT_AVANCEMENT_PROJET_CONSULTER_CONV,
    list_remarque: LIST_REMARQUE_CONSULTER_CONV,
    list_historique_remarque: LIST_HISTORIQUE_REMARQUE_CONSULTER_CONV,
    list_convention_en_lien_avec_convention_cadre: LIST_CONVENTION_EN_LIEN_AVEC_CONVENTION_CADRE,
    list_projet_impliquant_ministere: LIST_PROJET_IMPLIQUANT_MINISTERE,
    contribution_financiere_mic_projets: CONTRIBUTION_FINANCIERE_MIC_PROJETS,
};

export const consulterConvSlice = createSlice({
    name: 'consulterConvReducer',
    initialState,
    reducers: {
    },
    extraReducers: {
        // add your async reducers here
    }
})
// Action creators
export const {

} = consulterConvSlice.actions;
export default consulterConvSlice.reducer;