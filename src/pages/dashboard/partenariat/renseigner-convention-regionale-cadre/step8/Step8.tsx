import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import "./styles.scss";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {
    HeaderStep,
    BoxIconTitleSubTitle,
    MainButton,
} from '../../../../../components';
import { StepRenseignerConventionRegionaleCadre } from '../../../../../enums';
import { SingleAccordion } from '../step4/Step4';
import {
    setNumStepAction,
    isEditRenseignerConvAction,
    EngagementFinancierGroupedByI,
    getListEngagementGroupedByTypeAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleCadreReducer';
import { FooterStep } from '../RenseignerConventionRegionaleCadre';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfFile from "./PdfFile";
import { EngagementFinancierI, ItemEcheancierFinancierI } from '../../../../../models/engagementFinancier';
import { groupBy } from '../../../../../utils/groupBy';
import useNavigationApp from "../../../../../hooks/useNavigationApp";
import { NavigationConstants } from '../../../../../constants';

function Step8() {

    const dispatch = useAppDispatch();
    let navigate = useNavigationApp().navigate;

    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const info_generale_renseigner_conv_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.infoGeneraleRenseignerConvRegionaleCadre);

    console.log("obj ====> ", info_generale_renseigner_conv_store);

    const objetObjectifs_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.objetObjectifs);
    const axes_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.axes);
    const total_axes_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.totalAxes);

    const list_engagement_financier_groupedby_type_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.listEngagementFinancierGroupedByType);
    console.log("list_engagement_financier_groupedby_type_store : ", list_engagement_financier_groupedby_type_store)
    const list_domiciliation_contribution_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.listDomiciliationContribution);
    const list_comites_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.listComites);
    const list_remarque_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.remarques);


    const onClickEditStepHandler = (numStep: number) => {
        dispatch(setNumStepAction(numStep));
        dispatch(isEditRenseignerConvAction(true));
    }

    const onClickPrevStep8 = () => {
        dispatch(setNumStepAction(6))
    }

    const onClickConfirmer = () => {
        navigate(NavigationConstants.LISTE_CONVENTION_PAGE)
    }

    React.useEffect(() => {
        dispatch(getListEngagementGroupedByTypeAction())
    }, [])

    return (
        <div className='container-step8'
            style={{ display: num_current_step_store == 7 ? "block" : "none" }}
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
                label={StepRenseignerConventionRegionaleCadre.STEP_1}
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
                            subTitle={info_generale_renseigner_conv_store.titleConv}
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
                            subTitle={info_generale_renseigner_conv_store.nameTypeConvention}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<LocationOnOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Région"
                            subTitle={info_generale_renseigner_conv_store.nameRegion}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Contexte de la convention"
                            subTitle={info_generale_renseigner_conv_store.nameCtxConvCadre}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Dimension Royale"
                            subTitle={info_generale_renseigner_conv_store.isDimensionRoya ? "Oui" : "Non"}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Année de signature"
                            subTitle={info_generale_renseigner_conv_store.anneeSignature}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Date de la signature"
                            subTitle={info_generale_renseigner_conv_store.dateSignature}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Année de fin prévisionnelle"
                            subTitle={info_generale_renseigner_conv_store.anneeFinPrev}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Date de fin effective"
                            subTitle={info_generale_renseigner_conv_store.dateFinEffective}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                        <BoxIconTitleSubTitle
                            children={<SyncAltOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Secteur"
                            subTitle={info_generale_renseigner_conv_store.nameSecteur}
                        />
                    </Grid>
                </Grid>
            </div>
            {/* RECAP STEP2 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_2}
                numStep={2}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(1)}
            />
            <div className='card-info-step'>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                        <BoxIconTitleSubTitle
                            children={<CreateOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Objet de la convention"
                            subTitle={objetObjectifs_store.objet}
                        />
                    </Grid>
                </Grid>
                <div className='txt-objectifs-step2'>Objectifs</div>
                <Grid container spacing={1}>
                    {objetObjectifs_store.listObjectif.map((item: string, index: number) => (
                        <Grid item sm={12} xs={12} md={12} lg={12} xl={12} key={index.toString()}>
                            <BoxIconTitleSubTitle
                                children={<TrackChangesOutlinedIcon style={{ fontSize: "18px" }} />}
                                subTitle={item}
                                className='sub-classname-container-box-icon-title-sub-title'
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            {/* RECAP STEP3 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_3}
                numStep={3}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(2)}
            />
            <div className='card-info-step'>
                {/* HEADER TABLE */}
                <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "25px" }}>
                    <Grid item xs={4} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Nom d’axe</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Coût</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Nbr domaines</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Nbr programmes/projets</div>
                        </div>
                    </Grid>
                </Grid>
                {/* BODY TABLE */}
                {
                    axes_store.map((item, index) => (
                        <div className='container-axe-item' key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={4} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='container-icon-target'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                        <div className='txt-obj-item'>{item.nameAxe}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.cout}MDH</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.nbrDomaine}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.nbrProgProj}</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
                {/* TOTAL */}
                <div className='container-total-axes'>
                    <Grid container spacing={1} className="grid-item-axe">
                        <Grid item xs={4} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='container-hidden-icon'></div>
                                <div className='txt-div-totals'>{axes_store.length} axes</div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-div-totals'>{axes_store.reduce((accumulator, obj) => {
                                    return accumulator + parseInt(obj.cout);
                                }, 0)}MDH</div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-div-totals'>{axes_store.reduce((accumulator, obj) => {
                                    return accumulator + parseInt(obj.nbrDomaine);
                                }, 0)}</div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-div-totals'>{axes_store.reduce((accumulator, obj) => {
                                    return accumulator + parseInt(obj.nbrProgProj);
                                }, 0)}</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {/* RECAP STEP4 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_4}
                numStep={4}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(3)}
            />
            <div className='txt-contribution-fin-mic-projets'>contribution financière du MIC aux projets</div>
            <div className='card-info-step'>
                {list_engagement_financier_groupedby_type_store.map((res, index) => {
                    return <SingleAccordion
                        key={index.toString()}
                        nameAxe={res.nameAxe}
                        listEngagementFinancier={res.listEngagementFinancier}
                    />;
                })}
            </div>

            {/* RECAP STEP5 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_5}
                numStep={5}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(4)}
            />
            <div className='card-info-step'>
                {/* HEADER */}
                <Grid container spacing={1} className="grid-item-axe">
                    <Grid item xs={2} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Convention</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Article de la convention</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Organisme bénéficiaire</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>RIB</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Autres informations</div>
                        </div>
                    </Grid>
                </Grid>
                {/* BODY */}
                {
                    list_domiciliation_contribution_store.map((item, index) => (
                        <div className='container-axe-item' key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={2} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item' style={{ margin: "0px 15px" }}>Cadre</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.articleConvention}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.organismeBeneficiaire}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.rib}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.autreInfo}</div>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>
                    ))
                }
            </div>
            {/* RECAP STEP6 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_6}
                numStep={6}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(5)}
            />
            <div className='card-info-step-second'>
                <Grid container spacing={4} >
                    <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                        {list_comites_store.map((item, index) => (
                            <Grid container key={index.toString()}>
                                <Grid item sm={6} xs={6} md={4} lg={3} xl={3} style={{ padding: "10px 0px" }}>
                                    <BoxIconTitleSubTitle
                                        children={<SchoolOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Type de comité"
                                        subTitle={item.nameMode}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={6} md={4} lg={3} xl={3} style={{ padding: "10px 0px" }}>
                                    <BoxIconTitleSubTitle
                                        children={<TuneOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Fréquence"
                                        subTitle={item.valFreq}
                                    />
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
            {/* RECAP STEP7 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_7}
                numStep={7}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(6)}
            />
            <div className='card-info-step'>
                <div className='txt-remarques-observations-recap-step7'>Remarques/observations</div>
                <Grid container spacing={2} >
                    {list_remarque_store.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={12} xl={12} key={index.toString()}>
                            <BoxIconTitleSubTitle
                                children={<FeedOutlinedIcon style={{ fontSize: "18px" }} />}
                                subTitle={item}
                                className='sub-classname-container-box-icon-title-sub-title'
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            {/* Footer */}

            <div className='btns-footer-step8'>
                <Grid container spacing={1} style={{ justifyContent: "end" }}>
                    <Grid item >
                        <MainButton onClick={onClickPrevStep8} className='btn-prev' label="Précédent" />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={onClickConfirmer} className='btn-next' label="Confirmer" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Step8;