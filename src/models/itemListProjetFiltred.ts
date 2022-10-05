export interface ItemProjetI {
    id: number;
    idStatus: number;
    status: string;
    txtColorStatus: string;
    bgColorStatus: string;
    titleProjet: string;
    coutGlobal: number;
    contribution: number;
    situationDeblocage: number;
    dateDerniereSituation: string;
}

export interface ItemListProjetIFiltredI {
    id: number;
    idStatus: number;
    nameStatus: string;
    bgColorStatus: string;
    txtColorStatus: string;
    listProjet: ItemProjetI[];
}