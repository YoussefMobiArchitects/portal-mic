import React, { useEffect, useState } from 'react';
import "./step9.scss";
import { HeaderStep, MainButton, MainButtonIcon } from '../../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';
import {
    isEditRenseignerConvAction,
    setNumStepAction,
    editListRemarqueAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';
import { FooterStep } from '../RenseignerConventionRegionaleAvenant';
import { Grid, InputBase } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}

function Step9() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);
    const remarques_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.remarques);
    const [listRemarque, setListRemarque] = useState<string[]>(remarques_store);

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

    const onClickPrevStep9 = () => {
        dispatch(setNumStepAction(7))
    }

    const onClickNextStep9 = () => {
        dispatch(editListRemarqueAction(listRemarque));
        dispatch(setNumStepAction(9))
    }

    const onClickSaveStep9 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep9 = () => {
        dispatch(setNumStepAction(9))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep9 = () => {
        dispatch(editListRemarqueAction(listRemarque));
        dispatch(setNumStepAction(9))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        setListRemarque(remarques_store);
    }, [
        num_current_step_store
    ])

    return (
        <div className='container-step9-conv-regionale-avenant'
            style={{ display: num_current_step_store == 8 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_9}
                numStep={9}
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

            <FooterStep
                onClickPrev={onClickPrevStep9}
                onClickNext={onClickNextStep9}
                onClickSave={onClickSaveStep9}
                onClickAnnuler={onClickAnnulerStep9}
                onClickModifier={onClickModifierStep9}
            />

        </div>
    );
}

export default Step9;