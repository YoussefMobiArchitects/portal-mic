
import { EnvNetworkConstants } from '../constants';

const WSList = {
  login_url: 'api/authentification',
  list_product_url: "http://demo1261144.mockable.io/listProduct",

  list_region_url: "api/Region/GetList",
  list_secteur_partenariat_url: "api/GetSecteurList",
  
  list_province_by_regionId_url: "api/GetProvinceByRegionId?RegionId=",

  list_convention_by_status_url : "api/GetConventionList",
};

const APIEndpoint = {
  list: () => {
    return WSList;
  },
  getBaseUrl: () => {
    return EnvNetworkConstants.BASE_URL;
  },
};

export default APIEndpoint;
