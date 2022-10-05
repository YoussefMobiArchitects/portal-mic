import { combineReducers } from 'redux';

import listProductReducer from "./listProductReducer";
import authReducer from "./authReducer";
import appBarReducer from "./appBarReducer";
import listeConventionReducer from "./listeConventionReducer";
import renseignerConvRegionaleCadreReducer from "./renseignerConvRegionaleCadreReducer";
import renseignerConvRegionaleSpecifiqueReducer from "./renseignerConvRegionaleSpecifiqueReducer";

import consulterConvReducer from "./consulterConvReducer";
import listOperationReducer from "./listOperationReducer";
import deconcentrationListDiffusionRhReducer from "./deconcentrationListDiffusionRhReducer";
import deconcentrationListDiffusionRmReducer from "./deconcentrationListDiffusionRmReducer";
import listeProjetFiltredReducer from "./listeProjetFiltredReducer";
import listeProjetParStatusReducer from "./listeProjetParStatusReducer";
import detailProjetReducer from "./detailProjetReducer";
import renseignerConvRegionaleAvenantReducer from "./renseignerConvRegionaleAvenantReducer";

import listRegionReducer from "./listRegionReducer";
import listSecteurPartenariatReducer from "./partenariat/listSecteurPartenariatReducer"
import listProvinceByRegionIdReducer from "./partenariat/listProvinceByRegionIdReducer"



export default combineReducers({

    listProductReducer: listProductReducer,
    authReducer: authReducer,
    appBarReducer: appBarReducer,
    listeConventionReducer: listeConventionReducer,
    renseignerConvRegionaleCadreReducer: renseignerConvRegionaleCadreReducer,
    renseignerConvRegionaleSpecifiqueReducer: renseignerConvRegionaleSpecifiqueReducer,
    consulterConvReducer: consulterConvReducer,
    listOperationReducer: listOperationReducer,
    deconcentrationListDiffusionRhReducer: deconcentrationListDiffusionRhReducer,
    deconcentrationListDiffusionRmReducer: deconcentrationListDiffusionRmReducer,
    listeProjetFiltredReducer: listeProjetFiltredReducer,
    listeProjetParStatusReducer: listeProjetParStatusReducer,
    detailProjetReducer: detailProjetReducer,
    renseignerConvRegionaleAvenantReducer: renseignerConvRegionaleAvenantReducer,

    listRegionReducer: listRegionReducer,
    listSecteurPartenariatReducer: listSecteurPartenariatReducer,
    listProvinceByRegionIdReducer: listProvinceByRegionIdReducer,
});