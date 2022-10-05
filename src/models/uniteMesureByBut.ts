
export interface UniteMesureI {
    id: number;
    uniteMesure: string;
    etatYearOne: string;
    etatYearTwo: string;
    etatYearThree: string;
}

export interface UniteMesureByButI {
    id: number;
    idBut: number;
    nameBut: string;
    listUniteMesure: UniteMesureI[];
}