import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { AxeI } from '../../models/axe';
import MainButton from '../mainButton/MainButton';
import "./styles.scss";
import { Controller, useForm } from "react-hook-form";

export interface onClickAddProps {
    id: string | undefined;
    nameAxe: string | undefined;
    cout: string | undefined;
    nbrDomaine: string | undefined;
    nbrProgProj: string | undefined;

}
export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({ id, nameAxe, cout, nbrDomaine, nbrProgProj }: onClickAddProps) => void;
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

function ModalAddAxe({ isOpen, onClickClose, onClickAdd }: Props) {

    type FormData = {
        controlNomAxe: string;
        controlNbrDomaine: string;
        controlNbrProgProj: string;
        controlCout: string;

    };
    const defaultValues = {
        controlNomAxe: "",
        controlNbrDomaine: "",
        controlNbrProgProj: "",
        controlCout: "",
    };
    const { control, register, reset, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues });

    /* #region  NOM AXE */
    const refNomAxe = useRef<HTMLInputElement>(null);
    const [nomAxe, setNomAxe] = React.useState<string>("")
    const handleChangeInputNomAxe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomAxe(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  NBR DOMAINE */
    const refNbrDomaine = useRef<HTMLInputElement>(null);
    const [nbrDomaine, setNbrDomaine] = React.useState<string>("")
    const handleChangeInputNbrDomaine = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNbrDomaine(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  NBR PROG/PROJ */
    const refNbrProgProj = useRef<HTMLInputElement>(null);
    const [nbrProgProj, setNbrProgProj] = React.useState<string>("")
    const handleChangeInputNbrProgProj = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNbrProgProj(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  COUT */
    const refCout = useRef<HTMLInputElement>(null);
    const [cout, setCout] = React.useState<string>("")
    const handleChangeInputCout = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCout(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    const onSubmit = (data: any) => {
        console.log(data);
        onClickAdd({
            id: Date.now().toString(),
            nameAxe: refNomAxe?.current?.value,
            cout: refCout?.current?.value,
            nbrDomaine: refNbrDomaine?.current?.value,
            nbrProgProj: refNbrProgProj?.current?.value,
        })
    }

    useEffect(() => {
        setNomAxe("");
        setNbrDomaine("");
        setNbrProgProj("");
        setCout("");

        reset({
            controlNomAxe: "",
            controlNbrDomaine: "",
            controlNbrProgProj: "",
            controlCout: "",
        });

    }, [isOpen]);

    return (
        <Modal
            open={isOpen}
            onClose={onClickClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                    <div className='txt-title-modal-add-conv'>Ajouter un axe</div>

                    {/* NOM AXE */}
                    <Controller
                        control={control}
                        name="controlNomAxe"
                        rules={{
                            required: { value: true, message: "veuillez remplir ce champ" }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <TextField
                                    id="outlined-input-axe-name"
                                    // label="Nom d'axe"
                                    ref={refNomAxe}
                                    // value={nomAxe}
                                    // onChange={handleChangeInputNomAxe}
                                    onChange={(event) => {
                                        onChange(event.target.value)
                                    }}
                                    placeholder="Nom d'axe"
                                    // helperText="Please select your currency"
                                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                    size="medium"
                                />
                                <div className='div-style-error-contreller'>{errors.controlNomAxe && <div>{errors?.controlNomAxe?.message}</div>}</div>
                            </>
                        )}
                    />

                    {/* NBR DOMAINE */}
                    <Controller
                        control={control}
                        name="controlNbrDomaine"
                        rules={{
                            required: { value: true, message: "veuillez remplir ce champ" }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <TextField
                                    id="outlined-input-nbr-domaine"
                                    ref={refNbrDomaine}
                                    type="number"
                                    InputProps={{
                                        inputProps: { min: 0 }
                                    }}
                                    // label="Nombre de domaines"
                                    placeholder="Nombre de domaines"
                                    // value={nbrDomaine}
                                    // onChange={handleChangeInputNbrDomaine}
                                    onChange={(event) => {
                                        onChange(event.target.value)
                                    }}
                                    // helperText="Please select your currency"
                                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                    size="medium"
                                />
                                <div className='div-style-error-contreller'>{errors.controlNbrDomaine && <div>{errors?.controlNbrDomaine?.message}</div>}</div>
                            </>
                        )}
                    />
                    {/* NBR DOMAINE */}
                    <Controller
                        control={control}
                        name="controlNbrProgProj"
                        rules={{
                            required: { value: true, message: "veuillez remplir ce champ" }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <TextField
                                    id="outlined-input-nbr-prog-proj"
                                    ref={refNbrProgProj}
                                    type="number"
                                    InputProps={{
                                        inputProps: { min: 0 }
                                    }}
                                    placeholder="Nombre de programmes/projets"
                                    // value={nbrProgProj}
                                    // onChange={handleChangeInputNbrProgProj}
                                    onChange={(event) => {
                                        onChange(event.target.value)
                                    }}
                                    // helperText="Please select your currency"
                                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                    size="medium"
                                />
                                <div className='div-style-error-contreller'>{errors.controlNbrProgProj && <div>{errors?.controlNbrProgProj?.message}</div>}</div>
                            </>
                        )}
                    />
                    {/* COUT */}
                    <Controller
                        control={control}
                        name="controlCout"
                        rules={{
                            required: { value: true, message: "veuillez remplir ce champ" }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <>
                                <TextField
                                    id="outlined-input-cout"
                                    ref={refCout}
                                    type="number"
                                    InputProps={{
                                        inputProps: { min: 0 }
                                    }}
                                    placeholder="Coût"
                                    // value={cout}
                                    // onChange={handleChangeInputCout}
                                    onChange={(event) => {
                                        onChange(event.target.value)
                                    }}
                                    // helperText="Please select your currency"
                                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                    size="medium"
                                />
                                <div className='div-style-error-contreller'>{errors.controlCout && <div>{errors?.controlCout?.message}</div>}</div>
                            </>
                        )}
                    />
                    <div className='footer-modal-add-conv'>
                        <MainButton onClick={onClickClose} className="btn-modal-annuler-axe" label='Annuler' />
                        <MainButton
                            type="submit"
                            // onClick={() => onClickAdd({ id: Date.now().toString(), nameAxe: nomAxe, cout: cout, nbrDomaine: nbrDomaine, nbrProgProj: nbrProgProj })} 
                            className="btn-modal-add-axe" label='Ajouter' />
                    </div>

                </Box>
            </form>
        </Modal>
    );
}

export default ModalAddAxe;