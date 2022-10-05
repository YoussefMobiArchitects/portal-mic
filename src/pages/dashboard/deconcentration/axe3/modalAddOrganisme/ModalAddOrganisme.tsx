import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import "./modalAddOrganisme.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { MainButton } from '../../../../../components';

interface onClickAddProps {
    organisme: string;
}

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ organisme }: onClickAddProps) => void;
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

function ModalAddOrganisme({ isOpen, onClickClose, onClickAdd }: Props) {

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  ORGANISME */
    const [organisme, setOrganisme] = React.useState<string>("")
    const handleChangeInputOrganisme = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganisme(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */


    useEffect(() => {
        setOrganisme("");
    }, [isOpen])
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <Modal
                    open={isOpen}
                    onClose={onClickClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-add-organisme"
                    dir="rtl"
                >
                    <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                        <div className='txt-title-modal-add-organisme'>أضف الهيئات</div>

                        {/* ORGANISME */}
                        <TextField
                            label={organisme == "" ? "الهيئات" : ""}
                            value={organisme}
                            onChange={handleChangeInputOrganisme}
                            // helperText="Please select your currency"
                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                            size="medium"
                            InputLabelProps={{ shrink: false }}
                            autoFocus={true}
                        />

                        <div className='footer-modal-add-organisme'>
                            <MainButton onClick={() => onClickAdd({ organisme: organisme })} className="btn-modal-add-organisme" label='أضف' />
                        </div>

                    </Box>
                </Modal>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default ModalAddOrganisme;