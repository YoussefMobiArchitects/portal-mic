import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Router
} from "react-router-dom";
import './styles.scss';
import './stylesRtl.scss';

import {
    Dashboard,
    Home,
    Login,
    StrategiesNationales,
    Partenariat,
    Contractualisation,
    Deconcentration,
    Actualite,
    Aide,
    FoireQuestions,
    TableauxBord,
    ListeConvention,
    RenseignerConventionRegionaleCadre,
    ConsulterConvention,
    Axe1,
    DetailAxe1,
    Axe3,
    Axe4,
    Axe5,
    DetailAxe5,
    ListProjetByStatus,
    DetailProjet,
    RenseignerConventionRegionaleAvenant
} from "../pages";
import { NavigationConstants } from "../constants";
import { useAppDispatch, useAppSelector } from '../hooks';
import { Appbar, Footer } from '../components';
import RenseignerConventionRegionaleSpecifique from '../pages/dashboard/partenariat/renseigner-convention-regionale-specifique/RenseignerConventionRegionaleSpecifique';
import Axe2 from '../pages/dashboard/deconcentration/axe2/Axe2';




function MainApp() {

    const dispatch = useAppDispatch();
    const isLogged = useAppSelector((state) => state.authReducer.isLogged);
    console.log("isLoged", isLogged)

    useEffect(() => {


        
    }, [isLogged,])

    return (
        <BrowserRouter>

            {isLogged &&
                <div className='App-main'>
                    <Appbar />
                    <div className='styleBody'>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<Dashboard />} />
                                <Route path={NavigationConstants.STRATEGIES_NATIONALES_PAGE} element={<StrategiesNationales />} />
                                <Route path={NavigationConstants.PARTENARIAT_PAGE} element={<Partenariat />} />
                                <Route path={NavigationConstants.CONTRACTUALISATION_PAGE} element={<Contractualisation />} />
                                <Route path={NavigationConstants.DECONCENTRATION_PAGE} element={<Deconcentration />} />
                                <Route path={NavigationConstants.ACTUALITES_PAGE} element={<Actualite />} />
                                <Route path={NavigationConstants.AIDE_PAGE} element={<Aide />} />
                                <Route path={NavigationConstants.FOIRE_PAGE} element={<FoireQuestions />} />
                                <Route path={NavigationConstants.TABLEAUX_BORD_PAGE} element={<TableauxBord />} />
                                <Route path={NavigationConstants.LISTE_CONVENTION_PAGE} element={<ListeConvention />} />
                                <Route path={NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_CADRE_PAGE} element={<RenseignerConventionRegionaleCadre />} />
                                <Route path={NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_SPECIFIQUE_PAGE} element={<RenseignerConventionRegionaleSpecifique />} />
                                <Route path={NavigationConstants.CONSULTER_CONVENTION_PAGE} element={<ConsulterConvention />} />
                                <Route path={NavigationConstants.AXE1_PAGE} element={<Axe1 />} />
                                <Route path={NavigationConstants.AXE2_PAGE} element={<Axe2 />} />
                                <Route path={NavigationConstants.DETAIL_AXE1_PAGE} element={<DetailAxe1 />} />
                                <Route path={NavigationConstants.AXE3_PAGE} element={<Axe3 />} />
                                <Route path={NavigationConstants.AXE4_PAGE} element={<Axe4 />} />
                                <Route path={NavigationConstants.AXE5_PAGE} element={<Axe5 />} />
                                <Route path={NavigationConstants.DETAIL_AXE5_PAGE} element={<DetailAxe5 />} />
                                <Route path={NavigationConstants.LIST_PROJET_BY_STATUS_PAGE} element={<ListProjetByStatus />} />
                                <Route path={NavigationConstants.DETAIL_PROJET_PAGE} element={<DetailProjet />} />
                                <Route path={NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_AVENANT_PAGE} element={<RenseignerConventionRegionaleAvenant />} />

                                <Route path='/home' element={<Home />} />
                            </Route>
                        </Routes>
                    </div>
                    <Footer />
                </div>
            }
            {!isLogged &&
                <Routes >
                    <Route path='/' element={<Login />} />
                </Routes>
            }

        </BrowserRouter>
    );
}

export default MainApp;