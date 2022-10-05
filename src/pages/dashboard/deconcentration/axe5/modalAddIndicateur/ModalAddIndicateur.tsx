import { MenuItem, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { LIST_SECTEUR } from '../../../../../constants/DataConstants';
import { Secteur } from '../../../../../models/secteur';
import { MainButton, SelectCustomRtl } from '../../../../../components';
import "./modalAddIndicateur.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface onClickAddProps {
    indicateur: string;
    idSecteur: number;
}

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ indicateur, idSecteur }: onClickAddProps) => void;
    isOpen: boolean,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ModalAddIndicateur({ isOpen, onClickClose, onClickAdd }: Props) {

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */


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
    /* #region  Indicateur */
    const [indicateur, setIndicateur] = React.useState<string>("")
    const handleChangeInputIndicateur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndicateur(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    useEffect(() => {
        setIndicateur("");
        setSelectedSecteur({ id: "", name: "", nameAr: "" });
        setSecteur("")
    }, [isOpen])
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <Modal
                    open={isOpen}
                    onClose={onClickClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    dir="rtl"
                >
                    <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                        <div className='txt-title-modal-add-permission'>أضف المؤشر</div>
                        {/* SECTEUR */}
                        <SelectCustomRtl
                            value={secteur}
                            open={openMenuSecteur}
                            data={LIST_SECTEUR}
                            handleClose={handleCloseMenuSecteur}
                            handleOpen={handleOpenMenuSecteur}
                            onChange={handleChangeSecteur}
                            selectItemHandler={selectSecteurHandler}
                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px",marginBottom:"10px" }}
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

                        {/* Indicateur */}
                        <TextField
                            // label={indicateur == "" ? "المؤشر" : ""}
                            placeholder="المؤشر"
                            value={indicateur}
                            onChange={handleChangeInputIndicateur}
                            // helperText="Please select your currency"
                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                            size="medium"
                            InputLabelProps={{ shrink: false }}
                        />
                        <div className='footer-modal-add-conv'>
                            <MainButton onClick={() => onClickAdd({ indicateur: indicateur, idSecteur: parseInt(selectedSecteur.id) })} className="btn-modal-add-permission" label='أضف' />
                        </div>

                    </Box>
                </Modal>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default ModalAddIndicateur;