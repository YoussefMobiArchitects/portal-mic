enum NavigationConstants {
    LOGIN_PAGE = 'LOGIN_PAGE',
    REGISTRATION_PAGE = 'REGISTRATION_PAGE',
    HOME_PAGE = 'HOME_PAGE',
    DETAIL_PAGE = 'DETAIL_PAGE',

    ACCUEIL_PAGE = '/',
    STRATEGIES_NATIONALES_PAGE = '/strategies-nationales',
    PARTENARIAT_PAGE = '/partenariat',
    CONTRACTUALISATION_PAGE = '/contractualisation',
    DECONCENTRATION_PAGE = '/deconcentration-administrative',
    ACTUALITES_PAGE = '/actualites',
    AIDE_PAGE = '/aide',
    FOIRE_PAGE = '/foire-questions',
    TABLEAUX_BORD_PAGE = '/tableaux-bord',
    LISTE_CONVENTION_PAGE = '/liste-convention',
    RENSEIGNER_CONVENTION_REGIONALE_CADRE_PAGE = '/renseigner-convention-regionale-cadre',
    RENSEIGNER_CONVENTION_REGIONALE_SPECIFIQUE_PAGE = '/renseigner-convention-regionale-specifique',
    RENSEIGNER_CONVENTION_REGIONALE_AVENANT_PAGE = '/renseigner-convention-regionale-avenant',

    CONSULTER_CONVENTION_PAGE = '/consulter-convention',
    AXE1_PAGE = '/axe1',
    AXE2_PAGE = '/axe2',
    AXE3_PAGE = '/axe3',
    AXE4_PAGE = '/axe4',
    AXE5_PAGE = '/axe5',
    DETAIL_AXE1_PAGE = '/detail-axe1',
    DETAIL_AXE5_PAGE = '/detail-axe5',
    LIST_PROJET_BY_STATUS_PAGE = '/list-projet-by-status',
    DETAIL_PROJET_PAGE = '/detail-project'


}

export default NavigationConstants;


export const navAppBarGray = {
    ACCUEIL: { name: "Accueil", path: NavigationConstants.ACCUEIL_PAGE },
    STRATEGIES_NATIONALES: { name: "", path: NavigationConstants.STRATEGIES_NATIONALES_PAGE },
    PARTENARIAT: { name: "Partenariat", path: NavigationConstants.PARTENARIAT_PAGE },

};
