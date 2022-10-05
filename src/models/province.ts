export interface ProvinceI {
    id: string;
    name?: string;
    quoteid?: string;
    axm_name?: string;
    axm_code?: string;
}

export interface ProvinceResultI {
    success: boolean;
    message: string;
    data: ProvinceI[];
}