import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { AppbarGray, SelectCustomRtl } from '../../../components';
import "./styles.scss";
import { LIST_AXE_DECONCENTRATION, LIST_REGION, LIST_TYPE_ENGAGEMENT } from "../../../constants/DataConstants";
import { AxeDeconcentrationI } from '../../../models/axeDeconcentration';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useNavigationApp from '../../../hooks/useNavigationApp';
import { getListRegion } from '../../../servicesApi/listeRegionAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { RegionI } from '../../../models/region';



const ItemAxeDeconcentration = ({
    name,
    desc,
    bgcolor1,
    bgcolor2,
    onClick
}: AxeDeconcentrationI) => {
    return (
        <div id="id-container-item-axe-deconcentration" className='container-item-axe-deconcentration' onClick={onClick}>
            <div
                className='name-axe-deconcentration'
                style={{ background: `linear-gradient(180deg, ${bgcolor1} 0%, ${bgcolor2} 100%)` }}
            >
                {name}
            </div>
            <div>
                <Typography
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                    }}
                    variant="body1"
                    className='txt-desc-axe-deconcentration'
                >
                    {desc}
                </Typography>
            </div>

        </div>
    )
}

function Deconcentration() {

    const dispatch = useAppDispatch();
    const liste_region_store = useAppSelector((state) => state.listRegionReducer.data);
    let navigate = useNavigationApp().navigate;

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    const onClickItemAxe = (item: AxeDeconcentrationI) => {
        console.log(item);
        const nav: string = item.pageToNavigate as string;
        navigate(nav)
    }
    /* #region  valueInputSearch */
    const [valueInputSearch, setValueInputSearch] = React.useState<string>("")
    const handleChangeInputValueInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInputSearch(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Region  */
    const [selectedRegion, setSelectedRegion] = React.useState({ id: "", name: "", nameAr: "" });
    const [region, setRegion] = React.useState("");
    const handleChangeRegion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    const [openMenuRegion, setOpenMenuRegion] = React.useState(false);
    const handleCloseMenuRegion = () => {
        setOpenMenuRegion(false);
    };
    const handleOpenMenuRegion = () => {
        setOpenMenuRegion(true);
    };
    const selectRegionHandler = (item: any) => {
        setSelectedRegion(item)
    }
    /* #endregion */

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
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes"]} />
                    <div className='container-deconcentration' dir='rtl' >
                        {/* Header */}
                        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='name-region'>
                                    الدارالبيضاء-سطات
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ justifyContent: "end" }}>

                                <Grid container spacing={2} style={{ justifyContent: "end" }}>
                                    <Grid item >
                                        {/* Region */}
                                        <SelectCustomRtl
                                            value={region}
                                            open={openMenuRegion}
                                            data={liste_region_store}
                                            handleClose={handleCloseMenuRegion}
                                            handleOpen={handleOpenMenuRegion}
                                            onChange={handleChangeRegion}
                                            selectItemHandler={selectRegionHandler}
                                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", minWidth: "180px" }}
                                            titleSelect="الجهة"
                                            isShowTitleSelect={false}
                                            txtPlaceholder="الجهة"
                                        >
                                            {liste_region_store.map((reg: RegionI) => (
                                                <MenuItem className='item-region' key={reg.id} value={reg.axm_namear} onClick={() => selectRegionHandler(reg)}>
                                                    <div style={{ width: "100%", textAlign: "end", fontFamily: "ArbFONTS-Droid-Arabic-Kufi", fontSize: "14px" }} >
                                                        {reg.axm_namear}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </SelectCustomRtl>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            placeholder="البحت"
                                            value={valueInputSearch}
                                            onChange={handleChangeInputValueInputSearch}
                                            // helperText="Please select your currency"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>

                        {/* List axes */}
                        <Grid container spacing={2}>
                            {LIST_AXE_DECONCENTRATION.map((item, index) => (
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index.toString()}>
                                    <ItemAxeDeconcentration
                                        name={item.name}
                                        desc={item.desc}
                                        bgcolor1={item.bgcolor1}
                                        bgcolor2={item.bgcolor2}
                                        onClick={() => onClickItemAxe(item)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Deconcentration;