import { Grid, SwipeableDrawer, Tooltip, Typography } from '@mui/material';
import React from 'react';
import "./styles.scss"
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
import { BoxIconTitleSubTitle, DrawerHistoriqueRemarque, MainButtonIcon } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import { saveAs } from "file-saver";
import * as FileSaver from 'file-saver';
import Box from '@mui/material/Box';
import { CONTRIBUTION_FINANCIERE_MIC_PROJETS } from '../../../../../constants/DataConstants';


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import MuiAccordionDetails from '@mui/material/AccordionDetails';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { ContributionI, ProjetI } from '../../../../../models/contributionFinanciereMICProjets';


interface SingleAccordionProps {
    nameAxe: string;
    data: ProjetI[]
}

interface ItemProjetContributionFinanciereProps {
    nameProj: string;
    listContribution: ContributionI[]
}

export const ItemProjetContributionFinanciere = ({ nameProj, listContribution }: ItemProjetContributionFinanciereProps) => {

    return (
        <div style={{ display: "flex", marginBottom: "10px" }}>
            <div>
                <div className='div-name-proj'>
                    {/* {nameProj} */}
                    <BoxIconTitleSubTitle
                        children={<FeedOutlinedIcon style={{ fontSize: "18px" }} />}
                        subTitle={nameProj}
                        className='sub-classname-container-box-icon-title-sub-title'
                    />
                </div>
            </div>
            {listContribution.map((cont, index) => (
                <div key={index.toString()}>
                    <div className='div-item-contri'>
                        <div className='div-contri-prev'>{cont.valPrevu}</div>
                        <div className='div-contri-debloq'>{cont.valDebloque}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const SingleAccordion = ({ nameAxe, data }: SingleAccordionProps) => {

    const [expanded, setExpanded] = React.useState<string | false>('panel_0');
    const handleChangeExpanded = (panel: string) => (event: any, newExpanded: any) => {
        setExpanded(newExpanded ? panel : false);
    };

    const AccordionSummary = styled((props: AccordionSummaryProps) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', margin: "0px 15px" }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        // flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    return (
        <Accordion
            TransitionProps={{ unmountOnExit: true }}
            onChange={handleChangeExpanded(`panel_${nameAxe}`)}
            expanded={expanded === `panel_${nameAxe}`}
        >

            {/*  */}
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <div className='container-sub-header-accodion'>
                    <div className='container-icon-bug'><ShoppingBagOutlinedIcon style={{ fontSize: "17px" }} /></div>
                    <div className='txt-title-header-accordion'>{nameAxe}</div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/* HEADER TABLE */}



                {/* BODY TABLE */}
                <div style={{ display: "flex" }} >

                    <div className='scrollable-div'>
                        {/* TOP HEADER TABLE */}
                        <div style={{ display: "flex", marginBottom: "0px" }}>
                            <div>
                                <div className='div-header-name-proj'></div>
                            </div>
                            {data[0].listContribution.map((cont, index) => (
                                <div key={index.toString()}>
                                    <div className='div-txt-annee'>
                                        Année {cont.annee}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* SUB HEADER TABLE */}
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <div>
                                <div className='div-header-name-proj'></div>
                            </div>
                            {data[0].listContribution.map((cont, index) => (
                                <div key={index.toString()}>
                                    <div className='div-txt-prev-debloq' style={{ marginRight: index === (data[0].listContribution.length - 1) ? "0px" : "8px" }}>
                                        <div className='div-txt-prev'>Prévu</div>
                                        <div className='div-txt-debloq'>Débloqué</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* BODY */}
                        {data.map((proj, index) => (
                            <ItemProjetContributionFinanciere
                                key={index.toString()}
                                nameProj={proj.nameProjet}
                                listContribution={proj.listContribution}
                            />
                        ))}
                    </div>

                    <div style={{ width: "200px" }}>
                        {/* TOTAL CONTRIBUTION*/}
                        <div style={{ display: "flex", marginBottom: "0px" }}>
                            <div className='div-txt-annee'>
                                Total
                            </div>
                        </div>
                        <div className='div-txt-prev-debloq' style={{ marginBottom: "10px" }}>
                            <div className='div-txt-prev'>Prévu</div>
                            <div className='div-txt-debloq'>Débloqué</div>
                        </div>

                        {data.map((item, index) => (
                            <div key={index.toString()} style={{ marginBottom: "10px" }}>
                                <div className='div-item-contri'>
                                    <div className='div-contri-prev'>{item.totalPrevu}</div>
                                    <div className='div-contri-debloq'>{item.totalDebloque}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOTAL */}

            </AccordionDetails>

        </Accordion>
    );
};


function Section1() {

    const axes_store = useAppSelector((state) => state.consulterConvReducer.axes);
    const list_domiciliation_contribution_store = useAppSelector((state) => state.consulterConvReducer.listDomiciliationContribution);
    const list_mode_gouvernance_store = useAppSelector((state) => state.consulterConvReducer.listModeGouvernanace);
    const list_etat_avancement_projet_store = useAppSelector((state) => state.consulterConvReducer.list_etat_avancement_projet);
    const list_remarque_store = useAppSelector((state) => state.consulterConvReducer.list_remarque);

    /* #region  Drawer detail remarque */
    const [isOpenDrawerDetailRemarque, setIsOpenDrawerDetailRemarque] = React.useState(false);

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            console.log(open);
            // if (
            //     event &&
            //     event.type === 'keydown' &&
            //     ((event as React.KeyboardEvent).key === 'Tab' ||
            //         (event as React.KeyboardEvent).key === 'Shift')
            // ) {
            //     return;
            // }
            setIsOpenDrawerDetailRemarque(open);
        };

    /* #endregion */

    const onClickShowDetailModeGouvernanace = (item: any) => {
        console.log(item)
    }

    const onClickShowDetailAvancementProj = (item: any) => {
        console.log(item)
    }
    const onClickShowDetailRemarque = (item: any) => {
        console.log(item);
        // toggleDrawer(true);
        setIsOpenDrawerDetailRemarque(true);
    }

    const saveFile = () => {
        FileSaver.saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };

    return (
        <div style={{ width: "100%" }}>

            <DrawerHistoriqueRemarque
                anchor="right"
                open={isOpenDrawerDetailRemarque}
                onClose={() => setIsOpenDrawerDetailRemarque(false)}
                onOpen={() => toggleDrawer(true)}
            />

            {/* 1-Informations générales */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck1" />
                    <label className="tab-label" htmlFor="chck1">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >1</div>
                            <div className='txt-title-section-consulter-conv'>Informations générales</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>
                            <Grid container spacing={4}>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <BoxIconTitleSubTitle
                                        children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Titre de la convention"
                                        subTitle="Convention cadre pour le financement des projets d’aménagement et de création des zones d’activités économiques et des zones industrielles à la région
                                        de beni mellal-khenifra"
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
                                        subTitle="Convention Cadre"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<LocationOnOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Région"
                                        subTitle="Casablanca-settat"
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
                                        subTitle="Non"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Année de signature"
                                        subTitle="2022"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Date de la signature"
                                        subTitle="2022"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Année de fin prévisionnelle"
                                        subTitle="2024"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Date de fin effective"
                                        subTitle="Ajouter la date"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={3} xl={3}>
                                    <BoxIconTitleSubTitle
                                        children={<SyncAltOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Secteur"
                                        subTitle="industrie"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2-Objet et objectifs de la convention */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >2</div>
                            <div className='txt-title-section-consulter-conv'>Objet et objectifs de la convention</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>
                            <Grid container spacing={2}>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <BoxIconTitleSubTitle
                                        children={<CreateOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Objet de la convention"
                                        subTitle="Accélération du marché intérieur"
                                    />
                                </Grid>
                            </Grid>
                            <div className='txt-objectifs-step2'>Objectifs</div>
                            <Grid container spacing={1}>

                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <BoxIconTitleSubTitle
                                        children={<TrackChangesOutlinedIcon style={{ fontSize: "18px" }} />}
                                        subTitle="L’objectif des fiches projets est de donner une vision globale des principales opportunités d’accélération."
                                        className='sub-classname-container-box-icon-title-sub-title'
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <BoxIconTitleSubTitle
                                        children={<TrackChangesOutlinedIcon style={{ fontSize: "18px" }} />}
                                        subTitle="L’objectif des fiches projets est de donner une vision globale des principales opportunités d’accélération."
                                        className='sub-classname-container-box-icon-title-sub-title'
                                    />
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3-Consistance */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >3</div>
                            <div className='txt-title-section-consulter-conv'>Consistance</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>

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
                                                    <div className='txt-obj-item' style={{ marginLeft: "15px" }}>{item.nameAxe}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item'>{item.cout}MDH</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item' style={{ margin: "0px 5px" }}>{item.nbrDomaine}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item' style={{ margin: "0px 5px" }}>{item.nbrProgProj}</div>
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
                    </div>
                </div>
            </div>
            {/* 4-Projets impliquant le Ministère (Situation de déblocage) */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >4</div>
                            <div className='txt-title-section-consulter-conv'>Projets impliquant le Ministère (Situation de déblocage)</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>
                            <Grid container spacing={4}>
                                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>
                                    <BoxIconTitleSubTitle
                                        children={<AccountBalanceWalletOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Type d’engagement du MIC"
                                        subTitle="Financier et autre"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>
                                    <BoxIconTitleSubTitle
                                        children={<AccountBalanceWalletOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Dispositif de financement"
                                        subTitle="Budget"
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>
                                    <BoxIconTitleSubTitle
                                        children={<AccountBalanceWalletOutlinedIcon style={{ fontSize: "18px" }} />}
                                        title="Mode de déblocage"
                                        subTitle="Par année"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className='txt-contribution-financiere-mic-projets'>contribution financière du MIC aux projets</div>
                        <div className='card-content'>

                            {CONTRIBUTION_FINANCIERE_MIC_PROJETS.map((item, index) => (
                                <SingleAccordion
                                    key={index.toString()}
                                    nameAxe={item.nameAxe}
                                    data={item.listProjet}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* 5-Domiciliation des contributions */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >5</div>
                            <div className='txt-title-section-consulter-conv'>Domiciliation des contributions</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>

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
                    </div>
                </div>
            </div>
            {/* 6-Mode de Gouvernance */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck6" />
                    <label className="tab-label" htmlFor="chck6">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >6</div>
                            <div className='txt-title-section-consulter-conv'>Mode de Gouvernance</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>

                            {/* HEADER */}
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Type de comité</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Date</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>PV</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                </Grid>
                            </Grid>
                            {/* BODY */}
                            {
                                list_mode_gouvernance_store.map((item, index) => (
                                    <div className='container-axe-item' key={index.toString()}>
                                        <Grid container spacing={1} className="grid-item-axe">
                                            <Grid item xs={5} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='container-icon-target'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                                    <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.nameMode}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item'>{item.date}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-download-pv'>Télécharger le PV</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe' style={{ justifyContent: "end" }}>
                                                    <div className='txt-obj-item'>

                                                        <MainButtonIcon
                                                            onClick={() => onClickShowDetailModeGouvernanace(item)}
                                                            className='btn-icon-clock'
                                                            lchildren={<AccessTimeOutlinedIcon style={{ fontSize: "17px" }} />}

                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* 7-Etat d'avancement des projets */}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck7" />
                    <label className="tab-label" htmlFor="chck7">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >7</div>
                            <div className='txt-title-section-consulter-conv'>Etat d'avancement des projets</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>

                            {/* HEADER */}
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Projets</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Statut du projet</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Date situation</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">

                                </Grid>

                            </Grid>
                            {/* BODY */}
                            {
                                list_etat_avancement_projet_store.map((item, index) => (
                                    <div className='container-axe-item' key={index.toString()}>
                                        <Grid container spacing={1} className="grid-item-axe">
                                            <Grid item xs={5} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='container-icon-target'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                                    <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.nameProject}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='container-status-proj' style={{ backgroundColor: `${item.bgColorStatus}`, color: `${item.txtColorStatus}` }}>{item.status}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item'>{item.dateSituation}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={true} className="grid-item-item-axe">
                                                <div className='container-name-axe' style={{ justifyContent: "end" }}>
                                                    <div className='txt-obj-item'>

                                                        <MainButtonIcon
                                                            onClick={() => onClickShowDetailAvancementProj(item)}
                                                            className='btn-icon-clock'
                                                            lchildren={<AccessTimeOutlinedIcon style={{ fontSize: "17px" }} />}

                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* 8-Remarques et observations*/}
            <div className="tabs">
                <div className="tab">
                    <input className='input-style' type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                        <div className='container-txt-num-section-consulter-conv'>
                            <div className='num-section-consulter-conv' >8</div>
                            <div className='txt-title-section-consulter-conv'>Remarques et observations</div>
                        </div>
                    </label>
                    <div className="tab-content">
                        <div className='card-content'>
                            {/* HEADER */}
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Entité</div>
                                    </div>
                                </Grid>
                                <Grid item xs={2.5} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Date</div>
                                    </div>
                                </Grid>
                                <Grid item xs={3} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-header-table'>Remarques/observations</div>
                                    </div>
                                </Grid>
                                <Grid item xs={1.5} className="grid-item-item-axe">
                                    <div className='container-name-axe' style={{ justifyContent: "end" }}>
                                        <div className='txt-obj-item'>
                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                            {/* BODY */}
                            {
                                list_remarque_store.map((item, index) => (
                                    <div className='container-axe-item' key={index.toString()}>
                                        <Grid container spacing={1} className="grid-item-axe">
                                            <Grid item xs={5} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='container-icon-target'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                                    <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.nameEntite}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={2.5} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <div className='txt-obj-item' >{item.date}</div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} className="grid-item-item-axe">
                                                <div className='container-name-axe'>
                                                    <Tooltip title={item.remarque}>
                                                        <div className='txt-obj-item-ellipsise'>{item.remarque}</div>
                                                    </Tooltip>
                                                </div>
                                            </Grid>
                                            <Grid item xs={1.5} className="grid-item-item-axe">
                                                <div className='container-name-axe' style={{ justifyContent: "end" }}>
                                                    <div className='txt-obj-item'>
                                                        <MainButtonIcon
                                                            onClick={() => onClickShowDetailRemarque(item)}
                                                            className='btn-icon-clock'
                                                            lchildren={<AccessTimeOutlinedIcon style={{ fontSize: "17px" }} />}

                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Grid container spacing={2} style={{ marginBottom: "18px", justifyContent: "flex-end", alignItems: "center" }}>
                <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className='rectangle-file-download' onClick={saveFile}>
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

                </Grid>
                <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className='rectangle-file-download' onClick={saveFile}>
                        <div className='container-left-side-pdf'>
                            <div className='container-icon-paper-pdf'>
                                <ArticleOutlinedIcon style={{ fontSize: "20px" }} />
                            </div>
                            <div className='txt-name-conv-pdf'>
                                Fiche convention cadre.pdf
                            </div>
                        </div>
                        <div><FileDownloadOutlinedIcon style={{ color: "#878A99", fontSize: "24px" }} /></div>
                    </div>

                </Grid>
            </Grid>
            {/*  */}
        </div>
    );
}

export default Section1;