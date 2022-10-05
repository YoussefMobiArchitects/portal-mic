import React, { useEffect } from 'react';
import "./styles.scss"
import {
    AppbarGray,
    AppbarGray2,
    MapSvg,
    MessageAlert
} from "../../../components";
import { LIST_REGION } from "../../../constants/DataConstants";
import { NavigationConstants } from "../../../constants";
import { navAppBarGray } from "../../../constants/NavigationConstants";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import { Alert, Box, Grid, TextField } from '@mui/material';
import { Region, RegionI } from '../../../models/region';
import { useNavigate } from 'react-router-dom';
import useNavigationApp from "../../../hooks/useNavigationApp";
import useAuthentication from "../../../hooks/useAuthentication";
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getListRegion } from '../../../servicesApi/listeRegionAPI';
// import { getListRegionService } from '../../../services/regionAPI';
import { groupBy2 } from "../../../utils/groupBy2";

function Partenariat() {

    const dispatch = useAppDispatch();
    const liste_region_store = useAppSelector((state) => state.listRegionReducer.data);
    const message_error_store = useAppSelector((state) => state.listRegionReducer.message);
    console.log("message_error_store : ", message_error_store);

    // const [selectedRegion, setSelectedRegion] = React.useState({ id: '6', xmlns: 'http://www.w3.org/2000/svg', name: "Dakhla-Oued Eddahab", d: 'm13198 5351-35 112c26 48-4 309-74 302-53-5-62 71-6… 19-10 29-20 45-15 26-14 47-21 74-6 23 3 52-2 73z', activeColor: '#DBA237', inactiveColor: '#B7BBC5' });
    const [selectedRegion, setSelectedRegion] = React.useState(liste_region_store[0]);

    let navigate = useNavigationApp().navigate;
    let direction = useAuthentication().direction;


    const navigateToListConvention = (item?: RegionI) => {
        navigate(NavigationConstants.LISTE_CONVENTION_PAGE, {
            state: item,
        })
    }


    const onClickReg = (item: RegionI) => {
        console.log("pressed", item)
        setSelectedRegion(item)
        navigateToListConvention(item)
    }


    const onClickRegSvg = (item: RegionI) => {
        console.log("pressed", item)
        setSelectedRegion(item)
        navigateToListConvention(item)
        return item
    }


    const onMouseEnterHandler = (item: RegionI) => {
        console.log("MouseEnter", item)
        setSelectedRegion(item)
        return item
    }

    const onMouseLeaveHandler = (item: RegionI) => {
        console.log("MouseLeave", item)
        setSelectedRegion(
            { id: '-', d: '-', axm_code: '-', axm_name: '-', axm_namear: '-' }

        )
        return item
    }

    const getListRegionHandler = async () => {
        let action;
        action = getListRegion();
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
        getListRegionHandler();
    }, [])

    return (
        <div>
            <AppbarGray
                data={["Accueil", ">", "Partenariat"]} />

            <div className='container-partenariat'>
                <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='txt-partenariats-national-style'>
                            Partenariats à caractère national.
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <div className='divformInput'>
                            <TextField
                                id="outlined-basic"
                                label="Rechercher"
                                variant="outlined"
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className='containerStylee'>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box
                            className='leftSidePartenariats'
                        >
                            <div
                                onClick={() => console.log("pressed")}
                                className="containerItemReg"
                            >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        className='containerPin'
                                    >
                                        <AddLocationAltOutlinedIcon style={{ color: "#171F2E" }} />
                                    </div>
                                    <div className='nameRegion'>
                                        National
                                    </div>
                                </div>

                                <div>
                                    {direction == "ltr" ?
                                        <ArrowForwardIosOutlinedIcon style={{ fontSize: 15, color: "#B1B6C1" }} />
                                        :
                                        <ArrowBackIosNewOutlinedIcon style={{ fontSize: 15, color: "#B1B6C1" }} />
                                    }
                                </div>
                            </div>

                            <div className='txt-partenariats-regional-style' style={{ marginTop: 25 }}>
                                Partenariats à caractère régional.
                            </div>

                            <div>
                                {liste_region_store.map((item, i) => (
                                    <div key={i}
                                        onClick={() => onClickReg(item)}
                                        className="containerItemReg"
                                    >
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div
                                                className='containerPin'
                                            >
                                                <LocationOnOutlinedIcon style={{ color: "#171F2E" }} />
                                            </div>
                                            <div className='nameRegion'>
                                                {item.axm_name}
                                            </div>
                                        </div>

                                        <div>
                                            {direction == "ltr" ?
                                                <ArrowForwardIosOutlinedIcon style={{ fontSize: 15, color: "#B1B6C1" }} />
                                                :
                                                <ArrowBackIosNewOutlinedIcon style={{ fontSize: 15, color: "#B1B6C1" }} />
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Box
                            className="rightSidePartenariats"
                            // flex={3}
                            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } }}
                        >

                            <div className="container-map">
                                <MapSvg
                                    onClickReg={onClickRegSvg}
                                    selectedRegion={selectedRegion}
                                    onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}
                                />
                            </div>

                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Partenariat;