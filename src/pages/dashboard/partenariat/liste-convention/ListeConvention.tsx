import React, { useEffect, useState } from 'react';
import {
    AppbarGray,
    ConventionItem,
    ModalAddConvention,
    MainButton,
    MainButtonIcon,
    ItemProjet
} from '../../../../components';
import "./styles.scss";
import Button from '@mui/material/Button';
import { Grid, IconButton, TextField } from '@mui/material';
import { LIST_CONVENTION } from '../../../../constants/DataConstants';
import { Convention } from '../../../../models/convention';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getListeConventionAction } from "../../../../redux/reducers/listeConventionReducer";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationConstants } from '../../../../constants';
import { ItemProjetConsulterConvI } from '../../../../models/itemProjetConsulterConv';
import { ItemListProjetIFiltredI, ItemProjetI } from '../../../../models/itemListProjetFiltred';
import { getListeProjFiltredAction } from "../../../../redux/reducers/listeProjetFiltredReducer";
import { RegionI } from '../../../../models/region';
import { getListSecteurPartenariat } from '../../../../servicesApi/listSecteurPartenariatAPI';
import { getListProvinceByRegionId } from '../../../../servicesApi/listProvinceByRegionIdAPI';
import { getListConvByStatus } from '../../../../servicesApi/listConvByStatusAPI';


function ListeConvention() {

    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    var locate = useLocation();
    const params_region = locate.state as RegionI;


    const liste_convention1_store = useAppSelector((state) => state.listeConventionReducer.liste_convention1);
    const liste_convention2_store = useAppSelector((state) => state.listeConventionReducer.liste_convention2);
    const liste_convention3_store = useAppSelector((state) => state.listeConventionReducer.liste_convention3);
    const liste_convention4_store = useAppSelector((state) => state.listeConventionReducer.liste_convention4);
    const liste_convention5_store = useAppSelector((state) => state.listeConventionReducer.liste_convention5);

    const list_projet_filtred_store = useAppSelector((state) => state.listeProjetFiltredReducer.liste_projet);

    const [isListConvSectionSelected, setIsListConvSectionSelected] = useState(true)

    const [openModalAddConv, setOpenModalAddConv] = React.useState(false);
    const handleOpenModalAddConv = () => setOpenModalAddConv(true);
    const handleCloseModalAddConv = () => setOpenModalAddConv(false);
    const handleAddConvention = () => {
        console.log("pressed");
    }

    const onClickRenseignerHandler = (Conv: Convention) => {
        console.log("onClickRenseignerHandler : ", Conv);
        if (Conv.idTypeConvention === 1) {
            navigate(NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_CADRE_PAGE);
        }
        if (Conv.idTypeConvention === 2) {
            navigate(NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_SPECIFIQUE_PAGE);
        }
        if (Conv.idTypeConvention === 3) {
            navigate(NavigationConstants.RENSEIGNER_CONVENTION_REGIONALE_AVENANT_PAGE);
        }
    }
    const onClickSupprimerHandler = (idConv: number) => {
        console.log("onClickSupprimerHandler : ", idConv);
    }
    const onClickConsulterHandler = (idConv: number) => {
        console.log("onClickConsulterHandler : ", idConv);
        navigate(NavigationConstants.CONSULTER_CONVENTION_PAGE);
    }

    const onClickConvSection = () => {
        setIsListConvSectionSelected(true);
    }
    const onClickProjSection = () => {
        setIsListConvSectionSelected(false);
    }

    const onClickSeeAllProjectByStatus = (itemListProj: any) => {
        navigate(NavigationConstants.LIST_PROJET_BY_STATUS_PAGE, {
            state: {
                params: itemListProj,
            }
        })
    }

    const getListSecteurPartenariatHandler = async () => {
        let action;
        action = getListSecteurPartenariat();
        try {
            await dispatch(action).then(() => {
                console.log("success")
            });
        } catch (err) {
            console.log(err)
            console.log("====>error")
        }
    };

    const getListProvinceByRegionIdHandler = async () => {
        let action;
        action = getListProvinceByRegionId(params_region.id);
        try {
            await dispatch(action).then(() => {
                console.log("success")
            });
        } catch (err) {
            console.log(err)
            console.log("====>error")
        }
    };

    const getListConventionByStatusHandler = async () => {
        let action;
        action = getListConvByStatus();
        try {
            await dispatch(action).then(() => {
                console.log("success")
            });
        } catch (err) {
            console.log(err)
            console.log("====>error")
        }
    };



    useEffect(() => {
        dispatch(getListeConventionAction());
        dispatch(getListeProjFiltredAction());
        getListSecteurPartenariatHandler();
        getListProvinceByRegionIdHandler();
        getListConventionByStatusHandler();
    }, [])

    return (
        <div>
            <AppbarGray
                data={["Accueil", ">", "Partenariat", ">", "Régions",]} />

            <ModalAddConvention
                isOpen={openModalAddConv}
                onClickClose={handleCloseModalAddConv}
                onClickAdd={handleAddConvention}
            />

            <div className='container-liste-convention'>
                {/* FILTER SECTION */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className='txt-name-region'>Casablanca-Settat.</div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className='container-filters'>
                            <Grid container spacing={1} style={{ justifyContent: "end" }}>
                                <Grid item >
                                    <div className='btns-sections-conv-proj'>
                                        <MainButton onClick={onClickConvSection} className={isListConvSectionSelected ? 'btn-conv-proj-section-active' : 'btn-conv-proj-section-inactive'} label="Conventions" />
                                        <MainButton onClick={onClickProjSection} className={!isListConvSectionSelected ? 'btn-conv-proj-section-active' : 'btn-conv-proj-section-inactive'} label="Projets" />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <MainButtonIcon
                                        className='btn-filter-conv'
                                        onClick={() => console.log("pressed")}
                                        lchildren={<FilterAltOutlinedIcon />}
                                    />
                                </Grid>
                                <Grid item >
                                    <div className='formInput'>
                                        <SearchOutlinedIcon style={{ color: "#878A99" }} />
                                        <input className='input-rechercher-conv' placeholder='Rechercher une convention' />
                                    </div>
                                </Grid>
                                <Grid item >
                                    <MainButton onClick={handleOpenModalAddConv} className='btn-add-conv' label='Ajouter une convention' />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>

                {isListConvSectionSelected &&
                    <>
                        {/* NOUVELLE CONVENTION */}
                        <div className='container-bar' style={{ backgroundColor: "#F3F6F9" }}>
                            <div className='txt-bar' style={{ color: "#0093FF" }}>Nouvelle convention</div>
                            <Button className='btn-voir-tous'>voir tous</Button>
                        </div>
                        <Grid container spacing={3}>
                            {liste_convention1_store.map((item: Convention, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index} >
                                        <ConventionItem
                                            dateUpdate={item.dateUpdate}
                                            isDimensionRoyale={item.isDimensionRoyale}
                                            idTypeConvention={item.idTypeConvention}
                                            typeConvention={item.typeConvention}
                                            txtColorTypeConvention={item.txtColorTypeConvention}
                                            backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                            idStatusConvention={item.idStatusConvention}
                                            statusConvention={item.statusConvention}
                                            txtColorStatusConvention={item.txtColorStatusConvention}
                                            backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                            description={item.description}
                                            dateSignature={item.dateSignature}
                                            onClickRenseigner={() => onClickRenseignerHandler(item)}
                                            onClickSupprimer={() => onClickSupprimerHandler(item.id)}
                                            onClickConsulter={() => onClickConsulterHandler(item.id)}
                                            containerClassName="container-item-style"
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                        {/* EN COURS D'EXÉCUTION */}
                        <div className='container-bar' style={{ backgroundColor: "#FEF4ED" }}>
                            <div className='txt-bar' style={{ color: "#FFAD00" }}>En cours d’exécution</div>

                            <Button className='btn-voir-tous'>voir tous</Button>
                        </div>
                        <Grid container spacing={3}>
                            {liste_convention2_store.map((item: Convention, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                                        <ConventionItem
                                            dateUpdate={item.dateUpdate}
                                            isDimensionRoyale={item.isDimensionRoyale}
                                            idTypeConvention={item.idTypeConvention}
                                            typeConvention={item.typeConvention}
                                            txtColorTypeConvention={item.txtColorTypeConvention}
                                            backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                            idStatusConvention={item.idStatusConvention}
                                            statusConvention={item.statusConvention}
                                            txtColorStatusConvention={item.txtColorStatusConvention}
                                            backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                            description={item.description}
                                            dateSignature={item.dateSignature}
                                            onClickRenseigner={() => onClickRenseignerHandler(item)}
                                            onClickSupprimer={() => onClickSupprimerHandler(item.id)}
                                            onClickConsulter={() => onClickConsulterHandler(item.id)}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                        {/* EN RETARD D'EXÉCUTION */}
                        <div className='container-bar' style={{ backgroundColor: "#FBE4E2" }}>
                            <div className='txt-bar' style={{ color: "#C92828" }}>En retard d’exécution</div>

                            <Button className='btn-voir-tous'>voir tous</Button>
                        </div>
                        <Grid container spacing={3}>
                            {liste_convention3_store.map((item: Convention, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                                        <ConventionItem
                                            dateUpdate={item.dateUpdate}
                                            isDimensionRoyale={item.isDimensionRoyale}
                                            idTypeConvention={item.idTypeConvention}
                                            typeConvention={item.typeConvention}
                                            txtColorTypeConvention={item.txtColorTypeConvention}
                                            backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                            idStatusConvention={item.idStatusConvention}
                                            statusConvention={item.statusConvention}
                                            txtColorStatusConvention={item.txtColorStatusConvention}
                                            backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                            description={item.description}
                                            dateSignature={item.dateSignature}
                                            onClickRenseigner={() => onClickRenseignerHandler(item)}
                                            onClickSupprimer={() => onClickSupprimerHandler(item.id)}
                                            onClickConsulter={() => onClickConsulterHandler(item.id)}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                        {/* BESOIN AVENANT */}
                        <div className='container-bar' style={{ backgroundColor: "#DFDBFF" }}>
                            <div className='txt-bar' style={{ color: "#783FB7" }}>Besoin avenant</div>

                            <Button className='btn-voir-tous'>voir tous</Button>
                        </div>
                        <Grid container spacing={3}>
                            {liste_convention4_store.map((item: Convention, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                                        <ConventionItem
                                            dateUpdate={item.dateUpdate}
                                            isDimensionRoyale={item.isDimensionRoyale}
                                            idTypeConvention={item.idTypeConvention}
                                            typeConvention={item.typeConvention}
                                            txtColorTypeConvention={item.txtColorTypeConvention}
                                            backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                            idStatusConvention={item.idStatusConvention}
                                            statusConvention={item.statusConvention}
                                            txtColorStatusConvention={item.txtColorStatusConvention}
                                            backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                            description={item.description}
                                            dateSignature={item.dateSignature}
                                            onClickRenseigner={() => onClickRenseignerHandler(item)}
                                            onClickSupprimer={() => onClickSupprimerHandler(item.id)}
                                            onClickConsulter={() => onClickConsulterHandler(item.id)}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>

                        {/* CLOTURÉE */}
                        <div className='container-bar' style={{ backgroundColor: "#DBFFE5" }}>
                            <div className='txt-bar' style={{ color: "#28C953" }}>Clôturée</div>

                            <Button className='btn-voir-tous'>voir tous</Button>
                        </div>
                        <Grid container spacing={3}>
                            {liste_convention5_store.map((item: Convention, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                                        <ConventionItem
                                            dateUpdate={item.dateUpdate}
                                            isDimensionRoyale={item.isDimensionRoyale}
                                            idTypeConvention={item.idTypeConvention}
                                            typeConvention={item.typeConvention}
                                            txtColorTypeConvention={item.txtColorTypeConvention}
                                            backgroundColorTypeConvention={item.backgroundColorTypeConvention}
                                            idStatusConvention={item.idStatusConvention}
                                            statusConvention={item.statusConvention}
                                            txtColorStatusConvention={item.txtColorStatusConvention}
                                            backgroundColorStatusConvention={item.backgroundColorStatusConvention}
                                            description={item.description}
                                            dateSignature={item.dateSignature}
                                            onClickRenseigner={() => onClickRenseignerHandler(item)}
                                            onClickSupprimer={() => onClickSupprimerHandler(item.id)}
                                            onClickConsulter={() => onClickConsulterHandler(item.id)}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </>
                }

                {/* LIST PROJET FILTRED */}
                {!isListConvSectionSelected &&
                    <>
                        {list_projet_filtred_store.map((item: ItemListProjetIFiltredI, index: number) => (
                            <React.Fragment key={index.toString()}>
                                <div className='container-bar' style={{ backgroundColor: `${item.bgColorStatus}` }}>
                                    <div className='txt-bar' style={{ color: `${item.txtColorStatus}` }}>{item.nameStatus}</div>
                                    <Button className='btn-voir-tous' onClick={() => onClickSeeAllProjectByStatus({ id: item.id, idStatus: item.idStatus, nameStatus: item.nameStatus, bgColorStatus: item.bgColorStatus, txtColorStatus: item.txtColorStatus })}>voir tous</Button>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <Grid container spacing={3}>
                                        {item.listProjet.map((proj: ItemProjetI, index: number) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index.toString()}>
                                                    <ItemProjet
                                                        id={proj.id}
                                                        idStatus={proj.idStatus}
                                                        status={proj.status}
                                                        txtColorStatus={proj.txtColorStatus}
                                                        bgColorStatus={proj.bgColorStatus}
                                                        titleProjet={proj.titleProjet}
                                                        coutGlobal={proj.coutGlobal}
                                                        contribution={proj.contribution}
                                                        situationDeblocage={proj.situationDeblocage}
                                                        dateDerniereSituation={proj.dateDerniereSituation}
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </div>
                            </React.Fragment>
                        ))}
                    </>

                }
                {/*  */}



            </div>

        </div>
    );
}

export default ListeConvention;