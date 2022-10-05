import { Product, ProductResult } from '../../models/product';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIST_PROJET_PAR_STATUS } from "../../constants/DataConstants";
import { DetailProjetI } from '../../models/detailProjet';
import { HistoriqueEngagementI } from '../../models/historiqueEngagement';


interface InitialStateI {
    detail_projet: DetailProjetI;
    list_historique_engagement: HistoriqueEngagementI[];
    loading: boolean;
    error?: string;
}

const initialState: InitialStateI = {
    detail_projet: {} as DetailProjetI,
    list_historique_engagement: [
        {
            id: 1,
            action: "Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra",
            date: "16/09/2022"
        },
        {
            id: 2,
            action: "Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra",
            date: "17/09/2022"
        }
    ],
    loading: false,
    error: ""
};


export const detailProjetSlice = createSlice({
    name: 'detailProjetReducer',
    initialState,
    reducers: {
        getdetailProjetAction: state => {
            state.detail_projet = {
                id: 1,
                nameProjet: "Aménagement de la ZI à la ville de Béni Mellal",
                dateLastMaj: "18/03/2022 14:30",
                majBy: "Service déconcentré Rabat",
                status: "Etude en cours 20%",
                bgColorStatus: "#FFAD00",
                txtColorStatus: "#FFFFFF",
                ListeConventionsConcernees: [
                    {
                        id: 1,
                        nameConv: "Convention Cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra"
                    },
                    {
                        id: 2,
                        nameConv: "Convention Cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra"
                    },
                    {
                        id: 2,
                        nameConv: "Convention Cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région de beni mellal-khenifra"
                    },
                ],
                region: "Casablanca-settat",
                province: "Casablanca",
                dateSignatureConv: "2022",
                secteur: "infrastructure",
                typeProjet: "Extension",
                listContributionsFinancieresPartenaires: [
                    {
                        id: 1,
                        namePartenaire: "Ministère",
                        firstYear: "2022",
                        contributionFirstYear: 2,
                        secondYear: "2023",
                        contributionSecondYear: 2,
                        ThirdYear: "2024",
                        contributionThirdYear: 3
                    },
                    {
                        id: 1,
                        namePartenaire: "Partenaire1",
                        firstYear: "2022",
                        contributionFirstYear: 2,
                        secondYear: "2023",
                        contributionSecondYear: 2,
                        ThirdYear: "2024",
                        contributionThirdYear: 3
                    }
                ],
                sourceFinancement: "Fond de Développement Industriel (FDI)",
                listEngagementFinanciere: [
                    {
                        id: 1,
                        annee: "2022",
                        valFinancementPrevu: 2,
                        statusDeblocage: "Retard de déblocage",
                        bgColorStatusDeblocage: "#FFDBDB",
                        txtColorStatusDeblocage: "#C92828",
                        valDebloque: 0,
                        dateEffet: null,
                        commentaire: "Non encore débloqué. La convention a été signée sur la base d’un montant d’investissement de 14 MDH, or les études de positionnement techniques et financières ont fait sortir un montant d’investissement de 30 MDH comme coûts de réalisation de la totalité du projet."
                    },
                    {
                        id: 2,
                        annee: "2023",
                        valFinancementPrevu: 2,
                        statusDeblocage: "Contribution débloquée",
                        bgColorStatusDeblocage: "#DBFFE5",
                        txtColorStatusDeblocage: "#28C953",
                        valDebloque: 1,
                        dateEffet: "26/03/2023",
                        commentaire: null
                    },
                ],
                listAutresEngagements: [
                    {
                        id: 1,
                        lblEngagement: "Engagement 1",
                        actionsRealisee: "Actions réalisées 1",
                        date: "22/09/2022"
                    },
                    {
                        id: 2,
                        lblEngagement: "Engagement 2",
                        actionsRealisee: "Actions réalisées 2",
                        date: "22/09/2022"
                    }
                ],
                nbrLots: 5,
                nbrLotsCommercialises: 3,
                tauxCommercialisationLots: "3%",
                nbrLotsValorises: 8,
                tauxValorisationLots: "8%",
                prixSortieConventionne: 6,
                prixMax: 10,
                prixMin: 6,
                valSuperficieBrute: 4,
                valSuperficieCessible: 4,
                valSuperficieCessibleValorisee: 4,
                amenageur: "Extension",
                gestionnaire: 5,
                listComite: [
                    {
                        id: 1,
                        typeComite: "Comité central",
                        date: "16/09/2022",
                        urlFilePv: ""
                    },
                    {
                        id: 2,
                        typeComite: "Comité local",
                        date: "18/09/2022",
                        urlFilePv: ""
                    },
                ],
                listAutreVisite: [
                    {
                        id: 1,
                        intitule: "Zone industrielle",
                        date: "16/09/2022",
                        descriptif: "Cette information sera prise de la fiche projet. "
                    },
                    {
                        id: 2,
                        intitule: "Comité central",
                        date: "16/09/2022",
                        descriptif: "Cette information sera prise de la fiche projet. "
                    }
                ],
                listAutresObservations: [
                    {
                        id: 1,
                        observation: "Observation 1",
                        date: "16/09/2022",
                    },
                    {
                        id: 2,
                        observation: "Observation 2",
                        date: "16/09/2022",
                    }
                ]
            };
        },
        resetErrorAction: state => {
            state.error = undefined;
        },
    },
    extraReducers: builder => {

    }

})

export default detailProjetSlice.reducer;
export const { getdetailProjetAction, resetErrorAction } = detailProjetSlice.actions;