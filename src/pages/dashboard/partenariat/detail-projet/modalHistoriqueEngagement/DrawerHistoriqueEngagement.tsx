import { Grid, SwipeableDrawer } from '@mui/material';
import "./drawerHistoriqueEngagement.scss";
import React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../../../hooks';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { MainButtonIcon, ItemHistoriqueEngagement } from '../../../../../components';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface Props {
    anchor: Anchor;

    open: boolean;
    onClose: React.MouseEventHandler,
    onOpen: React.MouseEventHandler,
}

function DrawerHistoriqueEngagement({ anchor, open, onClose, onOpen }: Props) {
    const list_historique_engagement_store = useAppSelector((state) => state.detailProjetReducer.list_historique_engagement);

    return (
        <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
        >
            <Box
                sx={{ width: { xs: "300px", sm: "350px", md: "450px", lg: "500px", xl: "600px" }, padding: "30px" }}
            >
                {/* header */}
                <div className='header-drawer-historique-remarque'>
                    <div className='txt-title-header'>Historique</div>

                    <div>
                        <MainButtonIcon
                            onClick={onClose}
                            className='btn-close-drawer-historique-remarque'
                            lchildren={<CloseOutlinedIcon />}
                        />
                    </div>
                </div>

                {/* LIST */}
                <Grid container spacing={2}>
                    {list_historique_engagement_store.map((item, index) => (
                        <Grid item xs={12} key={index.toString()}>
                            <ItemHistoriqueEngagement
                                date={item.date}
                                action={item.action}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SwipeableDrawer>
    );
}

export default DrawerHistoriqueEngagement;