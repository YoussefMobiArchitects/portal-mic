import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSelectedItemAppbarAction } from "../../redux/reducers/appBarReducer";
import { useLocation } from 'react-router-dom';

import "./styles.scss"

const pages = ['Partenariat', 'Déconcentration', 'Contractualisation'];
const settings = ['Profile', 'Dashboard', 'Logout'];

const Appbar = () => {

    const dispatch = useAppDispatch();
    let location = useLocation();
    const selected_item_appbar_store = useAppSelector(state => state.appBarReducer.selectedItemAppbar);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        console.log('ev :', event)
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (numItem: string) => {
        setAnchorElNav(null);
        dispatch(setSelectedItemAppbarAction(numItem))
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const detectRootPath = () => {
        console.log("the root", location.pathname);
    }

    React.useEffect(() => {
        detectRootPath()
    }, [location])

    return (
        <div className='containerAppBar'>
            <AppBar position="static" className='appBarStyle' elevation={0}>
                <Container maxWidth="xl">
                    <Box sx={{ margin: { xs: "0px 10px", sm: "0px 30px", md: "0px 100px", lg: "0px 165px", xl: "0px 165px" } }}>
                        <Toolbar disableGutters style={{ width: "100%", justifyContent: "space-between" }}>
                            <Box
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            >
                                <img alt="timer" src={require('../../assets/images/min-industrie.png')} height={70} />
                            </Box>

                            {location.pathname != "/" &&
                                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon sx={{ color: "#041D3D" }} />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
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
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem
                                                key={page}
                                            >
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            }
                            {location.pathname != "/" &&
                                <Box
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexGrow: 1
                                    }}
                                >
                                    <img alt="timer" src={require('../../assets/images/min-industrie.png')} height={70} />
                                </Box>
                            }
                            {location.pathname != "/" &&
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={() => handleCloseNavMenu("1")}
                                        color="inherit"
                                    >
                                        <HomeOutlinedIcon sx={{ color: selected_item_appbar_store == "1" ? "#dfa600" : "#031C3E" }} />
                                    </IconButton>
                                    <Button
                                        onClick={() => handleCloseNavMenu("2")}
                                        sx={{ my: 2, color: selected_item_appbar_store == "2" ? "#dfa600" : "#031C3E", display: 'block' }}
                                        className='itemMenuTxt'
                                    >
                                        Partenariat
                                    </Button>
                                    <Button
                                        onClick={() => handleCloseNavMenu("3")}
                                        sx={{ my: 2, color: selected_item_appbar_store == "3" ? "#dfa600" : "#031C3E", display: 'block' }}
                                        className='itemMenuTxt'
                                    >
                                        Déconcentration
                                    </Button>
                                    <Button
                                        onClick={() => handleCloseNavMenu("4")}
                                        sx={{ my: 2, color: selected_item_appbar_store == "4" ? "#dfa600" : "#031C3E", display: 'block' }}
                                        className='itemMenuTxt'
                                    >
                                        Contractualisation
                                    </Button>
                                </Box>
                            }

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg" variant="rounded" />
                                        <Box className='containerTxtuser' sx={{ display: { xs: 'none', md: 'block' } }}>
                                            <div className='fullNameUser'>Mohamed El Mernisi</div>
                                            <div className='subTxt'>DCSASD</div>
                                        </Box>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Box>
                </Container>

            </AppBar>
            {location.pathname != "/" &&
                <div className='bleuContainer' >
                    <Box ></Box>
                </div>
            }
        </div>
    );
};
export default Appbar;