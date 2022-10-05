import React from 'react';
import "./step10.scss";
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import useNavigationApp from '../../../../../hooks/useNavigationApp';
import { Grid } from '@mui/material';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfFile from "./PdfFile";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';
import { BoxIconTitleSubTitle, HeaderStep } from '../../../../../components';
import {
    setNumStepAction,
    isEditRenseignerConvAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';

function Step10() {

    const dispatch = useAppDispatch();
    let navigate = useNavigationApp().navigate;
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);
    const info_generale_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.infoGeneraleRenseignerConvRegionaleAvenant);
    const type_modification_conv_avenant_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.typeModificationConvAvenant);
    const objet_objectifs_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.objetObjectifs);
    const autre_aspect_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.autreAspect);



    const onClickEditStepHandler = (numStep: number) => {
        dispatch(setNumStepAction(numStep));
        dispatch(isEditRenseignerConvAction(true));
    }

    return (
        <div className='container-step10-conv-regionale-avenant'
            style={{ display: num_current_step_store == 9 ? "block" : "none" }}
        >
            {/* HEADER */}
            <Grid container spacing={2} style={{ marginBottom: "18px", justifyContent: "flex-end", alignItems: "center" }}>
                <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
                    <div className='txt-info-cv-confirmer'>Informations sur la convention à confirmer.</div>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <PDFDownloadLink document={<PdfFile />} fileName="Convention">
                        <div className='rectangle-pdf'>
                            <div className='container-left-side-pdf'>
                                <div className='container-icon-paper-pdf'>
                                    <ArticleOutlinedIcon style={{ fontSize: "20px" }} />
                                </div>
                                <div className='txt-name-conv-pdf'>
                                    Convention.pdf
                                </div>
                            </div>
                            <div><FileDownloadOutlinedIcon style={{ color: "#878A99", fontSize: "24px" }} /></div>
                        </div>
                    </PDFDownloadLink>
                </Grid>
            </Grid>
            {/* RECAP STEP1 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_1}
                numStep={1}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(0)}
            />
            <div className='card-info-step'>
                <Grid container spacing={4}>
                    <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                        <BoxIconTitleSubTitle
                            children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Titre de la convention"
                            subTitle={info_generale_store.titleConv}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Partenariat"
                            subTitle="Régionale"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Type de la convention"
                            subTitle={info_generale_store.nameTypeConvention}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Région"
                            subTitle={info_generale_store.nameRegion}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Province"
                            subTitle={info_generale_store.nameProvince}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Rattachée à une convention cadre ?"
                            subTitle={info_generale_store.isRattacheeConvCadre ? "Oui" : "Non"}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="l’intitulé de la convention cadre y afférente"
                            subTitle="Convention cadre pour le financement des projet…"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Contexte de la convention"
                            subTitle="NMDP"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Dimension Royale"
                            subTitle={info_generale_store.isDimensionRoya ? "Oui" : "Non"}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Année de signature"
                            subTitle={info_generale_store.anneeSignature}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Date de la signature"
                            subTitle={info_generale_store.dateSignature}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Année de fin prévisionnelle"
                            subTitle={info_generale_store.anneeFinPrev}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Date de fin effective"
                            subTitle={info_generale_store.dateFinEffective as string | undefined}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Secteur"
                            subTitle={info_generale_store.nameSecteur}
                        />
                    </Grid>
                </Grid>
            </div>
            {/* RECAP STEP2 if type_modification_conv_avenant_store.id === 1 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_2}
                numStep={2}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(1)}
            />
            <div className='card-info-step'>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                        <BoxIconTitleSubTitle
                            children={<CreateOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Modification"
                            subTitle={type_modification_conv_avenant_store.name}
                        />
                    </Grid>
                    {type_modification_conv_avenant_store.id === 1 &&
                        <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                            <BoxIconTitleSubTitle
                                children={<CreateOutlinedIcon style={{ fontSize: "18px" }} />}
                                title="Objet de la convention"
                                subTitle={objet_objectifs_store.objet}
                            />
                        </Grid>
                    }
                </Grid>
                {type_modification_conv_avenant_store.id === 1 &&
                    <>
                        <div className='txt-objectifs-step2'>Objectifs</div>
                        <Grid container spacing={1}>
                            {objet_objectifs_store.listObjectif.map((item: string, index: number) => (
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12} key={index.toString()}>
                                    <BoxIconTitleSubTitle
                                        children={<TrackChangesOutlinedIcon style={{ fontSize: "18px" }} />}
                                        subTitle={item}
                                        className='sub-classname-container-box-icon-title-sub-title'
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <div className='txt-objectifs-step2'>Modification</div>
                        <BoxIconTitleSubTitle
                            children={<TrackChangesOutlinedIcon style={{ fontSize: "18px" }} />}
                            subTitle={autre_aspect_store}
                            className='sub-classname-container-box-icon-title-sub-title'
                        />
                    </>

                }

            </div>
            {/*  */}
        </div>
    );
}

export default Step10;