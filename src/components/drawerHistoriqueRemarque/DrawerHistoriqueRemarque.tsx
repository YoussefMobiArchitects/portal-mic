import { Grid, SwipeableDrawer } from '@mui/material';
import "./styles.scss";
import React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../hooks';
import ItemHistoriqueRemarque from "../itemHistoriqueRemarque/ItemHistoriqueRemarque";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MainButtonIcon from '../mainButtonIcon/MainButtonIcon';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface Props {
    anchor: Anchor;

    open: boolean;
    onClose: React.MouseEventHandler,
    onOpen: React.MouseEventHandler,
}

function DrawerHistoriqueRemarque({ anchor, open, onClose, onOpen }: Props) {
    const list_historique_remarque_store = useAppSelector((state) => state.consulterConvReducer.list_historique_remarque);

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
                    <div className='txt-title-header'>Remarques et observations</div>

                    <div>
                        <MainButtonIcon
                            onClick={onClose}
                            className='btn-close-drawer-historique-remarque'
                            lchildren={<CloseOutlinedIcon />}
                        />
                    </div>
                </div>
                <div className='txt-direction-metier'>Direction métier</div>

                {/* LIST */}
                <Grid container spacing={2}>
                    {list_historique_remarque_store.map((item, index) => (
                        <Grid item xs={12} key={index.toString()}>
                            <ItemHistoriqueRemarque
                                date={item.date}
                                remarque={item.remarque}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SwipeableDrawer>
    );
}

export default DrawerHistoriqueRemarque;