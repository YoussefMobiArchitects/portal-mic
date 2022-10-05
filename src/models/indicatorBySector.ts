
export interface IndicatorI {
    id: number;
    idSecteur: number;
    indicateur: string;
}


export interface IndicatorBySectorI {
    id: number;
    idSecteur: number;
    nameSecteur: string;
    list: IndicatorI[];
}