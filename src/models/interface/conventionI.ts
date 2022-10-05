export interface ConventionI {
    axm_name: string;
    id: string;
    axm_datesignature: string;
    axm_dimensionroyale: boolean;
    statuscode: number
    statuscodename: string;
    axm_typeconvention: number;
    axm_typeconventionname: string;
    axm_couleurtypeconvention: string;
    axm_backgroudtypeconvention: string;
    axm_couleurstatutconvention: string;
    axm_backgroudstatutconvention: string;
    createdon: string;
    modifiedon: string;
}

export interface ListConventionResultI {
    success: boolean;
    message: string;
    data: ConventionI[];
}