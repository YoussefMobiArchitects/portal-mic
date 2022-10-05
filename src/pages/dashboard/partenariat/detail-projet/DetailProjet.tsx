import React, { useEffect } from 'react';
import "./detailProjet.scss";
import { useLocation } from 'react-router-dom';
import { AppbarGray, BoxIconTitleSubTitle, HeaderStep, MainButtonIcon } from '../../../../components';
import { Grid, Tooltip } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getdetailProjetAction } from "../../../../redux/reducers/detailProjetReducer";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DrawerHistoriqueEngagement from './modalHistoriqueEngagement/DrawerHistoriqueEngagement';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import * as FileSaver from 'file-saver';


function DetailProjet() {

    const dispatch = useAppDispatch();

    const detail_projet_store = useAppSelector((state) => state.detailProjetReducer.detail_projet);

    type LocationState = {
        params: number
    }

    let locate = useLocation();
    const { params } = locate.state as LocationState;
    console.log(params);

    /* #region  Drawer detail remarque */
    const [isOpenDrawerDetailEngagement, setIsOpenDrawerDetailEngagement] = React.useState(false);

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
            setIsOpenDrawerDetailEngagement(open);
        };

    /* #endregion */

    const onClickShowDetailHistoriqueEngagement = (item: any) => {
        console.log(item);
        // toggleDrawer(true);
        setIsOpenDrawerDetailEngagement(true);
    }

    const saveFile = () => {
        FileSaver.saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };

    useEffect(() => {
        dispatch(getdetailProjetAction());
    }, [])

    return (
        <div>
            <DrawerHistoriqueEngagement
                anchor="right"
                open={isOpenDrawerDetailEngagement}
                onClose={() => setIsOpenDrawerDetailEngagement(false)}
                onOpen={() => toggleDrawer(true)}
            />
            <AppbarGray
                data={["Accueil", ">", "Partenariat", ">", "Régions", ">", "Projets", ">", "Details Projet"]} />

            <div className='container-detail-projet-page'>

                {/* HEADER */}
                <div className='header-info-detail-proj'>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <div className='container-left-side-header'>
                                <div className='rectangle-icon'>
                                    <ArticleOutlinedIcon />
                                </div>
                                <div style={{ margin: "0px 10px" }}>
                                    <div className='title-proj'>{detail_projet_store.nameProjet}</div>
                                    <div className='last-maj'>Dernière mise à jour {detail_projet_store.dateLastMaj} - {detail_projet_store.majBy}</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ justifyContent: "flex-end", display: "flex", alignItems: "center" }}>
                            <div className='status-proj' style={{ backgroundColor: `${detail_projet_store.bgColorStatus}`, color: `${detail_projet_store.txtColorStatus}` }}>{detail_projet_store.status}</div>
                        </Grid>
                    </Grid>
                </div>

                {/* 1-Conventions concernées */}
                <HeaderStep
                    label="Conventions concernées"
                    numStep={1}
                />
                {detail_projet_store?.ListeConventionsConcernees &&
                    <div style={{ margin: "15px 0px" }}>
                        <Grid container spacing={1}>
                            {detail_projet_store?.ListeConventionsConcernees.map((item, index) => (
                                <Grid item xs={12} key={index.toString()}>
                                    <div className='container-item-conv-concernee'>
                                        <div className='rectangle-icon-two'>
                                            <WorkOutlineOutlinedIcon sx={{ fontSize: "18px" }} />
                                        </div>
                                        <div className='name-conv-concernee'>
                                            {item.nameConv}
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                }

                {/* 2-Informations générales sur le projet */}
                <HeaderStep
                    label="Informations générales sur le projet"
                    numStep={2}
                />
                <div className='div-container'>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Région"
                                subTitle={detail_projet_store.region}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Province"
                                subTitle={detail_projet_store.province}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <BoxIconTitleSubTitle
                                children={<DateRangeOutlinedIcon sx={{ fontSize: "18px" }} />}
                                title="Date signature DE LA CONVENTION "
                                subTitle={detail_projet_store.dateSignatureConv}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <BoxIconTitleSubTitle
                                children={<SyncAltOutlinedIcon sx={{ fontSize: "18px" }} />}
                                title="Secteur"
                                subTitle={detail_projet_store.secteur}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <BoxIconTitleSubTitle
                                children={<SyncAltOutlinedIcon sx={{ fontSize: "18px" }} />}
                                title="Type de projet"
                                subTitle={detail_projet_store.typeProjet}
                            />
                        </Grid>
                    </Grid>
                </div>
                {/* 3-Contributions financières des Partenaires  */}
                <HeaderStep
                    label="Contributions financières des Partenaires"
                    numStep={3}
                />
                {detail_projet_store?.listContributionsFinancieresPartenaires &&
                    <>
                        <div className='container-header-contribution-financiere'>
                            <Grid container>
                                <Grid item xs={2.4} className='txt-label-headeritem-table'>
                                    Partenaires
                                </Grid>
                                <Grid item xs={2.4} className='txt-label-headeritem-table'>
                                    Année {detail_projet_store.listContributionsFinancieresPartenaires[0].firstYear}
                                </Grid>
                                <Grid item xs={2.4} className='txt-label-headeritem-table'>
                                    Année {detail_projet_store.listContributionsFinancieresPartenaires[0].secondYear}
                                </Grid>
                                <Grid item xs={2.4} className='txt-label-headeritem-table'>
                                    Année {detail_projet_store.listContributionsFinancieresPartenaires[0].ThirdYear}
                                </Grid>
                                <Grid item xs={2.4} className='txt-label-headeritem-table'>
                                    Total contribution prévue
                                </Grid>
                            </Grid>
                        </div>

                        <Grid container spacing={1} style={{ marginBottom: "15px" }}>
                            {detail_projet_store.listContributionsFinancieresPartenaires.map((item, index) => (
                                <Grid item xs={12} key={index.toString()}>
                                    <div className='container-item-contribution-financiere'>
                                        <Grid container>
                                            <Grid item xs={2.4} className='txt-label-item-table'>
                                                {item.namePartenaire}
                                            </Grid>
                                            <Grid item xs={2.4} className='txt-label-item-table'>
                                                {item.contributionFirstYear}
                                            </Grid>
                                            <Grid item xs={2.4} className='txt-label-item-table'>
                                                {item.contributionSecondYear}
                                            </Grid>
                                            <Grid item xs={2.4} className='txt-label-item-table'>
                                                {item.contributionThirdYear}
                                            </Grid>
                                            <Grid item xs={2.4} className='txt-label-item-table' style={{ color: "#599F3E" }}>
                                                {item.contributionFirstYear + item.contributionSecondYear + item.contributionThirdYear}
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                }

                {/* 4-Engagements financiers du Ministère  */}
                <HeaderStep
                    label="Engagements financiers du Ministère"
                    numStep={4}
                />
                <div className='top-header-engagement-financiere'>
                    <BoxIconTitleSubTitle
                        children={<AccountBalanceWalletOutlinedIcon sx={{ fontSize: "18px" }} />}
                        title="Source de financement"
                        subTitle={detail_projet_store.sourceFinancement}
                    />
                </div>
                {detail_projet_store?.listEngagementFinanciere &&
                    <>
                        <div className='container-header-contribution-financiere'>
                            <Grid container>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Année
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Prévu (MDH)
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Situation de déblocage
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Débloqué (MDH)
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Date d’effet
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table'>
                                    Commentaire
                                </Grid>
                            </Grid>
                        </div>

                        <Grid container spacing={1} style={{ marginBottom: "15px" }}>
                            {detail_projet_store.listEngagementFinanciere.map((item, index) => (
                                <Grid item xs={12} key={index.toString()}>
                                    <div className='container-item-contribution-financiere'>
                                        <Grid container>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                {item.annee}
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                {item.valFinancementPrevu === null ? "-" : item.valFinancementPrevu}
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                <div className='div-status-deblocage' style={{ backgroundColor: `${item.bgColorStatusDeblocage}`, color: `${item.txtColorStatusDeblocage}` }}>{item.statusDeblocage}</div>
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                {item.valDebloque === null ? "-" : item.valDebloque}
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                {item.dateEffet === null ? "-" : item.dateEffet}
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table'>
                                                <Tooltip title={item.commentaire === null ? "-" : item.commentaire}>
                                                    <div className='div-comment'>{item.commentaire === null ? "-" : item.commentaire}</div>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                }
                {/* 5-Autres engagements du Ministère */}
                <HeaderStep
                    label="Autres engagements du Ministère"
                    numStep={5}
                />
                {detail_projet_store?.listAutresEngagements &&
                    <>
                        <div className='container-header-contribution-financiere'>
                            <Grid container>
                                <Grid item xs={4} className='txt-label-headeritem-table'>
                                    Engagements
                                </Grid>
                                <Grid item xs={3} className='txt-label-headeritem-table'>
                                    Actions réalisées
                                </Grid>
                                <Grid item xs={3} className='txt-label-headeritem-table'>
                                    Date
                                </Grid>
                                <Grid item xs={2} className='txt-label-headeritem-table' style={{ justifyContent: "end", display: "flex" }}>
                                    Historique
                                </Grid>
                            </Grid>
                        </div>

                        <Grid container spacing={1} style={{ marginBottom: "15px" }}>
                            {detail_projet_store.listAutresEngagements.map((item, index) => (
                                <Grid item xs={12} key={index.toString()}>
                                    <div className='container-item-contribution-financiere'>
                                        <Grid container>
                                            <Grid item xs={4} className='txt-label-item-table'>
                                                {item.lblEngagement}
                                            </Grid>
                                            <Grid item xs={3} className='txt-label-item-table'>
                                                {item.actionsRealisee}
                                            </Grid>

                                            <Grid item xs={3} className='txt-label-item-table'>
                                                {item.date}
                                            </Grid>
                                            <Grid item xs={2} className='txt-label-item-table' style={{ justifyContent: "end", display: "flex" }}>
                                                <MainButtonIcon
                                                    onClick={() => onClickShowDetailHistoriqueEngagement(item)}
                                                    className='btn-icon-clock'
                                                    lchildren={<AccessTimeOutlinedIcon style={{ fontSize: "17px" }} />}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                }
                {/* 6-Situation du projet */}
                <HeaderStep
                    label="Situation du projet"
                    numStep={6}
                />
                <div>
                    <Grid container>
                        <Grid item xs={4} className='txt-label-headeritem-table' style={{ marginTop: "15px", textTransform: "uppercase" }}>
                            informations sur les lots
                        </Grid>
                    </Grid>
                </div>

                <div className='div-container'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Nombre de lots"
                                subTitle={detail_projet_store.nbrLots ? detail_projet_store.nbrLots.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Nombre de lots commercialisés"
                                subTitle={detail_projet_store.nbrLotsCommercialises ? detail_projet_store.nbrLotsCommercialises.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Taux de commercialisation des lots"
                                subTitle={detail_projet_store.tauxCommercialisationLots ? detail_projet_store.tauxCommercialisationLots : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Nombre de lots valorisés"
                                subTitle={detail_projet_store.nbrLotsValorises ? detail_projet_store.nbrLotsValorises.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Taux de valorisation des lots "
                                subTitle={detail_projet_store.tauxValorisationLots ? detail_projet_store.tauxValorisationLots : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Prix de sortie conventionné "
                                subTitle={detail_projet_store.prixSortieConventionne ? detail_projet_store.prixSortieConventionne.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Prix max (DH/m2) "
                                subTitle={detail_projet_store.prixMax ? detail_projet_store.prixMax.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Prix min (DH/m2) "
                                subTitle={detail_projet_store.prixMin ? detail_projet_store.prixMin.toString() : "-"}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className='txt-label-headeritem-table' style={{ marginTop: "15px", textTransform: "uppercase" }}>
                    Informations sur les superficies
                </div>
                <div className='div-container'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Superficie brute"
                                subTitle={detail_projet_store.valSuperficieBrute ? detail_projet_store.valSuperficieBrute.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Superficie cessible"
                                subTitle={detail_projet_store.valSuperficieCessible ? detail_projet_store.valSuperficieCessible.toString() : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Superficie cessible valorisée"
                                subTitle={detail_projet_store.valSuperficieCessibleValorisee ? detail_projet_store.valSuperficieCessibleValorisee.toString() : "-"}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className='txt-label-headeritem-table' style={{ marginTop: "15px", textTransform: "uppercase" }}>
                    Aménageur et gestionnaire
                </div>

                <div className='div-container'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="Aménageur"
                                subTitle={detail_projet_store.valSuperficieBrute ? detail_projet_store.amenageur : "-"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <BoxIconTitleSubTitle
                                children={<OutlinedFlagIcon sx={{ fontSize: "18px" }} />}
                                title="gestionnaire"
                                subTitle={detail_projet_store.gestionnaire ? detail_projet_store.gestionnaire.toString() : "-"}
                            />
                        </Grid>
                    </Grid>
                </div>

                {/* 7-Mode de Gouvernance */}
                <HeaderStep
                    label="Mode de Gouvernance"
                    numStep={7}
                />
                <div className='txt-label-headeritem-table' style={{ marginTop: "15px", textTransform: "uppercase" }}>
                    Comités
                </div>
                {detail_projet_store.listComite &&
                    <>
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

                        </Grid>
                        {/* BODY */}
                        {
                            detail_projet_store.listComite.map((item, index) => (
                                <div className='container-axe-item' key={index.toString()} style={{ height: "60px" }}>
                                    <Grid container spacing={1} className="grid-item-axe">
                                        <Grid item xs={5} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='container-icon-target'><OutlinedFlagIcon style={{ fontSize: "18px" }} /></div>
                                                <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.typeComite}</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={true} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='txt-obj-item'>{item.date}</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={true} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='txt-download-pv'>Consulter le PV</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))
                        }
                    </>
                }

                <div className='txt-label-headeritem-table' style={{ marginTop: "15px", textTransform: "uppercase" }}>
                    Autres visites
                </div>
                {detail_projet_store.listAutreVisite &&
                    <div style={{ marginBottom: "15px" }}>
                        {/* HEADER */}
                        <Grid container spacing={1} className="grid-item-axe">
                            <Grid item xs={5} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-header-table'>Intitulé</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-header-table'>Date</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-header-table'>Descriptif</div>
                                </div>
                            </Grid>

                        </Grid>
                        {/* BODY */}
                        {
                            detail_projet_store.listAutreVisite.map((item, index) => (
                                <div className='container-axe-item' key={index.toString()} style={{ height: "60px" }}>
                                    <Grid container spacing={1} className="grid-item-axe">
                                        <Grid item xs={5} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='container-icon-target'><OutlinedFlagIcon style={{ fontSize: "18px" }} /></div>
                                                <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.intitule}</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={true} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='txt-obj-item'>{item.date}</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={true} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='txt-obj-item'>{item.descriptif}</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))
                        }
                    </div>
                }

                {/* 8-Autres observations */}
                <HeaderStep
                    label="Autres observations"
                    numStep={8}
                />
                {detail_projet_store.listAutresObservations &&
                    <div>
                        {/* HEADER */}
                        <Grid container spacing={1} className="grid-item-axe">
                            <Grid item xs={9} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-header-table'>Autres observations</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe' >
                                    <div className='txt-header-table'>Date</div>
                                </div>
                            </Grid>
                        </Grid>
                        {/* BODY */}
                        {
                            detail_projet_store.listAutresObservations.map((item, index) => (
                                <div className='container-axe-item' key={index.toString()} style={{ height: "60px" }}>
                                    <Grid container spacing={1} className="grid-item-axe">
                                        <Grid item xs={9} className="grid-item-item-axe">
                                            <div className='container-name-axe'>
                                                <div className='container-icon-target'><OutlinedFlagIcon style={{ fontSize: "18px" }} /></div>
                                                <div className='txt-obj-item' style={{ margin: "0px 15px" }}>{item.observation}</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={true} className="grid-item-item-axe">
                                            <div className='container-name-axe' >
                                                <div className='txt-obj-item'>{item.date}</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))
                        }
                    </div>
                }
                {/*  */}

                {/* FOOTER */}
                <Grid container spacing={2} style={{ marginBottom: "18px",marginTop:"18px", justifyContent: "flex-end", alignItems: "center" }}>
                    <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className='rectangle-file-download' onClick={saveFile}>
                            <div className='container-left-side-pdf'>
                                <div className='container-icon-paper-pdf'>
                                    <ArticleOutlinedIcon style={{ fontSize: "20px" }} />
                                </div>
                                <div className='txt-name-conv-pdf'>
                                Fiche projet.pdf
                                </div>
                            </div>
                            <div><FileDownloadOutlinedIcon style={{ color: "#878A99", fontSize: "24px" }} /></div>
                        </div>

                    </Grid>
                </Grid>
                {/*  */}
            </div>

        </div>
    );
}

export default DetailProjet;