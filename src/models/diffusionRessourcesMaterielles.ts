export interface DiffusionRessourcesMateriellesItemI {
    id: number | null;
    nameRessource: string;
    situationActuelleAdministrationsCentrales: number | null;
    situationActuelleInteretsRegionaux: number | null;
    objectifsAtteindreYearOne: number | null;
    objectifsAtteindreYearTwo: number | null;
    objectifsAtteindreYearThree: number | null;
}



export interface DiffusionRessourcesMateriellesI {
    id: number | null;
    typeRessourcesMaterielles: string;
    listRessourcesMaterielles: DiffusionRessourcesMateriellesItemI[];
}

