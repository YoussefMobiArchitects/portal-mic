import { MenuItem, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { LIST_SECTEUR } from '../../constants/DataConstants';
import { AxeI } from '../../models/axe';
import { Secteur } from '../../models/secteur';
import MainButton from '../mainButton/MainButton';
import SelectCustomRtl from '../selectCustomRtl/SelectCustomRtl';
import "./styles.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Controller, useForm } from "react-hook-form";


export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ permission, idSecteur }: any) => void;
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

function ModalAddPermission({ isOpen, onClickClose, onClickAdd }: Props) {

    type FormData = {
        controlPermission: string;
        controlSecteur: string;
    };
    const defaultValues = {
        controlPermission: "",
        controlSecteur: "",
    };
    const { control, register, reset, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues });

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  PERMISSION */
    const refPermission = useRef<HTMLInputElement>(null);
    const [permission, setPermission] = React.useState<string>("")
    const handleChangeInputPermission = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPermission(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region DropDown Secteur  */
    const refSecteur = useRef<HTMLInputElement>(null);
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

    const onSubmit = (data: any) => {
        console.log(data);
        onClickAdd({
            uniteMesure: refPermission?.current?.value,
            nameBut: refSecteur?.current?.value,
        })
    }

    useEffect(() => {
        setPermission("");
        setSelectedSecteur({ id: "", name: "", nameAr: "" });
        setSecteur("");
        reset({
            controlPermission: "",
            controlSecteur: "",
        });
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                            <div className='txt-title-modal-add-permission'>أضف صلاحيات</div>

                            {/* PERMISSION */}
                            <Controller
                                control={control}
                                name="controlPermission"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            ref={refPermission}
                                            // label={permission == "" ? "صلاحيات" : ""}
                                            placeholder="صلاحيات"
                                            // value={permission}
                                            // onChange={handleChangeInputPermission}
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                            }}
                                            // helperText="Please select your currency"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlPermission && <div>{errors?.controlPermission?.message}</div>}</div>
                                    </>
                                )}
                            />
                            {/* SECTEUR */}
                            <Controller
                                control={control}
                                name="controlSecteur"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <SelectCustomRtl
                                            ref={refSecteur}
                                            value={secteur}
                                            open={openMenuSecteur}
                                            data={LIST_SECTEUR}
                                            handleClose={handleCloseMenuSecteur}
                                            handleOpen={handleOpenMenuSecteur}
                                            // onChange={handleChangeSecteur}
                                            onChange={(event: any) => {
                                                onChange(event.target.value)
                                                setSecteur(event.target.value)
                                            }}
                                            selectItemHandler={selectSecteurHandler}
                                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
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
                                        <div className='div-style-error-contreller'>{errors.controlSecteur && <div>{errors?.controlSecteur?.message}</div>}</div>
                                    </>
                                )}
                            />

                            <div className='footer-modal-add-conv'>
                                <MainButton
                                    // onClick={() => onClickAdd({ permission: permission, idSecteur: selectedSecteur.id })}
                                    className="btn-modal-add-permission"
                                    label='أضف'
                                    type="submit"
                                />
                            </div>

                        </Box>
                    </form>
                </Modal>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default ModalAddPermission;