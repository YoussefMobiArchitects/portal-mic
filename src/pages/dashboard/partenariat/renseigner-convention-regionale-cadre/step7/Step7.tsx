import { Grid, InputBase, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    HeaderStep,
    MainButton,
    MainButtonIcon
} from '../../../../../components';
import { StepRenseignerConventionRegionaleCadre } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import "./styles.scss";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { addRemarqueAction, deleteRemarqueAction, editListRemarqueAction, isEditRenseignerConvAction, setNumStepAction } from "../../../../../redux/reducers/renseignerConvRegionaleCadreReducer";
import { reverseArray } from "../../../../../utils/reverseArray";
import { FooterStep } from '../RenseignerConventionRegionaleCadre';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}

function Step7() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const remarques_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.remarques);
    const [listRemarque, setListRemarque] = useState<string[]>(remarques_store);
    const textFieldRef = React.useRef<HTMLInputElement>(null);

    const CustomInputBase = ({ value, onChangeList, id }: PropsInputBase) => {
        const [valueInput, setValueInput] = useState(value);

        const handleOnChangeInputBase = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValueInput(event.target.value);
            onChangeList(event.target.value, id)
        };

        useEffect(() => {
            setValueInput(value);
        }, [])

        return (
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Remarques/observations"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleOnChangeInputBase}
                value={valueInput}
            />
        )
    }

    const addRemarqueHandler = () => {
        setListRemarque([...listRemarque, ""])
    }

    const deleteObjectifHandler = (idx: number) => {
        let array: Array<string> = [];
        array = [...listRemarque.slice(0, idx), ...listRemarque.slice(idx + 1)]
        setListRemarque(array);
    }

    const onChangelistObjectif = (val: any, id: string) => {
        let tempArray = listRemarque;
        tempArray[parseInt(id)] = val;
        setListRemarque(tempArray);
    }



    // const addRemarqueHandler = () => {
    //     if (remarque != "") {
    //         dispatch(addRemarqueAction(remarque));
    //         setRemarque("");
    //     }
    // }

    // const deleteRemarqueHandler = (obj: string) => {
    //     dispatch(deleteRemarqueAction(obj))
    // }

    const onClickPrevStep7 = () => {
        dispatch(setNumStepAction(5))
    }

    const onClickNextStep7 = () => {
        dispatch(editListRemarqueAction(listRemarque));
        dispatch(setNumStepAction(7))
    }

    const onClickSaveStep7 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep7 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep7 = () => {
        dispatch(editListRemarqueAction(listRemarque));
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        setListRemarque(remarques_store);
    }, [
        num_current_step_store
    ])

    return (
        <div className='container-step7'
            style={{ display: num_current_step_store == 6 ? "block" : "none" }}
        >

            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_7}
                numStep={7}
            />

            <div className='container-add-remarque'>
                <div className='txt-add-remarque'>Remarques/observations</div>
                <MainButton
                    onClick={addRemarqueHandler}
                    className='btn-add-remarque'
                    label="Ajouter une remarque"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                {listRemarque.map((item: string, index: number) => (
                    <Grid container spacing={1} key={index} style={{ marginBottom: "15px" }}>
                        <Grid item xs={true}>
                            <div className='item-remarque'>
                                <div className='container-icon-target'><TrackChangesOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                {/* <div className='txt-remarque-item'>{item}</div> */}
                                <CustomInputBase
                                    value={item}
                                    onChangeList={onChangelistObjectif}
                                    id={index.toString()}
                                />
                            </div>
                        </Grid>
                        <Grid item >
                            <div>
                                <MainButtonIcon
                                    onClick={() => { deleteObjectifHandler(index) }}
                                    className='btn-delete-remarque'
                                    lchildren={<DeleteOutlineIcon />}
                                />
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </div>

            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep7}
                onClickNext={onClickNextStep7}
                onClickSave={onClickSaveStep7}
                onClickAnnuler={onClickAnnulerStep7}
                onClickModifier={onClickModifierStep7}
            />
        </div >
    );
}

export default Step7;