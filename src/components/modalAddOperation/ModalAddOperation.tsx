import { MenuItem, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { LIST_ANNEE_OPERATION, LIST_SECTEUR, LIST_STATUT_OPERATION } from '../../constants/DataConstants';
import { AxeI } from '../../models/axe';
import { Secteur } from '../../models/secteur';
import MainButton from '../mainButton/MainButton';
import SelectCustomRtl from '../selectCustomRtl/SelectCustomRtl';
import "./modalAddOperation.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Controller, useForm } from "react-hook-form";
import { AnneeOperationI } from '../../models/anneeOperation';
import { StatutOperationI } from '../../models/statutOperation';


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

function ModalAddOperation({ isOpen, onClickClose, onClickAdd }: Props) {

    type FormData = {
        controlOperation: string;
        controlAnnee: string;
        controlStatut: string;
    };
    const defaultValues = {
        controlOperation: "",
        controlAnnee: "",
        controlStatut: ""
    };
    const { control, register, reset, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues });

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  OPERATION */
    const refOperation = useRef<HTMLInputElement>(null);
    const [operation, setOperation] = React.useState<string>("")
    const handleChangeInputOperation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOperation(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region DropDown Annee  */
    const refAnnee = useRef<HTMLInputElement>(null);
    const [selectedAnnee, setSelectedAnnee] = React.useState({ id: 0, lblAnnee: "" });
    const [annee, setAnnee] = React.useState("");
    const handleChangeAnnee = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnnee(event.target.value);
    };
    const [openMenuAnnee, setOpenMenuAnnee] = React.useState(false);
    const handleCloseMenuAnnee = () => {
        setOpenMenuAnnee(false);
    };
    const handleOpenMenuAnnee = () => {
        setOpenMenuAnnee(true);
    };
    const selectAnneeHandler = (item: any) => {
        setSelectedAnnee(item)
    }
    /* #endregion */

    /* #region DropDown Statut  */
    const refStatut = useRef<HTMLInputElement>(null);
    const [selectedStatut, setSelectedStatut] = React.useState({ id: 0, lblStatut: "" });
    const [statut, setStatut] = React.useState("");
    const handleChangeStatut = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatut(event.target.value);
    };
    const [openMenuStatut, setOpenMenuStatut] = React.useState(false);
    const handleCloseMenuStatut = () => {
        setOpenMenuStatut(false);
    };
    const handleOpenMenuStatut = () => {
        setOpenMenuStatut(true);
    };
    const selectStatutHandler = (item: any) => {
        setSelectedStatut(item)
    }
    /* #endregion */

    const onSubmit = (data: any) => {
        console.log(data);
        onClickAdd({
            operation: refOperation?.current?.value,
            annee: refAnnee?.current?.value,
            statut: refStatut?.current?.value
        })
    }

    useEffect(() => {
        setOperation("");
        setSelectedAnnee({ id: 0, lblAnnee: "" });
        setAnnee("");
        setSelectedAnnee({ id: 0, lblAnnee: "" });
        reset({
            controlOperation: "",
            controlAnnee: "",
            controlStatut: ""
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
                            <div className='txt-title-modal-add-operation'>أضف عملية</div>

                            {/* OPERATION */}
                            <Controller
                                control={control}
                                name="controlOperation"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            ref={refOperation}
                                            // label={permission == "" ? "العمليات" : ""}
                                            placeholder="العمليات"
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
                                        <div className='div-style-error-contreller'>{errors.controlOperation && <div>{errors?.controlOperation?.message}</div>}</div>
                                    </>
                                )}
                            />
                            {/* ANNEE  */}
                            <Controller
                                control={control}
                                name="controlAnnee"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <SelectCustomRtl
                                            ref={refAnnee}
                                            value={annee}
                                            open={openMenuAnnee}
                                            data={LIST_ANNEE_OPERATION}
                                            handleClose={handleCloseMenuAnnee}
                                            handleOpen={handleOpenMenuAnnee}
                                            // onChange={handleChangeAnnee}
                                            onChange={(event: any) => {
                                                onChange(event.target.value)
                                                setAnnee(event.target.value)
                                            }}
                                            selectItemHandler={selectAnneeHandler}
                                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                                            titleSelect="السنة"
                                            isShowTitleSelect={false}
                                            txtPlaceholder="السنة"
                                        >
                                            {LIST_ANNEE_OPERATION.map((annee: AnneeOperationI) => (
                                                <MenuItem className='item-dropdown-annee-operation' key={annee.id} value={annee.lblAnnee} onClick={() => selectAnneeHandler(annee)}>

                                                    <div style={{ width: "100%", textAlign: "end" }} >
                                                        {annee.lblAnnee}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </SelectCustomRtl>
                                        <div className='div-style-error-contreller'>{errors.controlAnnee && <div>{errors?.controlAnnee?.message}</div>}</div>
                                    </>
                                )}
                            />

                            {/* STATUT  */}
                            <Controller
                                control={control}
                                name="controlStatut"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <SelectCustomRtl
                                            ref={refStatut}
                                            value={statut}
                                            open={openMenuStatut}
                                            data={LIST_STATUT_OPERATION}
                                            handleClose={handleCloseMenuStatut}
                                            handleOpen={handleOpenMenuStatut}
                                            // onChange={handleChangeStatut}
                                            onChange={(event: any) => {
                                                onChange(event.target.value)
                                                setStatut(event.target.value)
                                            }}
                                            selectItemHandler={selectStatutHandler}
                                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                                            titleSelect="الحالة"
                                            isShowTitleSelect={false}
                                            txtPlaceholder="الحالة"
                                        >
                                            {LIST_STATUT_OPERATION.map((statut: StatutOperationI) => (
                                                <MenuItem className='item-dropdown-statut-operation' key={statut.id} value={statut.lblStatut} onClick={() => selectStatutHandler(statut)}>

                                                    <div style={{ width: "100%", textAlign: "end" }} >
                                                        {statut.lblStatut}
                                                    </div>
                                                </MenuItem>
                                            ))}
                                        </SelectCustomRtl>
                                        <div className='div-style-error-contreller'>{errors.controlStatut && <div>{errors?.controlStatut?.message}</div>}</div>
                                    </>
                                )}
                            />

                            <div className='footer-modal-add-conv'>
                                <MainButton
                                    className="btn-modal-add-operation"
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

export default ModalAddOperation;