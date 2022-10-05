
export interface PermissionI {
    id: number;
    idSecteur: number;
    permisssion: string;
}


export interface PermissionBySectorI {
    id: number;
    idSecteur: number;
    nameSecteur: string;
    list: PermissionI[];
}