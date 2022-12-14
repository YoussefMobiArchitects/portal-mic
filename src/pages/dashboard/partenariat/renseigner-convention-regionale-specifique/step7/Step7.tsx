import React, { useState } from 'react';
import "./step7.scss";
import { Grid, MenuItem } from '@mui/material';
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import {
    isEditRenseignerConvAction,
    setNumStepAction,
    editListComiteAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { HeaderStep, MainButton, MainButtonIcon, SelectCustom } from '../../../../../components';
import { ComiteItemI } from '../../../../../models/comiteItem';
import { LIST_FREQUENCE, LIST_TYPE_MODE_GOUVERNANCE } from '../../../../../constants/DataConstants';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export interface editedItemModeGouvernance {
    id: string;
    name: string;
}
export interface editedItemFrequence {
    id: string;
    valFrequence: string;
}
export interface itemModeGouvernanceProps {
    idxItem: string;
    itemModeGouvernance: editedItemModeGouvernance;
}
export interface itemFrequenceProps {
    idxItem: string;
    itemFrequence: editedItemFrequence;
}

export interface Props {
    id: string;
    idModeGouvernance: string;
    nameModeGouvernance: string;
    idFreq: string,
    valFreq: string;
    deleteMode: React.MouseEventHandler;
    // editMode: ({ id, idModeGouvernanace, nameMode, idFreq, valFreq }: ComiteItemI) => void;
    // editMode: (item: any) => void;
    editModeGouvernanceItem: ({ idxItem, itemModeGouvernance }: itemModeGouvernanceProps) => void;
    editFrequenceItem: ({ idxItem, itemFrequence }: itemFrequenceProps) => void;

}

function Step7() {

    const ItemComite = ({ id, idModeGouvernance, nameModeGouvernance, idFreq, valFreq, deleteMode, editModeGouvernanceItem, editFrequenceItem }: Props) => {

        const dispatch = useAppDispatch();

        /* #region MODE GOUVERNANCE  */
        const [selectedModeGouvernance, setSelectedModeGouvernance] = React.useState({ id: idModeGouvernance, name: nameModeGouvernance });
        const [modeGouvernance, setModeGouvernance] = React.useState(nameModeGouvernance);
        const handleChangeModeGouvernance = (event: React.ChangeEvent<HTMLInputElement>) => {
            setModeGouvernance(event.target.value);
        };
        const [openMenuModeGouvernance, setOpenMenuModeGouvernance] = React.useState(false);
        const handleCloseMenuModeGouvernance = () => {
            setOpenMenuModeGouvernance(false);
        };
        const handleOpenMenuModeGouvernance = () => {
            setOpenMenuModeGouvernance(true);
        };
        const selectModeGouvernanceHandler = (item: any) => {
            setSelectedModeGouvernance(item);
            editModeGouvernanceItem({ idxItem: id, itemModeGouvernance: item });
        }
        /* #endregion */

        /* #region FREQUENCE  */
        const [selectedFrequence, setSelectedFrequence] = React.useState({ id: idFreq, name: valFreq });
        const [frequence, setFrequence] = React.useState(valFreq);
        const handleChangeFrequence = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFrequence(event.target.value);
        };
        const [openMenuFrequence, setOpenMenuFrequence] = React.useState(false);
        const handleCloseMenuFrequence = () => {
            setOpenMenuFrequence(false);
        };
        const handleOpenMenuFrequence = () => {
            setOpenMenuFrequence(true);
        };
        const selectFrequenceHandler = (item: any) => {
            setSelectedFrequence(item);
            console.log("ff", item)
            editFrequenceItem({ idxItem: id, itemFrequence: item });
        }
        /* #endregion */

        React.useEffect(() => {
            setSelectedModeGouvernance({ id: idModeGouvernance, name: nameModeGouvernance });
            setModeGouvernance(nameModeGouvernance);
            setSelectedFrequence({ id: idFreq, name: valFreq });
            setFrequence(valFreq);
        }, [])

        return (
            <div>
                <Grid container spacing={1} style={{ marginTop: "5px" }}>

                    <Grid item xs={true} >
                        {/* MODE GOUVERNANCE */}
                        <SelectCustom
                            value={nameModeGouvernance}
                            open={openMenuModeGouvernance}
                            data={LIST_TYPE_MODE_GOUVERNANCE}
                            handleClose={handleCloseMenuModeGouvernance}
                            handleOpen={handleOpenMenuModeGouvernance}
                            onChange={handleChangeModeGouvernance}
                            selectItemHandler={selectModeGouvernanceHandler}
                            customStyle={{ backgroundColor: "#FFFFFF" }}
                            titleSelect="Mode de gouvernance "
                            isShowTitleSelect={false}
                            txtPlaceholder="Mode de gouvernance "
                        >
                            {LIST_TYPE_MODE_GOUVERNANCE.map((mode: any) => (
                                <MenuItem className='item-region' key={mode.id} value={mode.name} onClick={() => selectModeGouvernanceHandler(mode)}>
                                    {mode.name}
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item xs={true}>
                        {/* FREQUENCE */}
                        <SelectCustom
                            value={valFreq}
                            open={openMenuFrequence}
                            data={LIST_FREQUENCE}
                            handleClose={handleCloseMenuFrequence}
                            handleOpen={handleOpenMenuFrequence}
                            onChange={handleChangeFrequence}
                            selectItemHandler={selectFrequenceHandler}
                            customStyle={{ backgroundColor: "#FFFFFF" }}
                            titleSelect="Fr??quence"
                            isShowTitleSelect={false}
                            txtPlaceholder="Fr??quence"
                        >
                            {LIST_FREQUENCE.map((freq: any) => (
                                <MenuItem className='item-region' key={freq.id} value={freq.valFrequence} onClick={() => selectFrequenceHandler(freq)}>
                                    {freq.valFrequence}
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item style={{ paddingTop: "10px" }}>
                        <MainButtonIcon
                            onClick={deleteMode}
                            className='btn-delete-obj'
                            lchildren={<DeleteOutlineIcon />}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const list_comites_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listComite);
    const [listComite, setListComite] = useState<ComiteItemI[]>(list_comites_store);

    const addModeGouvernanaceHandler = () => {
        // dispatch(addModeGouvernanaceAction({
        //     id: Date.now().toString(),
        //     idModeGouvernanace: LIST_TYPE_MODE_GOUVERNANCE[1].id,
        //     nameMode: LIST_TYPE_MODE_GOUVERNANCE[1].name,
        //     idFreq: LIST_FREQUENCE[1].id,
        //     valFreq: LIST_FREQUENCE[1].valFrequence
        // }))

        setListComite([...listComite, {
            id: Date.now().toString(),
            idModeGouvernanace: LIST_TYPE_MODE_GOUVERNANCE[1].id,
            nameMode: LIST_TYPE_MODE_GOUVERNANCE[1].name,
            idFreq: LIST_FREQUENCE[1].id,
            valFreq: LIST_FREQUENCE[1].valFrequence
        }])
    }

    const deleteModeGouvernanaceHandler = (idx: number) => {
        let array: Array<ComiteItemI> = [];
        array = [...listComite.slice(0, idx), ...listComite.slice(idx + 1)]
        setListComite(array);
    }
    const editModeGouvernanaceHandler = (item: ComiteItemI) => {
        // console.log("the item : ", item)
    }

    const editModeGouvernanceItem = (object: itemModeGouvernanceProps) => {
        console.log("the index : ", object.idxItem)
        console.log("the item : ", object.itemModeGouvernance)
        var tempArray: ComiteItemI[] = [];
        tempArray = [...listComite];
        const newState = tempArray.map((obj, index) => {
            if (index.toString() === object.idxItem) {
                return { ...obj, idModeGouvernanace: object?.itemModeGouvernance?.id, nameMode: object?.itemModeGouvernance?.name };
            }
            return obj;
        });
        console.log(newState)
        setListComite(newState);
    }

    const editFrequenceItem = (object: itemFrequenceProps) => {
        console.log("the index : ", object.idxItem)
        console.log("the item : ", object.itemFrequence);

        var tempArray: ComiteItemI[] = [];
        tempArray = [...listComite];
        const newState = tempArray.map((obj, index) => {
            if (index.toString() === object.idxItem) {
                return { ...obj, idFreq: object?.itemFrequence.id, valFreq: object?.itemFrequence?.valFrequence };
            }
            return obj;
        });
        console.log(newState)
        setListComite(newState);

    }


    const onClickPrevStep7 = () => {
        dispatch(setNumStepAction(5))
    }

    const onClickNextStep7 = () => {
        dispatch(editListComiteAction(listComite));
        dispatch(setNumStepAction(8))
    }

    const onClickSaveStep7 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep7 = () => {
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep7 = () => {
        dispatch(editListComiteAction(listComite));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        setListComite(list_comites_store);
    }, [
        num_current_step_store
    ])
    return (
        <div className='container-step7-conv-regionale-specifique'
            style={{ display: num_current_step_store == 6 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_7}
                numStep={7}
            />

            <div className='container-add-axe'>
                <div className='txt-add-axe'></div>
                <MainButton
                    onClick={addModeGouvernanaceHandler}
                    className='btn-add-axe'
                    label="Ajouter un comit??"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>

            <Grid container spacing={1} style={{ marginTop: "5px" }}>
                <Grid item xs={true} >
                    <div className='div-title-select'>Mode de gouvernance</div>
                </Grid>
                <Grid item xs={true} >
                    <div className='div-title-select'>Fr??quence</div>
                </Grid>
                <Grid item style={{ paddingTop: "36px" }}>
                    <div style={{ width: "50px", margin: "0px 4px" }}></div>
                </Grid>
            </Grid>

            {listComite.map((item: ComiteItemI, index: number) => (
                <ItemComite
                    key={index.toString()}
                    id={index.toString()}
                    idModeGouvernance={item.idModeGouvernanace}
                    nameModeGouvernance={item.nameMode}
                    idFreq={item.idFreq}
                    valFreq={item.valFreq}
                    deleteMode={() => { deleteModeGouvernanaceHandler(index) }}
                    // editMode={() => { editModeGouvernanaceHandler(item) }}
                    editModeGouvernanceItem={editModeGouvernanceItem}
                    editFrequenceItem={editFrequenceItem}
                />
            ))}

            <FooterStep
                onClickPrev={onClickPrevStep7}
                onClickNext={onClickNextStep7}
                onClickSave={onClickSaveStep7}
                onClickAnnuler={onClickAnnulerStep7}
                onClickModifier={onClickModifierStep7}
            />

        </div>
    );
}

export default Step7;