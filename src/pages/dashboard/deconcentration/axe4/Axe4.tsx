import React, { useState } from 'react';
import "./axe4.scss"
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
import { getListeDiffusionRmAction } from '../../../../redux/reducers/deconcentrationListDiffusionRmReducer';
import { DiffusionRessourcesMateriellesItemI } from '../../../../models/diffusionRessourcesMaterielles';
import ModalAddRessourceMateriel from './modalAddRm/ModalAddRessourceMateriel';


export const ItemDiffusionRm = ({
    id,
    nameRessource,
    situationActuelleAdministrationsCentrales,
    situationActuelleInteretsRegionaux,
    objectifsAtteindreYearOne,
    objectifsAtteindreYearTwo,
    objectifsAtteindreYearThree
}: DiffusionRessourcesMateriellesItemI) => {
    return (
        <>
            {/* <Grid container spacing={1} style={{ padding: "15px 0px" }}> */}
            <Grid item xs={3}>
                <div className='rectangle-item-diffusion-first-element'>{nameRessource}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{situationActuelleAdministrationsCentrales !== null ? situationActuelleAdministrationsCentrales : "-"}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{situationActuelleInteretsRegionaux !== null ? situationActuelleInteretsRegionaux : "-"}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearOne !== null ? objectifsAtteindreYearOne : "-"}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearTwo !== null ? objectifsAtteindreYearTwo : "-"}</div>
            </Grid>
            <Grid item xs={1.8}>
                <div className='rectangle-item-diffusion'>{objectifsAtteindreYearThree !== null ? objectifsAtteindreYearThree : "-"}</div>
            </Grid>
            {/* </Grid> */}
        </>
    )
}


function Axe4() {

    let navigate = useNavigationApp().navigate;
    const dispatch = useAppDispatch();
    const liste_diffusion_rm_store = useAppSelector((state) => state.deconcentrationListDiffusionRmReducer.liste_diffusion_rm);
    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  Modal add situation organisme */
    const [openModalAddRessourceMateriel, setOpenModalAddRessourceMateriel] = React.useState(false);
    const handleOpenModalAddRessourceMateriel = () => setOpenModalAddRessourceMateriel(true);
    const handleCloseModalAddRessourceMateriel = () => setOpenModalAddRessourceMateriel(false);

    const handleAddRessourceMateriel = (item: any) => {
        console.log(item);
        setOpenModalAddRessourceMateriel(false)
    }
    /* #endregion */

    React.useEffect(() => {
        dispatch(getListeDiffusionRmAction());
    }, [
    ])

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <ModalAddRessourceMateriel
                        isOpen={openModalAddRessourceMateriel}
                        onClickClose={handleCloseModalAddRessourceMateriel}
                        onClickAdd={handleAddRessourceMateriel}
                    />
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes", ">", "Axe4"]} />
                    <div className='container-axe4' dir='rtl' >
                        {/* CARD INFO AXE */}
                        <CardInfoAxe
                            bgColor='#F1F5FF'
                            nameAxe='المحور الرابع'
                            bgColor1='#3487E8'
                            bgColor2='#384B9D'
                            nameRegion='الدارالبيضاء-سطات'
                            infoAxe='توزيع الموارد المادية بين المصالح المركزية والمصالح اللاممركزة'
                        />
                        {/* TITLE LIST */}
                        <Grid container spacing={1} style={{ marginBottom: "15px", marginTop: "5px" }}>
                            <Grid item xs={12} sm={12} md={12} lg={10} style={{ display: "flex", alignItems: "center" }}>
                                <div className='container-title-list'>
                                    <div className='rectangle-3'></div>
                                    <div className='txt-title-list'>توزيع الموارد المادية بين المصالح المركزية والمصالح اللاممركزة على مستوى جهة الدارالبيضاء-سطات</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2} style={{ justifyContent: "end" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <MainButton onClick={handleOpenModalAddRessourceMateriel} label="أضف الموارد المادية" className='btn-add-status-objectifs' />
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
                                <div className='txt-title-sub-header style-align-item-flex-start'>الموارد المادية</div>
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
                        {liste_diffusion_rm_store.map((item, index) => (
                            <div className="tabs-axe4" key={index.toString()}>
                                <div className="tab-axe4">
                                    <input className='input-style' type="checkbox" id={index.toString()} />
                                    <label className="tab-axe4-label" htmlFor={index.toString()}>
                                        <div className='tab-axe4-label-container-txt-icon'>
                                            <div className='tab-axe4-label-container-txt-icon-txt-title'>{item.typeRessourcesMaterielles}</div>
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        <Grid
                                            container spacing={1}
                                            style={{ justifyContent: "space-between", alignItems: "stretch" }}
                                        >
                                            {item.listRessourcesMaterielles.map((item, index) => (
                                                <ItemDiffusionRm
                                                    key={index.toString()}
                                                    id={index}
                                                    nameRessource={item.nameRessource}
                                                    situationActuelleAdministrationsCentrales={item.situationActuelleAdministrationsCentrales}
                                                    situationActuelleInteretsRegionaux={item.situationActuelleInteretsRegionaux}
                                                    objectifsAtteindreYearOne={item.objectifsAtteindreYearOne}
                                                    objectifsAtteindreYearTwo={item.objectifsAtteindreYearTwo}
                                                    objectifsAtteindreYearThree={item.objectifsAtteindreYearThree}
                                                />
                                            ))}
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/*  */}


                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Axe4;