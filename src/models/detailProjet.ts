export interface ConventionConcerneeI {
    id: number;
    nameConv: string;
}

export interface ContributionsFinancieresPartenairesI {
    id: number;
    namePartenaire: string;
    firstYear: string;
    contributionFirstYear: number;
    secondYear: string;
    contributionSecondYear: number;
    ThirdYear: string;
    contributionThirdYear: number;
}

export interface EngagementFinanciereI {
    id: number;
    annee: string | null;
    valFinancementPrevu: number | null;
    statusDeblocage: string;
    bgColorStatusDeblocage: string;
    txtColorStatusDeblocage: string;
    valDebloque: number | null;
    dateEffet: string | null;
    commentaire: string | null;
}
export interface AutreEngagement {
    id: number;
    lblEngagement: string;
    actionsRealisee: string;
    date: string;
}

export interface ComiteI {
    id: number;
    typeComite: string;
    date: string;
    urlFilePv: string;
}

export interface AutreVisiteI {
    id: number;
    intitule: string;
    date: string;
    descriptif: string;

}

export interface AutreObservationI {
    id: number;
    observation: string;
    date: string;
}
export interface DetailProjetI {
    id: number;
    nameProjet: string;
    dateLastMaj: string;
    majBy: string;
    status: string;
    bgColorStatus: string;
    txtColorStatus: string;
    ListeConventionsConcernees: ConventionConcerneeI[];
    region: string;
    province: string;
    dateSignatureConv: string;
    secteur: string;
    typeProjet: string;
    listContributionsFinancieresPartenaires: ContributionsFinancieresPartenairesI[];
    sourceFinancement: string;
    listEngagementFinanciere: EngagementFinanciereI[];
    listAutresEngagements: AutreEngagement[];

    nbrLots: number;
    nbrLotsCommercialises: number;
    tauxCommercialisationLots: string;
    nbrLotsValorises: number;
    tauxValorisationLots: string;
    prixSortieConventionne: number;
    prixMax: number;
    prixMin: number;

    valSuperficieBrute: number;
    valSuperficieCessible: number;
    valSuperficieCessibleValorisee: number;

    amenageur: string;
    gestionnaire: number;

    listComite: ComiteI[];
    listAutreVisite: AutreVisiteI[];

    listAutresObservations: AutreObservationI[]
}