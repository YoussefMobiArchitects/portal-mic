import React, { useEffect, useState } from 'react';
import "./step8.scss";
import { HeaderStep, MainButton, MainButtonIcon } from '../../../../../components';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { 
    isEditRenseignerConvAction, 
    setNumStepAction,
    editListRemarqueAction,
 } from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import { Grid, InputBase } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}

function Step8() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const remarques_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.remarques);
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

    const onClickPrevStep8 = () => {
        dispatch(setNumStepAction(6))
    }

    const onClickNextStep8 = () => {
        dispatch(editListRemarqueAction(listRemarque));
        dispatch(setNumStepAction(8))
    }

    const onClickSaveStep8 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep8 = () => {
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep8 = () => {
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
        <div className='container-step8-conv-regionale-specifique'
            style={{ display: num_current_step_store == 7 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_8}
                numStep={8}
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
                onClickPrev={onClickPrevStep8}
                onClickNext={onClickNextStep8}
                onClickSave={onClickSaveStep8}
                onClickAnnuler={onClickAnnulerStep8}
                onClickModifier={onClickModifierStep8}
            />
        </div>
    );
}

export default Step8;