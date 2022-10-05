import React, { useState } from 'react';
import {
    HeaderStep,
    MainButton,
    SelectCustom,
    MainButtonIcon
} from '../../../../../components';
import { StepRenseignerConventionRegionaleCadre } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import "./styles.scss";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Grid, MenuItem } from '@mui/material';
import { LIST_TYPE_MODE_GOUVERNANCE, LIST_FREQUENCE } from "../../../../../constants/DataConstants";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
    addModeGouvernanaceAction,
    deleteModeGouvernanaceAction,
    editListModeGouvernanaceAction,
    editModeGouvernanaceAction,
    getListModeGouvernanaceAction,
    isEditRenseignerConvAction,
    setNumStepAction
} from "../../../../../redux/reducers/renseignerConvRegionaleCadreReducer";
import { ComiteItemI } from '../../../../../models/comiteItem';
import { reverseArray } from "../../../../../utils/reverseArray";
import { FooterStep } from '../RenseignerConventionRegionaleCadre';


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

function Step6() {


    const ItemModeGouvernance = ({ id, idModeGouvernance, nameModeGouvernance, idFreq, valFreq, deleteMode, editModeGouvernanceItem, editFrequenceItem }: Props) => {

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
            // editMode({ id: id, idModeGouvernanace: item.id, nameMode: item.name, idFreq: selectedFrequence.id, valFreq: selectedFrequence.name })
            // dispatch(editModeGouvernanaceAction({ id: id, idModeGouvernanace: item.id, nameMode: item.name, idFreq: selectedFrequence.id, valFreq: selectedFrequence.name }))
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
            // editMode({ id: id, idModeGouvernanace: selectedModeGouvernance.id, nameMode: selectedModeGouvernance.name, idFreq: item.id, valFreq: item.valFreq })
            // dispatch(editModeGouvernanaceAction({ id: id, idModeGouvernanace: selectedModeGouvernance.id, nameMode: selectedModeGouvernance.name, idFreq: item.id, valFreq: item.valFrequence }))
        }
        /* #endregion */

        // const editModeGouvernanaceHandler = (item: ComiteItemI) => {
        //     console.log("the item", item)
        // }

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
                            isShowTitleSelect={true}
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
                            titleSelect="Fréquence"
                            isShowTitleSelect={true}
                            txtPlaceholder="Fréquence"
                        >
                            {LIST_FREQUENCE.map((freq: any) => (
                                <MenuItem className='item-region' key={freq.id} value={freq.valFrequence} onClick={() => selectFrequenceHandler(freq)}>
                                    {freq.valFrequence}
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item style={{ paddingTop: "36px" }}>
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
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const list_comites_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.listComites);
    const [listModeGouvernance, setListModeGouvernance] = useState<ComiteItemI[]>(list_comites_store);

    console.log("6>>>>>>>", listModeGouvernance);
    console.log("66>>>>>>>", list_comites_store);

    const addModeGouvernanaceHandler = () => {
        // dispatch(addModeGouvernanaceAction({
        //     id: Date.now().toString(),
        //     idModeGouvernanace: LIST_TYPE_MODE_GOUVERNANCE[1].id,
        //     nameMode: LIST_TYPE_MODE_GOUVERNANCE[1].name,
        //     idFreq: LIST_FREQUENCE[1].id,
        //     valFreq: LIST_FREQUENCE[1].valFrequence
        // }))

        setListModeGouvernance([...listModeGouvernance, {
            id: Date.now().toString(),
            idModeGouvernanace: LIST_TYPE_MODE_GOUVERNANCE[1].id,
            nameMode: LIST_TYPE_MODE_GOUVERNANCE[1].name,
            idFreq: LIST_FREQUENCE[1].id,
            valFreq: LIST_FREQUENCE[1].valFrequence
        }])

    }

    // const deleteModeGouvernanaceHandler = (item: ComiteItemI) => {
    //     dispatch(deleteModeGouvernanaceAction(item.id));
    //     console.log(list_comites_store)
    //     let array: Array<string> = [];
    // }

    const deleteModeGouvernanaceHandler = (idx: number) => {
        let array: Array<ComiteItemI> = [];
        array = [...listModeGouvernance.slice(0, idx), ...listModeGouvernance.slice(idx + 1)]
        setListModeGouvernance(array);
    }
    const editModeGouvernanaceHandler = (item: ComiteItemI) => {
        // console.log("the item : ", item)
    }

    const editModeGouvernanceItem = (object: itemModeGouvernanceProps) => {
        console.log("the index : ", object.idxItem)
        console.log("the item : ", object.itemModeGouvernance)
        var tempArray: ComiteItemI[] = [];
        tempArray = [...listModeGouvernance];
        const newState = tempArray.map((obj, index) => {
            if (index.toString() === object.idxItem) {
                return { ...obj, idModeGouvernanace: object?.itemModeGouvernance?.id, nameMode: object?.itemModeGouvernance?.name };
            }
            return obj;
        });
        console.log(newState)
        setListModeGouvernance(newState);
    }

    const editFrequenceItem = (object: itemFrequenceProps) => {
        console.log("the index : ", object.idxItem)
        console.log("the item : ", object.itemFrequence);

        var tempArray: ComiteItemI[] = [];
        tempArray = [...listModeGouvernance];
        const newState = tempArray.map((obj, index) => {
            if (index.toString() === object.idxItem) {
                return { ...obj, idFreq: object?.itemFrequence.id, valFreq: object?.itemFrequence?.valFrequence };
            }
            return obj;
        });
        console.log(newState)
        setListModeGouvernance(newState);

    }

    const onClickPrevStep6 = () => {
        dispatch(setNumStepAction(4))
    }

    const onClickNextStep6 = () => {
        dispatch(editListModeGouvernanaceAction(listModeGouvernance));
        dispatch(setNumStepAction(6));
    }

    const onClickSaveStep6 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep6 = ()=>{
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep6 = ()=>{
        dispatch(editListModeGouvernanaceAction(listModeGouvernance));
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        setListModeGouvernance(list_comites_store);
    }, [
        num_current_step_store
    ])

    return (
        <div className='container-step6'
            style={{ display: num_current_step_store == 5 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_6}
                numStep={6}
            />

            <div className='container-add-axe'>
                <div className='txt-add-axe'></div>
                <MainButton
                    onClick={addModeGouvernanaceHandler}
                    className='btn-add-axe'
                    label="Ajouter un comité"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>

            {listModeGouvernance.map((item: ComiteItemI, index: number) => (
                <ItemModeGouvernance
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
            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep6}
                onClickNext={onClickNextStep6}
                onClickSave={onClickSaveStep6}
                onClickAnnuler={onClickAnnulerStep6}
                onClickModifier={onClickModifierStep6}
            />
        </div>
    );
}

export default Step6;