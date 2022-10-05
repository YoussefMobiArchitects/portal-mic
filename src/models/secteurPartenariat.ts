export interface SecteurPartenariatI {
    id: string;
    axm_name: string;
    axm_codesecteur: string;
}

export interface SecteurPartenariatResultI {
    success: boolean;
    message: string;
    data: SecteurPartenariatI[];
}