import { ItemEcheancierFinancierI } from "./engagementFinancier";

export interface AutreEngagementConvRegionaleSpecifiqueI {
    id: number;
    nameProjet: string;
    listEcheancier: ItemEcheancierFinancierI[]
}