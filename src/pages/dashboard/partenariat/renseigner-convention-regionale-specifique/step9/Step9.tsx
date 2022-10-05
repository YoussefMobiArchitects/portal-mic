import { Grid } from '@mui/material';
import React from 'react';
import "./step9.scss";
import { BoxIconTitleSubTitle, HeaderStep, MainButton } from '../../../../../components';
import { NavigationConstants } from '../../../../../constants';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import useNavigationApp from '../../../../../hooks/useNavigationApp';
import { isEditRenseignerConvAction, setNumStepAction } from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import PdfFile from "./PdfFile";
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { SingleAccordionContributionPartenaire } from '../step5/Step5';

function Step9() {
    
    const dispatch = useAppDispatch();
    let navigate = useNavigationApp().navigate;
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const info_generale_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.infoGeneraleRenseignerConvRegionaleSpecifique);
    const objetObjectifs_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.objetObjectifs);
    const list_consistance_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listConsistance);
    const list_domiciliation_contribution_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listDomiciliationContribution);
    const list_contribution_partenaire_grouped_by_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listContributionPartenaireGroupedBy);
    const list_engagement_financier_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listEngagementFinancierConvRegionaleSpecifique);
    const list_autre_engagement_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listAutreEngagementConvRegionaleSpecifique);
    const list_list_comite_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listComite);
    const list_remarque_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.remarques);
    const type_engagement_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.typeEngagement);
    const dipositif_financement_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.dipositifFinancement);
    const mode_deblocage_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.modeDeblocage);




    const onClickEditStepHandler = (numStep: number) => {
        dispatch(setNumStepAction(numStep));
        dispatch(isEditRenseignerConvAction(true));
    }

    const onClickPrevStep9 = () => {
        dispatch(setNumStepAction(7))
    }
    const onClickConfirmer = () => {
        navigate(NavigationConstants.LISTE_CONVENTION_PAGE)
    }

    return (
        <div className='container-step9-conv-regionale-specifique'
            style={{ display: num_current_step_store == 8 ? "block" : "none" }}
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
                label={StepRenseignerConventionRegionaleSpecifique.STEP_1}
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
            {/* RECAP STEP2 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_2}
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
                label={StepRenseignerConventionRegionaleSpecifique.STEP_3}
                numStep={3}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(2)}
            />
            <div style={{ marginTop: "10px" }}>
                {list_consistance_store.map((item: string, index: number) => (
                    <Grid container spacing={1} key={index} style={{ marginBottom: "15px" }}>
                        <Grid item xs={12}>
                            <div className='item-obj'>
                                <div className='container-icon-target'><SyncAltOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                <div className='txt-obj-item'>{item}</div>
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </div>
            {/* RECAP STEP4 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_4}
                numStep={4}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(3)}
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
                                        <div className='txt-obj-item' style={{ paddingLeft: "8px" }}>{item.autreInfo}</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </div>
            {/* RECAP STEP5 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_5}
                numStep={5}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(4)}
            />
            <div className='card-info-step' style={{ padding: "32px 30px 15px 30px" }}>
                <div>
                    {list_contribution_partenaire_grouped_by_store.map((res, index) => {
                        return <SingleAccordionContributionPartenaire
                            key={index}
                            nameProjet={res.nameProjet}
                            listContributionPartenaire={res.listContributionPartenaire}
                            isShowBtnEdit={true}
                        />;
                    })}
                </div>
            </div>
            {/* RECAP STEP6 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_6}
                numStep={6}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(5)}
            />
            <div className='card-info-step'>
                <Grid container spacing={4}>
                    <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
                        <BoxIconTitleSubTitle
                            children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Type d’engagement du MIC"
                            subTitle={type_engagement_store.name}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
                        <BoxIconTitleSubTitle
                            children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Dispositif de financement"
                            subTitle={dipositif_financement_store.name}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
                        <BoxIconTitleSubTitle
                            children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                            title="Mode de déblocage"
                            subTitle={mode_deblocage_store.name}
                        />
                    </Grid>
                </Grid>
            </div>

            <div className='txt-contribution-fin-mic-projets'>contribution financière du MIC aux projets</div>
            <div className='card-info-step'>
                {/* HEADER TABLE */}
                <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                    <Grid item xs={4.5} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Projets</div>
                        </div>
                    </Grid>
                    <Grid item xs={5} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Echéancier(s)</div>
                        </div>
                    </Grid>
                    <Grid item xs={2.5} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Total contribution prévue</div>
                        </div>
                    </Grid>
                </Grid>
                {/* BODY TABLE */}
                {
                    list_engagement_financier_conv_regionale_specifique_store.map((item, index) => (
                        <div className='container-proj-item' style={{ padding: "0px 15px" }} key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={4.5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.nameProjet}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={5} className="grid-item-item-axe">
                                    <div className='container-echeancier'>
                                        {item.listEcheancier.map((item, index) => (
                                            <div key={index} className='container-val-echeancier'>
                                                <div className='txt-obj-item'>{item.contribution}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item xs={2.5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item' style={{ margin: "0px 15px", color: "#599F3E" }}>
                                            {item.listEcheancier.reduce((accumulator, obj) => {
                                                return accumulator + parseInt(obj.contribution.toString())
                                            }, 0)}</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </div>
            <div className='txt-contribution-fin-mic-projets'>Autre engagement du ministre aux projets</div>
            <div className='card-info-step'>
                {/* HEADER TABLE */}
                <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                    <Grid item xs={4} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Projets</div>
                        </div>
                    </Grid>
                    <Grid item xs={7} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Echéancier(s)</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                    </Grid>
                </Grid>
                {/* BODY TABLE */}
                {
                    list_autre_engagement_conv_regionale_specifique_store.map((item, index) => (
                        <div className='container-proj-item' key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={4} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='container-icon-paper'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                        <div className='txt-obj-item'>{item.nameProjet}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={7} className="grid-item-item-axe">
                                    <div className='container-echeancier'>
                                        {item.listEcheancier.map((item, index) => (
                                            <div key={index} className='container-val-echeancier'>
                                                <div className='txt-obj-item'>{item.contribution}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </div>
            {/* RECAP STEP7 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_7}
                numStep={7}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(6)}
            />
            <div className='card-info-step'>
                <Grid container spacing={4} >
                    <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                        {list_list_comite_store.map((item, index) => (
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
            {/* RECAP STEP8 */}
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_8}
                numStep={8}
                isShowEditBtn={true}
                onClickEditHandler={() => onClickEditStepHandler(7)}
            />
            <div className='card-info-step'>
                <div className='txt-remarques-observations-recap-step8'>Remarques/observations</div>
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
            {/*  */}
            <div className='btns-footer-step8'>
                <Grid container spacing={1} style={{ justifyContent: "end" }}>
                    <Grid item >
                        <MainButton onClick={onClickPrevStep9} className='btn-prev' label="Précédent" />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={onClickConfirmer} className='btn-next' label="Confirmer" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Step9;