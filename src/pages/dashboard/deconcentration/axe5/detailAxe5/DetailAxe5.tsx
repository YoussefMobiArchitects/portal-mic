import React, { useEffect } from 'react';
import { AppbarGray, CardInfoAxe, MainButton, MainButtonIcon } from '../../../../../components';
import "./detailAxe5.scss";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { getListeOperationAction } from "../../../../../redux/reducers/listOperationReducer";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { LIST_UNITE_MESURE_BY_BUT } from "../../../../../constants/DataConstants";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModalAddUniteMesure from './modalAddUniteMesure/ModalAddUniteMesure';

export interface PropsItemUniteMesure {
    id: number;
    uniteMesure: string;
    etatYearOne: string;
    etatYearTwo: string;
    etatYearThree: string;
    handleEditNavMenuUniteMesure: React.MouseEventHandler;
    handleDeleteNavMenuUniteMesure: React.MouseEventHandler;

}

export const ItemUniteMesure = ({
    id,
    uniteMesure,
    etatYearOne,
    etatYearTwo,
    etatYearThree,
    handleEditNavMenuUniteMesure,
    handleDeleteNavMenuUniteMesure
}: PropsItemUniteMesure) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        console.log("the event : ", event);
        setAnchorElNav(event.currentTarget);
        // setAnchorElNav(divRef.current);
    };
    const open = Boolean(anchorElNav);
    const idMenuItemUniteMesure = open ? "simple-popover" + uniteMesure : undefined;

    const handleCloseMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Grid item xs={6}>
                <div className='rectangle-item-unite-mesure-first-element'>
                    <div>{uniteMesure}</div>
                    <Box>
                        <MainButtonIcon
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpenNavMenu}
                            className='btn-menu-unite-mesure'
                            lchildren={<MoreHorizRoundedIcon />}
                            id="id-btn-delete-conv"
                            aria-controls={id}
                        />
                        <Menu
                            id={idMenuItemUniteMesure}
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}

                        >
                            <MenuItem
                                onClick={handleEditNavMenuUniteMesure}

                            >
                                <div style={{ display: "flex" }}>
                                    <Typography textAlign="center">تغيير</Typography>
                                    <EditOutlinedIcon style={{ color: "#3A497B", marginLeft: "10px" }} />
                                </div>
                            </MenuItem>
                            <MenuItem
                                onClick={handleDeleteNavMenuUniteMesure}
                            >
                                <div style={{ display: "flex" }}>
                                    <Typography textAlign="center">مسح</Typography>
                                    <DeleteOutlineOutlinedIcon style={{ color: "#3A497B", marginLeft: "10px" }} />
                                </div>
                            </MenuItem>

                        </Menu>
                    </Box>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div className='rectangle-item-unite-mesure'>{etatYearOne}</div>
            </Grid>
            <Grid item xs={2}>
                <div className='rectangle-item-unite-mesure'>{etatYearTwo}</div>
            </Grid>
            <Grid item xs={2}>
                <div className='rectangle-item-unite-mesure'>{etatYearThree}</div>
            </Grid>
        </>
    )
}


function DetailAxe5() {

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */
    const dispatch = useAppDispatch();
    // const liste_operation_store = useAppSelector((state) => state.listOperationReducer.liste_operation);

    /* #region  Modal add UniteMesure */
    const [openModalAddUniteMesure, setOpenModalAddUniteMesure] = React.useState(false);
    const handleOpenModalAddUniteMesure = () => setOpenModalAddUniteMesure(true);
    const handleCloseModalAddUniteMesure = () => setOpenModalAddUniteMesure(false);
    const handleAddUniteMesure = (item: any) => {
        console.log(item);
        setOpenModalAddUniteMesure(false)
    }

    /* #endregion */

    useEffect(() => {
        // dispatch(getListeOperationAction())
    }, [])

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <ModalAddUniteMesure
                        isOpen={openModalAddUniteMesure}
                        onClickClose={handleCloseModalAddUniteMesure}
                        onClickAdd={handleAddUniteMesure}
                    />
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes", ">", "Axe5", ">", "Detail"]} />
                    <div className='container-detail-axe5' dir='rtl' >
                        {/* CARD INFO AXE */}
                        <CardInfoAxe
                            bgColor='#F1F8FF'
                            nameAxe='المحور الخامس'
                            bgColor1='#6CC9F4'
                            bgColor2='#6567F0'
                            nameRegion='الدارالبيضاء-سطات'
                            infoAxe='الأهداف المراد تحقيقها من قبل المصالح اللاممركزة في ضوء الاختصاصات التي سيتم نقلها إليها ومؤشرات قياس نجاعة أدائها في تحقيق هذه الأهداف                            '
                        />

                        {/* TITLE LIST */}
                        <Grid container spacing={2} style={{ marginBottom: "15px", marginTop: "5px" }}>
                            <Grid item xs={12} sm={12} md={12} lg={8} style={{ display: "flex", alignItems: "center" }}>
                                <div className='container-title-list'>
                                    <div className='rectangle-3'></div>
                                    <div className='txt-title-list'> جودة توجيه المستثمرين (برامج المواكبة)</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} style={{ justifyContent: "end" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <MainButton onClick={handleOpenModalAddUniteMesure} label="أضف وحدة القياس" className='btn-add-unite-mesure' />
                                </div>
                            </Grid>
                        </Grid>
                        {/* TOP HEADER */}
                        <Grid container spacing={1} style={{ marginBottom: "8px" }}>
                            <Grid item xs={true}>
                                <div className='txt-top-header-detail-axe5'>وحدة القياس</div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='txt-top-header-detail-axe5'>السنة الأولى</div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='txt-top-header-detail-axe5'>السنة الثانية</div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='txt-top-header-detail-axe5'>السنة الثالثة</div>
                            </Grid>
                        </Grid>
                        {/* SUB HEADER */}
                        <Grid container spacing={1}>
                            {LIST_UNITE_MESURE_BY_BUT.map((item, index) => (
                                <React.Fragment key={index.toString()}>
                                    <Grid item xs={6} >

                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='txt-sub-header-detail-axe5'>{item.nameBut}</div>
                                    </Grid>
                                    {item.listUniteMesure.map((um, idx) => (
                                        <ItemUniteMesure
                                            key={idx}
                                            id={um.id}
                                            uniteMesure={um.uniteMesure}
                                            etatYearOne={um.etatYearOne}
                                            etatYearTwo={um.etatYearTwo}
                                            etatYearThree={um.etatYearThree}
                                            handleEditNavMenuUniteMesure={() => console.log(um)}
                                            handleDeleteNavMenuUniteMesure={() => console.log(um)}
                                        />

                                    ))}
                                </React.Fragment>
                            ))}
                        </Grid>

                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default DetailAxe5;