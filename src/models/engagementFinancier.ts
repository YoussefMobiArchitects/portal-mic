export interface ItemEcheancierFinancierI {
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
    nameAxe: string;
    nameProject: string;
    cout: number;
    listEcheancier: ItemEcheancierFinancierI[]
}