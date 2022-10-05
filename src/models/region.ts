export interface Region {
  id: string;
  d?: string;
  name: string;
  nameAr?: string;
  axm_name?: string;
  axm_code?: string;
}



export interface RegionI {
  id: string;
  d?: string;
  axm_name?: string;
  axm_namear?: string;
  axm_code?: string;
}

export interface RegionResultI {
  success: boolean;
  message: string;
  data: RegionI[];
}


