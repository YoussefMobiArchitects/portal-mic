import React, { useEffect, useRef, useState } from 'react';
import { Autocomplete, MenuItem, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { LIST_SECTEUR, LIST_UNITE_MESURE_BY_BUT } from '../../../../../../constants/DataConstants';
import { Secteur } from '../../../../../../models/secteur';
import { MainButton, SelectCustomRtl } from '../../../../../../components';
import "./modalAddUniteMesure.scss";
import { Controller, useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { UniteMesureByButI } from '../../../../../../models/uniteMesureByBut';



interface onClickAddProps {
    uniteMesure: string | undefined;
    nameBut: string | undefined;
    etatYearOne: string | undefined;
    etatYearTwo: string | undefined;
    etatYearThree: string | undefined;
}

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ uniteMesure, nameBut, etatYearOne, etatYearTwo, etatYearThree }: onClickAddProps) => void;
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

function ModalAddUniteMesure({ isOpen, onClickClose, onClickAdd }: Props) {

    type FormData = {
        controlUniteMesure: string;
        controlNameBut: string;
        controlEtatYearOne: string;
        controlEtatYearTwo: string;
        controlEtatYearThree: string;

    };
    const defaultValues = {
        controlUniteMesure: "",
        controlNameBut: "",
        controlEtatYearOne: "",
        controlEtatYearTwo: "",
        controlEtatYearThree: "",
    };
    const { control, register, reset, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues });

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    /* #region  unite mesure */
    const refUniteMesure = useRef<HTMLInputElement>(null);
    const [uniteMesure, setUniteMesure] = React.useState<string>("");
    const handleChangeInputUniteMesure = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUniteMesure(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  NAME BUT */
    const refNameBut = useRef<HTMLInputElement>(null);
    const [nameBut, setNameBut] = useState<string>('');
    const handleOnChangeNameBut = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameBut(event.target.value);
        console.log(event.target.value)
    };
    const handleChange = (event: any, value: any) => {
        console.log(value)
        setNameBut(value);
    }
    /* #endregion */
    /* #region Etat year one */
    const refEtatYearOne = useRef<HTMLInputElement>(null);
    const [etatYearOne, setEtatYearOne] = React.useState<string>("");
    const handleChangeInputEtatYearOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEtatYearOne(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region Etat year Two */
    const refEtatYearTwo = useRef<HTMLInputElement>(null);
    const [etatYearTwo, setEtatYearTwo] = React.useState<string>("");
    const handleChangeInputEtatYearTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEtatYearTwo(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region Etat year Three */
    const refEtatYearThree = useRef<HTMLInputElement>(null);
    const [etatYearThree, setEtatYearThree] = React.useState<string>("");
    const handleChangeInputEtatYearThree = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEtatYearThree(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    const onSubmit = (data: any) => {
        console.log(data);
        onClickAdd({
            uniteMesure: refUniteMesure?.current?.value,
            nameBut: refNameBut?.current?.value,
            etatYearOne: refEtatYearOne?.current?.value,
            etatYearTwo: refEtatYearTwo?.current?.value,
            etatYearThree: refEtatYearThree?.current?.value
        })
    }

    useEffect(() => {
        setUniteMesure("");
        reset({
            controlUniteMesure: "",
            controlNameBut: "",
            controlEtatYearOne: "",
            controlEtatYearTwo: "",
            controlEtatYearThree: ""
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
                            <div className='txt-title-modal-add-permission'>وحدة القياس</div>
                            {/* Unite mesure */}
                            <Controller
                                control={control}
                                name="controlUniteMesure"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            inputRef={refUniteMesure}
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                            }}
                                            placeholder="وحدة القياس"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            InputLabelProps={{ shrink: false }}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlUniteMesure && <div>{errors?.controlUniteMesure?.message}</div>}</div>
                                    </>
                                )}
                            />

                            {/* NAME BUT */}
                            <Controller
                                control={control}
                                name="controlNameBut"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <Autocomplete
                                            freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            options={LIST_UNITE_MESURE_BY_BUT.map((option) => option.nameBut)}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} className="item-auto-complete">
                                                    {option}
                                                </Box>
                                            )}
                                            onChange={(event, value) => {
                                                onChange(value)
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    inputRef={refNameBut}
                                                    placeholder="الهدف"
                                                    style={{ backgroundColor: "#FFFFFF", marginBottom: "0px" }}
                                                    InputLabelProps={{ shrink: false }}
                                                    onChange={(e) => {
                                                        onChange(e.target.value)
                                                    }}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        type: 'search',
                                                    }}
                                                />
                                            )}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlNameBut && <div>{errors?.controlNameBut?.message}</div>}</div>
                                    </>
                                )}
                            />
                            {/* ETAT YEAR ONE */}
                            <Controller
                                control={control}
                                name="controlEtatYearOne"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            inputRef={refEtatYearOne}
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                            }}
                                            placeholder="السنة الأولى"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlEtatYearOne && <div>{errors?.controlEtatYearOne?.message}</div>}</div>
                                    </>

                                )}
                            />
                            {/* ETAT YEAR TWO*/}
                            <Controller
                                control={control}
                                name="controlEtatYearTwo"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            inputRef={refEtatYearTwo}
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                            }}
                                            placeholder="السنة الثانية"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlEtatYearTwo && <div>{errors?.controlEtatYearTwo?.message}</div>}</div>
                                    </>

                                )}
                            />
                            {/* ETAT YEAR THREE */}
                            <Controller
                                control={control}
                                name="controlEtatYearThree"
                                rules={{
                                    required: { value: true, message: "هذه الخانة مطلوبه" }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <TextField
                                            inputRef={refEtatYearThree}
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                            }}
                                            placeholder="السنة الثالة"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                        <div className='div-style-error-contreller'>{errors.controlEtatYearThree && <div>{errors?.controlEtatYearThree?.message}</div>}</div>
                                    </>

                                )}
                            />
                            {/*  */}
                            <div className='footer-modal-add-unite-mesure'>
                                <MainButton
                                    className="btn-modal-add-situation-organisme"
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

export default ModalAddUniteMesure;