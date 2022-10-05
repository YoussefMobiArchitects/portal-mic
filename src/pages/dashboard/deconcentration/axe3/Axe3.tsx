import React, { useState } from 'react';
import "./axe3.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useNavigationApp from '../../../../hooks/useNavigationApp';
import { AppbarGray, CardInfoAxe, MainButton } from '../../../../components';
import { Box, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { DiffusionRhItemI } from '../../../../models/diffusionRhItem';
import { getListeDiffusionRhAction } from "../../../../redux/reducers/deconcentrationListDiffusionRhReducer";
import ModalAddOrganisme from "./modalAddOrganisme/ModalAddOrganisme";
import ModalAddSituationOrganisme from "./modalAddSituationOrganisme/ModalAddSituationOrganisme";


export const ItemDiffusionRh = ({
    id,
    lblOrganisation,
    situationActuelleAdministrationsCentrales,
    situationActuelleInteretsRegionaux,
    objectifsAtteindreYearOne,
    objectifsAtteindreYearTwo,
    objectifsAtteindreYearThree
}: DiffusionRhItemI) => {
    return (
        <>
            <Grid item xs={3}>
                <div className='rectangle-item-diffusion-first-element'>{lblOrganisation}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{situationActuelleAdministrationsCentrales}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{situationActuelleInteretsRegionaux}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearOne}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearTwo}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearThree}</div>
            </Grid>
            {/* </Grid> */}
        </>
    )
}


function Axe3() {

    let navigate = useNavigationApp().navigate;
    const dispatch = useAppDispatch();
    const liste_diffusion_rh_store = useAppSelector((state) => state.deconcentrationListDiffusionRhReducer.liste_diffusion_rh);
    // const [listeDiffusionRh, setListDiffusionRh] = useState(liste_diffusion_rh_temp_store);
    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  Modal add organisme */
    const [openModalAddOrganisme, setOpenModalAddOrganisme] = React.useState(false);
    const handleOpenModalAddOrganisme = () => setOpenModalAddOrganisme(true);
    const handleCloseModalAddOrganisme = () => setOpenModalAddOrganisme(false);
    const handleAddOrganisme = (item: any) => {
        console.log(item);
        setOpenModalAddOrganisme(false)
    }
    /* #endregion */
    /* #region  Modal add situation organisme */
    const [openModalAddSituationOrganisme, setOpenModalAddSituationOrganisme] = React.useState(false);
    const handleOpenModalAddSituationOrganisme = () => setOpenModalAddSituationOrganisme(true);
    const handleCloseModalAddSituationOrganisme = () => setOpenModalAddSituationOrganisme(false);

    const handleAddSituationOrganisme = (item: any) => {
        console.log(item);
        setOpenModalAddSituationOrganisme(false)
    }
    /* #endregion */

    React.useEffect(() => {
        dispatch(getListeDiffusionRhAction());
        // setListDiffusionRh(liste_diffusion_rh_store)
    }, [
        // liste_diffusion_rh_store
    ])

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <ModalAddOrganisme
                        isOpen={openModalAddOrganisme}
                        onClickClose={handleCloseModalAddOrganisme}
                        onClickAdd={handleAddOrganisme}
                    />
                    <ModalAddSituationOrganisme
                        isOpen={openModalAddSituationOrganisme}
                        onClickClose={handleCloseModalAddSituationOrganisme}
                        onClickAdd={handleAddSituationOrganisme}
                    />
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes", ">", "Axe3"]} />
                    <div className='container-axe3' dir='rtl' >
                        {/* CARD INFO AXE */}
                        <CardInfoAxe
                            bgColor='#FFF1F9'
                            nameAxe='المحور الثالث'
                            bgColor1='#EB5796'
                            bgColor2='#A4479F'
                            nameRegion='الدارالبيضاء-سطات'
                            infoAxe='توزيع الموارد البشرية بين المصالح المركزية والمصالح اللاممركزة'
                        />
                        {/* TITLE LIST */}
                        <Grid container spacing={1} style={{ marginBottom: "15px", marginTop: "5px" }}>
                            <Grid item xs={12} sm={12} md={12} lg={10} style={{ display: "flex", alignItems: "center" }}>
                                <div className='container-title-list'>
                                    <div className='rectangle-3'></div>
                                    <div className='txt-title-list'>توزيع الموارد البشرية بين المصالح المركزية والمصالح اللاممركزة على مستوى جهة الدارالبيضاء-سطات</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2} style={{ justifyContent: "end" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <MainButton onClick={handleOpenModalAddSituationOrganisme} label="أضف الوضعية و الأهداف" className='btn-add-status-objectifs' />
                                </div>
                            </Grid>
                        </Grid>
                        {/* TOP HEADER */}
                        <Grid container spacing={1}>
                            <Grid item xs={true}>

                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-top-header-table-status-objectifs'>الإدارات المركزية</div>
                            </Grid>
                            <Grid item xs={7.2} sm={7.2} md={7.2} lg={7.2} xl={7.2}>
                                <div className='txt-top-header-table-status-objectifs'>المصالح الإقليمية</div>
                            </Grid>
                        </Grid>
                        {/* SUB HEADER */}
                        <Grid container spacing={1} style={{ padding: "15px 0px" }}>
                            <Grid item xs={3}>
                                <div className='txt-title-sub-header style-align-item-flex-start'>الهيئات (المشتركة/الخاضعة لأنظمة خاصة)</div>
                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-title-sub-header'>الوضعية الحالية</div>
                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-title-sub-header'>الوضعية الحالية</div>
                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-title-sub-header'>
                                    <div>السنة الأولى</div>
                                    <div>الأهداف المزعم بلوغها</div>
                                </div>
                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-title-sub-header'>
                                    <div>السنة الأولى</div>
                                    <div>الأهداف المزعم بلوغها</div>
                                </div>
                            </Grid>
                            <Grid item xs={1.8}>
                                <div className='txt-title-sub-header'>
                                    <div>السنة الأولى</div>
                                    <div>الأهداف المزعم بلوغها</div>
                                </div>
                            </Grid>

                        </Grid>
                        {/* TABLE */}
                        <Grid
                            container spacing={1}
                            style={{ justifyContent: "space-between", alignItems: "stretch" }}
                        >
                            {liste_diffusion_rh_store.map((item, index) => (
                                <ItemDiffusionRh
                                    key={index.toString()}
                                    id={index}
                                    lblOrganisation={item.lblOrganisation}
                                    situationActuelleAdministrationsCentrales={item.situationActuelleAdministrationsCentrales}
                                    situationActuelleInteretsRegionaux={item.situationActuelleInteretsRegionaux}
                                    objectifsAtteindreYearOne={item.objectifsAtteindreYearOne}
                                    objectifsAtteindreYearTwo={item.objectifsAtteindreYearTwo}
                                    objectifsAtteindreYearThree={item.objectifsAtteindreYearThree}
                                />
                            ))}
                        </Grid>
                        {/* FOOTER */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1} style={{ padding: "15px 0px" }}>
                                <Grid item xs={3}>
                                    <div className='div-footer-element-first' onClick={handleOpenModalAddOrganisme}>أضف الهيئات</div>
                                </Grid>
                                <Grid item xs={1.8}>
                                    <div className='div-footer-element'></div>
                                </Grid>
                                <Grid item xs={1.8}>
                                    <div className='div-footer-element'></div>
                                </Grid>
                                <Grid item xs={1.8}>
                                    <div className='div-footer-element'>

                                    </div>
                                </Grid>
                                <Grid item xs={1.8}>
                                    <div className='div-footer-element'>

                                    </div>
                                </Grid>
                                <Grid item xs={1.8}>
                                    <div className='div-footer-element'>

                                    </div>
                                </Grid>

                            </Grid>
                        </Box>
                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Axe3;