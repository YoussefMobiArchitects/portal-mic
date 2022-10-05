import React from 'react';
import "./styles.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useNavigationApp from '../../../../hooks/useNavigationApp';
import { AppbarGray, CardInfoAxe, MainButton, MainButtonIcon, ModalAddPermission, SelectCustomRtl } from '../../../../components';
import { LIST_PERMISSION_BY_SECTOR, LIST_SECTEUR } from '../../../../constants/DataConstants';
import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { PermissionI } from '../../../../models/permisionBySector';
import { Secteur } from '../../../../models/secteur';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { NavigationConstants } from "../../../../constants";

export interface ItemTableProps {
    permission: string;
    onClick: React.MouseEventHandler;
    handleEditNavMenu: React.MouseEventHandler;
    handleDeleteNavMenu: React.MouseEventHandler;
}

function Axe1() {

    let navigate = useNavigationApp().navigate;
    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */


    /* #region  itemTable */
    const ItemTable = ({ permission, onClick, handleEditNavMenu, handleDeleteNavMenu }: ItemTableProps) => {

        const divRef = React.useRef();
        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            event.stopPropagation();
            console.log("the event : ", event);
            setAnchorElNav(event.currentTarget);
            // setAnchorElNav(divRef.current);
        };
        const open = Boolean(anchorElNav);
        const id = open ? "simple-popover" + permission : undefined;

        const handleCloseMenu = () => {
            setAnchorElNav(null);
        };

        // useEffect(() => {
        //     // setAnchorElNav(divRef.current);
        // }, [
        //     // divRef
        // ]);


        return (
            <div className='card-content-tab' id="id-card-content-tab" >

                <div onClick={onClick} className="txt-permission">{permission}</div>
                <div>
                    <Box>
                        <MainButtonIcon
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpenNavMenu}
                            className='btn-menu-permission'
                            lchildren={<MoreHorizRoundedIcon />}
                            id="id-btn-delete-conv"
                            aria-controls={id}
                        />
                        <Menu
                            id={id}
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
                                onClick={handleEditNavMenu}
                                
                            >
                                <div style={{ display: "flex" }}>
                                    <Typography textAlign="center">تغيير</Typography>
                                    <EditOutlinedIcon style={{ color: "#3A497B", marginLeft: "10px" }} />
                                </div>
                            </MenuItem>
                            <MenuItem
                                onClick={handleDeleteNavMenu}
                            >
                                <div style={{ display: "flex" }}>
                                    <Typography textAlign="center">مسح</Typography>
                                    <DeleteOutlineOutlinedIcon style={{ color: "#3A497B", marginLeft: "10px" }} />
                                </div>
                            </MenuItem>

                        </Menu>
                    </Box>

                </div>

            </div>
        )
    }
    /* #endregion */

    const handleEditNavMenu = (permission: PermissionI) => {
        console.log(permission)
    }

    const handleDeleteNavMenu = (permission: PermissionI) => {
        console.log(permission)
    }
    const onClickPermissionHandler = (permission: PermissionI) => {
        console.log(permission)
        navigate(NavigationConstants.DETAIL_AXE1_PAGE)
    }


    /* #region DropDown Secteur  */
    const [selectedSecteur, setSelectedSecteur] = React.useState({ id: "", name: "", nameAr: "" });
    const [secteur, setSecteur] = React.useState("");
    const handleChangeSecteur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecteur(event.target.value);
    };
    const [openMenuSecteur, setOpenMenuSecteur] = React.useState(false);
    const handleCloseMenuSecteur = () => {
        setOpenMenuSecteur(false);
    };
    const handleOpenMenuSecteur = () => {
        setOpenMenuSecteur(true);
    };
    const selectSecteurHandler = (item: any) => {
        setSelectedSecteur(item)
    }
    /* #endregion */

    /* #region  Modal add permission */
    const [openModalAddPermission, setOpenModalAddPermission] = React.useState(false);
    const handleOpenModalAddPermission = () => setOpenModalAddPermission(true);
    const handleCloseModalAddPermission = () => setOpenModalAddPermission(false);
    const handleAddPermission = (item: any) => {
        console.log(item);
        setOpenModalAddPermission(false)
    }

    /* #endregion */
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <div>
                    <AppbarGray
                        data={["Accueil", ">", "Déconcentration", ">", "Axes", ">", "Axe1"]} />
                    <div className='container-axe1' dir='rtl' >
                        <ModalAddPermission
                            isOpen={openModalAddPermission}
                            onClickClose={handleCloseModalAddPermission}
                            onClickAdd={handleAddPermission}
                        />
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
                            <Grid item xs={12} sm={12} md={12} lg={8} style={{ display: "flex", alignItems: "center" }}>
                                <div className='container-title-list'>
                                    <div className='rectangle-3'></div>
                                    <div className='txt-title-list'>الصلاحيات والاختصاصات الموكولة إلى المصالح المركزية بموجب النصوص التنظيمية والتشريعية الجاري بها العمل</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} style={{ justifyContent: "end" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>

                                    <div style={{ width: "190px", padding: "0px 25px" }}>
                                        <SelectCustomRtl
                                            value={secteur}
                                            open={openMenuSecteur}
                                            data={LIST_SECTEUR}
                                            handleClose={handleCloseMenuSecteur}
                                            handleOpen={handleOpenMenuSecteur}
                                            onChange={handleChangeSecteur}
                                            selectItemHandler={selectSecteurHandler}
                                            customStyle={{ backgroundColor: "#FFFFFF", height: "41px", width: "190px", margin: "0px 15px" }}
                                            titleSelect="قطاع"
                                            isShowTitleSelect={false}
                                            txtPlaceholder="قطاع"
                                        >
                                            {LIST_SECTEUR.map((sec: Secteur) => (
                                                <MenuItem className='item-dropdown-secteur' key={sec.id} value={sec.nameAr} onClick={() => selectSecteurHandler(sec)}>

                                                    <div style={{ width: "100%", textAlign: "end" }} >
                                                        {sec.nameAr}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </SelectCustomRtl>
                                    </div>
                                    <MainButton id="id-btn-renseigner-conv" onClick={handleOpenModalAddPermission} label="أضف صلاحية" className='btn-add-permission' />
                                </div>

                            </Grid>
                        </Grid>

                        {/* LIST */}
                        {LIST_PERMISSION_BY_SECTOR.map((item, index) => (
                            <div className="tabs-axe1" key={index.toString()}>
                                <div className="tab-axe1">
                                    <input className='input-style' type="checkbox" id={index.toString()} />
                                    <label className="tab-axe1-label" htmlFor={index.toString()}>
                                        <div className='tab-axe1-label-container-txt-icon'>
                                            <div className='tab-axe1-label-container-txt-icon-txt-title'>{item.nameSecteur}</div>
                                        </div>
                                    </label>
                                    <div className="tab-content">
                                        {item.list.map((permission, index) => (
                                            <ItemTable
                                                key={index.toString()}
                                                permission={permission.permisssion}
                                                handleEditNavMenu={(e) => {
                                                    e.stopPropagation();
                                                    handleEditNavMenu(permission);
                                                }}
                                                handleDeleteNavMenu={(e) => {
                                                    e.stopPropagation();
                                                    handleEditNavMenu(permission);
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onClickPermissionHandler(permission);
                                                }}
                                            />
                                        ))}

                                    </div>
                                </div>
                            </div>
                        ))}

                        {/*  */}

                    </div>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Axe1;