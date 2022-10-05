export interface ItemEcheancierFinancierI {
    echeancier: string;
    contribution: number,
}

export interface ContributionPartenaireI {
    id: number;
    idProjet: number;
    nameProjet: string;
    namePartenaire: string;
    listEcheancier: ItemEcheancierFinancierI[]
}