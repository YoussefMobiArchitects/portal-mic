import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import "./listProjetByStatus.scss";
import { AppbarGray, ItemProjet, MainButton, MainButtonIcon } from '../../../../components';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { ItemProjetI } from '../../../../models/itemListProjetFiltred';
import { getListeProjetParStatusAction } from "../../../../redux/reducers/listeProjetParStatusReducer";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import useNavigationApp from "../../../../hooks/useNavigationApp";
import { NavigationConstants } from '../../../../constants';



function ListProjetByStatus() {

    const dispatch = useAppDispatch();
    let navigate = useNavigationApp().navigate;

    const list_projet_store = useAppSelector((state) => state.listeProjetParStatusReducer.liste_projet);

    type LocationState = {
        params: {
            id: number;
            idStatus: number;
            nameStatus: string;
            bgColorStatus: string;
            txtColorStatus: string;
        }
    }

    let locate = useLocation();
    const { params } = locate.state as LocationState;


    function renderFilterSection() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='txt-name-region'>Casablanca-Settat.</div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div className='container-filters'>
                        <Grid container spacing={1} style={{ justifyContent: "end" }}>
                            <Grid item >
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
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        )
    }

    const onClickHandler = (idItem: number) => {
        console.log(idItem);
        navigate(NavigationConstants.DETAIL_PROJET_PAGE, {
            state: {
                params: idItem,
            }
        })
    }

    useEffect(() => {
        dispatch(getListeProjetParStatusAction());
    }, [])

    return (
        <div>
            <AppbarGray
                data={["Accueil", ">", "Partenariat", ">", "Régions", ">", "Projets"]} />

            <div className='container-liste-projet-by-status'>

                {/* FILTER sECTION */}
                {renderFilterSection()}

                {/* BAR STATUS */}
                <div className='container-bar' style={{ backgroundColor: `${params.bgColorStatus}` }}>
                    <div className='txt-bar' style={{ color: `${params.txtColorStatus}` }}>{params.nameStatus}</div>
                </div>
                {/* LIST */}
                <div style={{ width: "100%" }}>
                    <Grid container spacing={3}>
                        {list_projet_store.map((item: ItemProjetI, index: number) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index.toString()}>
                                    <ItemProjet
                                        id={item.id}
                                        idStatus={item.idStatus}
                                        status={item.status as string}
                                        txtColorStatus={item.txtColorStatus as string}
                                        bgColorStatus={item.bgColorStatus as string}
                                        titleProjet={item.titleProjet}
                                        coutGlobal={item.coutGlobal}
                                        contribution={item.contribution}
                                        situationDeblocage={item.situationDeblocage}
                                        dateDerniereSituation={item.dateDerniereSituation}
                                        onClick={() => onClickHandler(item.id)}
                                    />
                                </Grid>
                            )
                        })}

                    </Grid>
                </div>


            </div>

        </div>
    );
}

export default ListProjetByStatus;