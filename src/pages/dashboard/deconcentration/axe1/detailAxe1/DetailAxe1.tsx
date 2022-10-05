import React, { useEffect } from 'react';
import { AppbarGray, CardInfoAxe, MainButton, MainButtonIcon, ModalAddOperation } from '../../../../../components';
import "./stylesDetailAxe1.scss";
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

export interface PropsItemOperationTable {
    id: number;
    lblOperation: string;
    idStatus: number | null;
    status: string;
    bgColorStatus: string;
    date: string;
    isDoneYearOne: boolean | null;
    isDoneYearTwo: boolean | null;
    isDoneYearThree: boolean | null;
    handleDoneNavMenuOne: React.MouseEventHandler;
    handleNotDoneNavMenuOne: React.MouseEventHandler;
    handleDoneNavMenuTwo: React.MouseEventHandler;
    handleNotDoneNavMenuTwo: React.MouseEventHandler;
    handleDoneNavMenuThree: React.MouseEventHandler;
    handleNotDoneNavMenuThree: React.MouseEventHandler;
}

const useStyles = makeStyles((theme) => ({
    doneIcon: {
        '& svg': {
            fontSize: 25
        }
    },
    notDoneIcon: {
        '& svg': {
            fontSize: 50
        }
    },

}));


export const ItemOperationTable = ({
    id,
    lblOperation,
    idStatus,
    status,
    bgColorStatus,
    date,
    isDoneYearOne,
    isDoneYearTwo,
    isDoneYearThree,
    handleDoneNavMenuOne,
    handleNotDoneNavMenuOne,
    handleDoneNavMenuTwo,
    handleNotDoneNavMenuTwo,
    handleDoneNavMenuThree,
    handleNotDoneNavMenuThree
}: PropsItemOperationTable) => {

    /* #region  YEAR1 */
    const [anchorElNavYearOne, setAnchorElNavYearOne] = React.useState<null | HTMLElement>(null);
    const handleOpenNavYearOneMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log("the event : ", event);
        setAnchorElNavYearOne(event.currentTarget);
    };
    const openOne = Boolean(anchorElNavYearOne);
    const idYearOne = openOne ? "popoverYearOne" + id.toString : undefined;

    const handleCloseMenuOne = () => {
        setAnchorElNavYearOne(null);
    };
    /* #endregion */

    /* #region  YEAR2 */
    const [anchorElNavYearTwo, setAnchorElNavYearTwo] = React.useState<null | HTMLElement>(null);
    const handleOpenNavYearTwoMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log("the event : ", event);
        setAnchorElNavYearTwo(event.currentTarget);
    };
    const openTwo = Boolean(anchorElNavYearTwo);
    const idYearTwo = openTwo ? "popoverYearTwo" + id.toString : undefined;

    const handleCloseMenuTwo = () => {
        setAnchorElNavYearTwo(null);
    };
    /* #endregion */

    /* #region  YEAR3 */
    const [anchorElNavYearThree, setAnchorElNavYearThree] = React.useState<null | HTMLElement>(null);
    const handleOpenNavYearThreeMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log("the event : ", event);
        setAnchorElNavYearThree(event.currentTarget);
    };
    const openThree = Boolean(anchorElNavYearThree);
    const idYearThree = openThree ? "popoverYearThree" + id.toString : undefined;

    const handleCloseMenuThree = () => {
        setAnchorElNavYearThree(null);
    };
    /* #endregion */
    return (
        <>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className={idStatus == null ? 'lbl-operation' : (idStatus == 1 ? 'lbl-operation-done' : 'lbl-operation-not-done')}>
                    {idStatus !== null &&
                        <div className='container-status-date'>
                            <div className='div-status' style={{ backgroundColor: bgColorStatus }}>{status}</div>
                            <div className='div-date'>{date}</div>
                        </div>
                    }
                    {lblOperation}
                </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <div className={isDoneYearOne == null ? 'div-year' : (isDoneYearOne == true ? 'div-year-done' : 'div-year-not-done')}>
                    {idStatus === null &&
                        <Box>
                            <MainButtonIcon
                                aria-expanded={openOne ? 'true' : undefined}
                                onClick={handleOpenNavYearOneMenu}
                                className='btn-menu-year'
                                lchildren={<MoreHorizRoundedIcon />}
                                id="id-btn-delete-conv"
                                aria-controls={id}
                            />
                            <Menu
                                id={idYearOne}
                                anchorEl={anchorElNavYearOne}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNavYearOne)}
                                onClose={handleCloseMenuOne}
                                sx={{
                                    display: { xs: 'block', md: 'block' },
                                }}
                            >
                                <MenuItem
                                    onClick={handleDoneNavMenuOne}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-done-item-menu'>انجزت</div>
                                        <div className='done-item-menu'>
                                            <DoneOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleNotDoneNavMenuOne}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-not-done-item-menu'>لم تنجز</div>
                                        <div className='not-done-item-menu'>
                                            <CloseOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </Box>
                    }
                    {isDoneYearOne && idStatus !== null &&
                        <div className='done-item'>
                            <DoneOutlinedIcon sx={{ fontSize: "18px" }} />
                        </div>
                    }
                    {!isDoneYearOne && idStatus !== null &&
                        <div className='not-done-item'>
                            <CloseOutlinedIcon sx={{ fontSize: "18px" }} />
                        </div>
                    }
                </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <div className={isDoneYearTwo == null ? 'div-year' : (isDoneYearTwo == true ? 'div-year-done' : 'div-year-not-done')}>
                    {idStatus === null &&
                        <Box>
                            <MainButtonIcon
                                aria-expanded={openTwo ? 'true' : undefined}
                                onClick={handleOpenNavYearTwoMenu}
                                className='btn-menu-year'
                                lchildren={<MoreHorizRoundedIcon />}
                                id="id-btn-delete-conv"
                                aria-controls={id}
                            />
                            <Menu
                                id={idYearTwo}
                                anchorEl={anchorElNavYearTwo}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNavYearTwo)}
                                onClose={handleCloseMenuTwo}
                                sx={{
                                    display: { xs: 'block', md: 'block' },
                                }}
                            >
                                <MenuItem
                                    onClick={handleDoneNavMenuTwo}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-done-item-menu'>انجزت</div>
                                        <div className='done-item-menu'>
                                            <DoneOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleNotDoneNavMenuTwo}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-not-done-item-menu'>لم تنجز</div>
                                        <div className='not-done-item-menu'>
                                            <CloseOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </Box>
                    }
                </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <div className={isDoneYearThree == null ? 'div-year' : (isDoneYearThree == true ? 'div-year-done' : 'div-year-not-done')}>
                    {idStatus === null &&
                        <Box>
                            <MainButtonIcon
                                aria-expanded={openThree ? 'true' : undefined}
                                onClick={handleOpenNavYearThreeMenu}
                                className='btn-menu-year'
                                lchildren={<MoreHorizRoundedIcon />}
                                id="id-btn-delete-conv"
                                aria-controls={id}
                            />
                            <Menu
                                id={idYearThree}
                                anchorEl={anchorElNavYearThree}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNavYearThree)}
                                onClose={handleCloseMenuThree}
                                sx={{
                                    display: { xs: 'block', md: 'block' },
                                }}
                            >
                                <MenuItem
                                    onClick={handleDoneNavMenuThree}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-done-item-menu'>انجزت</div>
                                        <div className='done-item-menu'>
                                            <DoneOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem
                                    onClick={handleNotDoneNavMenuThree}
                                    sx={{
                                        width: "130px !important",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <div className='txt-not-done-item-menu'>لم تنجز</div>
                                        <div className='not-done-item-menu'>
                                            <CloseOutlinedIcon sx={{ fontSize: "16px" }} />
                                        </div>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </Box>
                    }
                </div>
            </Grid>
        </>
    )
}

function DetailAxe1() {

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */
    const dispatch = useAppDispatch();
    const liste_operation_store = useAppSelector((state) => state.listOperationReducer.liste_operation);


    /* #region  Modal add permission */
    const [openModalAddOperation, setOpenModalAddOperation] = React.useState(false);
    const handleOpenModalAddOperation = () => setOpenModalAddOperation(true);
    const handleCloseModalAddOperation = () => setOpenModalAddOperation(false);
    const handleAddOperation = (item: any) => {
        console.log(item);
        setOpenModalAddOperation(false)
    }

    /* #endregion */

    useEffect(() => {
        dispatch(getListeOperationAction())
    }, [])

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes", ">", "Axe1", ">", "Opérations"]} />
                    <ModalAddOperation
                        isOpen={openModalAddOperation}
                        onClickClose={handleCloseModalAddOperation}
                        onClickAdd={handleAddOperation}
                    />
                    <div className='container-operations' dir='rtl' >
                        {/* CARD INFO AXE */}
                        <CardInfoAxe
                            bgColor='#FFFAF4'
                            nameAxe='المحور الأول'
                            bgColor1='#FFC11B'
                            bgColor2='#FF911B'
                            nameRegion='الدارالبيضاء-سطات'
                            infoAxe='الاختصاصات، ولاسيما منها ذات الطابع التقريري التي سيتم نقلها إلى المصالح اللاممركزة.'
                        />
                        {/* TITLE LIST */}
                        <Grid container spacing={2} style={{ marginBottom: "15px", marginTop: "5px" }}>
                            <Grid item xs={12} sm={12} md={12} lg={10} style={{ display: "flex", alignItems: "center" }}>
                                <div className='container-title-list'>
                                    <div className='rectangle-3'></div>
                                    <div className='txt-title-list'>القيام بتنسيق مع المديريات المركزية المعنية، وكذا الفاعلين والهيئات المختصة، وبتشاور مع المتعهدين المعنيين، بإعداد الاستراتيجية الوطنية للتكوين…</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2} style={{ justifyContent: "end" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <MainButton onClick={handleOpenModalAddOperation} label="أضف عملية" className='btn-add-operation' />
                                </div>

                            </Grid>
                        </Grid>
                        {/* TOP HEADER */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className='txt-top-header-operation'>التكوين المهني</div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className='txt-top-header-operation' style={{ justifyContent: "center" }}>الصلاحيات والاختصاصات التي سيتم نقلها</div>
                            </Grid>
                        </Grid>
                        {/* SUB HEADER */}
                        <Grid container spacing={2} style={{ padding: "15px 0px" }}>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <div className='txt-year-operation'>السنة الأولى</div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <div className='txt-year-operation'>السنة الثانية</div>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <div className='txt-year-operation'>السنة الثالة</div>
                            </Grid>
                        </Grid>
                        {/* TABLE */}
                        <Grid
                            container spacing={2}
                            style={{ justifyContent: "space-between", alignItems: "stretch" }}
                        >
                            {liste_operation_store.map((item, index) => (
                                <ItemOperationTable
                                    key={index.toString()}
                                    id={item.id}
                                    lblOperation={item.lblOperation}
                                    idStatus={item.idStatus}
                                    status={item.status}
                                    bgColorStatus={item.bgColorStatus}
                                    date={item.date}
                                    isDoneYearOne={item.isDoneYearOne}
                                    isDoneYearTwo={item.isDoneYearTwo}
                                    isDoneYearThree={item.isDoneYearThree}
                                    handleDoneNavMenuOne={() => console.log("one : ", item)}
                                    handleNotDoneNavMenuOne={() => console.log("one : ", item)}
                                    handleDoneNavMenuTwo={() => console.log("two : ", item)}
                                    handleNotDoneNavMenuTwo={() => console.log("two : ", item)}
                                    handleDoneNavMenuThree={() => console.log("three : ", item)}
                                    handleNotDoneNavMenuThree={() => console.log("three : ", item)}
                                />
                            ))}
                        </Grid>


                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default DetailAxe1;