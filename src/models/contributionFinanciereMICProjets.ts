
export interface ContributionI {
    id: number;
    annee: string;
    valPrevu: number;
    valDebloque: number
}

export interface ProjetI {
    id: number;
    nameProjet: string;
    listContribution: ContributionI[];
    totalPrevu: number;
    totalDebloque: number
}

export interface ContributionFinanciereMICProjetsI {
    id: number;
    idAxe: number;
    nameAxe: string;
    listProjet: ProjetI[];
}