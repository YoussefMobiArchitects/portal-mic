import { ItemEcheancierFinancierI } from "./engagementFinancier";

export interface EngagementFinancierConvRegionaleSpecifiqueI {
    id: number;
    nameProjet: string;
    listEcheancier: ItemEcheancierFinancierI[]
}