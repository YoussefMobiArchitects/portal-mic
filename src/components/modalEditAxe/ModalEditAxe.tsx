import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AxeI } from '../../models/axe';
import MainButton from '../mainButton/MainButton';

import "./styles.scss";


export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickEdit: ({ id, nameAxe, cout, nbrDomaine, nbrProgProj }: AxeI) => void;
    isOpen: boolean,
    axeObject: AxeI;
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

function ModalEditAxe({ isOpen, onClickClose, onClickEdit, axeObject }: Props) {
    /* #region  NOM AXE */
    const [nomAxe, setNomAxe] = React.useState<string>(axeObject.nameAxe)
    const handleChangeInputNomAxe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomAxe(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  NBR DOMAINE */
    const [nbrDomaine, setNbrDomaine] = React.useState<string>(axeObject.nbrDomaine)
    const handleChangeInputNbrDomaine = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNbrDomaine(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  NBR PROG/PROJ */
    const [nbrProgProj, setNbrProgProj] = React.useState<string>(axeObject.nbrProgProj)
    const handleChangeInputNbrProgProj = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNbrProgProj(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  COUT */
    const [cout, setCout] = React.useState<string>(axeObject.cout)
    const handleChangeInputCout = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCout(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    React.useEffect(() => {
        console.log("the object :", axeObject);
        setNomAxe(axeObject.nameAxe);
        setCout(axeObject.cout);
        setNbrDomaine(axeObject.nbrDomaine);
        setNbrProgProj(axeObject.nbrProgProj)

    }, [axeObject])

    return (
        <Modal
            open={isOpen}
            onClose={onClickClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                <div className='txt-title-modal-add-conv'>Modifier l’axe</div>

                {/* NOM AXE */}
                <TextField
                    id="outlined-input-axe-name"
                    label="Nom d'axe"
                    value={nomAxe}
                    onChange={handleChangeInputNomAxe}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />

                {/* NBR DOMAINE */}
                <TextField
                    id="outlined-input-nbr-domaine"
                    // type="number"
                    // InputProps={{
                    //     inputProps: { min: 0 }
                    // }}
                    label="Nombre de domaines"
                    value={nbrDomaine}
                    onChange={handleChangeInputNbrDomaine}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                {/* NBR PROG/PROJ */}
                <TextField
                    id="outlined-input-nbr-prog-proj"
                    // type="number"
                    // InputProps={{
                    //     inputProps: { min: 0 }
                    // }}
                    label="Nombre de programmes/projets"
                    value={nbrProgProj}
                    onChange={handleChangeInputNbrProgProj}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                {/* COUT */}
                <TextField
                    id="outlined-input-cout"
                    // type="number"
                    // InputProps={{
                    //     inputProps: { min: 0 }
                    // }}
                    label="Coût"
                    value={cout}
                    onChange={handleChangeInputCout}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "20px" }}
                    size="medium"
                />
                <div className='footer-modal-add-conv'>
                    <MainButton onClick={onClickClose} className="btn-modal-annuler-axe" label='Annuler' />
                    <MainButton onClick={() => onClickEdit({ id: axeObject.id, nameAxe: nomAxe, cout: cout, nbrDomaine: nbrDomaine, nbrProgProj: nbrProgProj })} className="btn-modal-add-axe" label='Modifier' />
                </div>

            </Box>
        </Modal>
    );
}

export default ModalEditAxe;