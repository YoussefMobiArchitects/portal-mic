import { Autocomplete, Grid, MenuItem, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import useAuthentication from '../../hooks/useAuthentication';
import { AxeI } from '../../models/axe';
import SelectCustom from '../selectCustom/SelectCustom';
import "./styles.scss"
import { ProjetI } from "../../models/projet";
import { LIST_PROJET } from "../../constants/DataConstants";
import MainButton from '../mainButton/MainButton';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';


export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: (nameAxe: string, nameProject: string, cout: string, listEcheancier: ItemEcheancierI[]) => void;
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

export interface ItemEcheancierI {
    echeancier: string;
    contribution: number,
}
export interface PropsItemEcheancier {
    id: string;
    valueEcheancier: string;
    valueContribution: string;
    onChangeItemValueEcheancier?: any,
    onChangeItemValueContribution?: any,

}

const ItemEcheancier = ({ id, valueEcheancier, valueContribution, onChangeItemValueEcheancier, onChangeItemValueContribution }: PropsItemEcheancier) => {
    const [echeancier, setEcheancier] = useState(valueEcheancier);
    const [contribution, setContribution] = useState(valueContribution);

    const handleOnChangeEcheancier = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEcheancier(event.target.value);
        onChangeItemValueEcheancier(event.target.value, id)
    };
    const handleOnChangeContribution = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContribution(event.target.value);
        onChangeItemValueContribution(event.target.value, id)
    };

    useEffect(() => {
        // setEcheancier(valueEcheancier);
        // setContribution(valueContribution);
    }, [])
    return (
        <Grid container spacing={2} style={{ marginTop: "5px" }} >
            <Grid item xs={6}>
                <TextField
                    placeholder="Echéancier"
                    style={{ width: "100%" }}
                    onChange={handleOnChangeEcheancier}
                    onBlur={() => console.log("pressed")}
                    value={echeancier}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    placeholder="Contribution"
                    style={{ width: "100%" }}
                    onChange={handleOnChangeContribution}
                    value={contribution}
                    type="number"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                />
            </Grid>
        </Grid>
    )
}


function ModalAjouterEngagementFinancier({ isOpen, onClickClose, onClickAdd }: Props) {

    const axes_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.axes);
    const language_app = useAuthentication().language;
    const direction_app = useAuthentication().direction;

    const [listEcheancier, setListEcheancier] = React.useState<ItemEcheancierI[]>([{ echeancier: "Dès la signature", contribution: 0 }, { echeancier: "20%", contribution: 0 }]);

    /* #region AXE  */
    const [selectedAxe, setSelectedAxe] = React.useState<AxeI>({ id: "", nameAxe: "", cout: "", nbrDomaine: "", nbrProgProj: "" });
    const [axe, setAxe] = React.useState("");
    const handleChangeAxe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAxe(event.target.value);
    };
    const [openMenuAxe, setOpenMenuAxe] = React.useState(false);
    const handleCloseMenuAxe = () => {
        setOpenMenuAxe(false);
    };
    const handleOpenMenuAxe = () => {
        setOpenMenuAxe(true);
    };
    const selectAxeHandler = (item: any) => {
        setSelectedAxe(item)
    }
    /* #endregion */

    /* #region  NAME PROJECT */
    const [nameProject, setNameProject] = useState<string>('');

    const handleOnChangeNameProjet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameProject(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region  COUT */
    const [cout, setCout] = useState<string>('');

    const handleOnChangeCout = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCout(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    const onChangeItemValueEcheancierHandler = (value: any, id: string) => {
        let newArr = [...listEcheancier];
        newArr[parseInt(id)].echeancier = value;
        setListEcheancier(newArr);
        console.log("the list : ", listEcheancier)
    }

    const onChangeItemValueContributionHandler = (value: any, id: string) => {
        let newArr = [...listEcheancier];
        newArr[parseInt(id)].contribution = value;
        setListEcheancier(newArr);
        console.log("the list : ", listEcheancier)
    }

    const addEcheanceHandler = () => {
        setListEcheancier((listEcheancier) => [
            ...listEcheancier,
            {
                echeancier: "",
                contribution: 0
            },
        ]);
    }

    useEffect(() => {
        setListEcheancier([]);
        setSelectedAxe(({ id: "", nameAxe: "", cout: "", nbrDomaine: "", nbrProgProj: "" }));
        setAxe("")
    }, [isOpen])

    return (
        <Modal
            open={isOpen}
            onClose={onClickClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "700px" }, borderRadius: "4px", maxHeight: "80%", overflow: 'scroll' }]}>
                <div className='txt-title-modal-ajouter-engagement-financier'>Ajouter un engagement financier</div>

                {/* AXE */}
                <SelectCustom
                    value={axe}
                    open={openMenuAxe}
                    data={axes_store}
                    handleClose={handleCloseMenuAxe}
                    handleOpen={handleOpenMenuAxe}
                    onChange={handleChangeAxe}
                    selectItemHandler={selectAxeHandler}
                    customStyle={{ backgroundColor: "#FFFFFF", marginBottom: "20px" }}
                    titleSelect="Axe*"
                    isShowTitleSelect={false}
                    txtPlaceholder="Axe*"
                >
                    {axes_store.map((axe: AxeI) => (
                        <MenuItem className='item-region' key={axe.id} value={axe.nameAxe} onClick={() => selectAxeHandler(axe)}>
                            {axe.nameAxe}
                        </MenuItem>
                    ))}
                </SelectCustom>

                {/* NAME PROJECT */}
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={LIST_PROJET.map((option) => option.name)}
                    onChange={(event, newValue) => {
                        setNameProject(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={nameProject === "" ? "Projet" : ""}
                            onChange={handleOnChangeNameProjet}
                            style={{ backgroundColor: "#FFFFFF", marginBottom: "20px" }}
                            InputLabelProps={{ shrink: false }}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />

                {/* COUT */}
                <TextField
                    placeholder="Coût total"
                    style={{ width: "100%" }}
                    onChange={handleOnChangeCout}
                    value={cout}
                    type="number"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                />

                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={6}>
                        <div className='txt-header-list-eche'>Echéancier</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='txt-header-list-eche'>Contribution</div>
                    </Grid>
                </Grid>

                {listEcheancier.map((item, index) => (
                    <ItemEcheancier
                        key={index}
                        id={index.toString()}
                        valueEcheancier={item.echeancier}
                        valueContribution={item.contribution.toString()}
                        onChangeItemValueEcheancier={onChangeItemValueEcheancierHandler}
                        onChangeItemValueContribution={onChangeItemValueContributionHandler}
                    />
                ))}

                <MainButton
                    onClick={addEcheanceHandler}
                    className='btn-modal-add-echeance'
                    label="Ajouter echéancier"
                    startIcon={<ControlPointOutlinedIcon />}
                />

                <div className='footer-modal-add-engagement'>
                    <MainButton onClick={onClickClose} className="btn-modal-annuler-engagement" label='Annuler' />
                    <MainButton onClick={() => onClickAdd(axe, nameProject, cout, listEcheancier)} className="btn-modal-add-engagement" label='Ajouter' />
                </div>

            </Box>
        </Modal>
    );
}

export default ModalAjouterEngagementFinancier;