import React, { useEffect, useState } from 'react';
import "./step3.scss"
import { HeaderStep, MainButton, MainButtonIcon } from '../../../../../components';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { Grid, InputBase } from '@mui/material';
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import { editListConsistanceAction, setNumStepAction ,isEditRenseignerConvAction} from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}

function Step3() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);

    const [listConsistance, setListConsistance] = useState<string[]>([]);

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
                placeholder="Consistance"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleOnChangeInputBase}
                value={valueInput}
            />
        )
    }

    const addConsistanceHandler = () => {
        setListConsistance([...listConsistance, ""])
    }

    const deleteConsistanceHandler = (idx: number) => {
        let array: Array<string> = [];
        array = [...listConsistance.slice(0, idx), ...listConsistance.slice(idx + 1)]
        setListConsistance(array);
    }

    const onChangelistConsistance = (val: any, id: string) => {
        let tempArray = listConsistance;
        tempArray[parseInt(id)] = val;
        setListConsistance(tempArray);
    }


    const onClickPrevStep3 = () => {
        dispatch(setNumStepAction(1))
    }

    const onClickNextStep3 = () => {
        let array = {} as string[];
        array = listConsistance.filter(res => res != "");
        dispatch(editListConsistanceAction(array));
        dispatch(setNumStepAction(3))
    }

    const onClickSaveStep3 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep3 = () => {
        // dispatch(setNumStepAction(7))
        // dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep3 = () => {
        let array = {} as string[];
        array = listConsistance.filter(res => res != "");
        dispatch(editListConsistanceAction(array));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    useEffect(() => {

    }, [listConsistance])

    return (
        <div className='container-step3-conv-regionale-specifique'
            style={{ display: num_current_step_store == 2 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_3}
                numStep={3}
            />

            <div className='container-add-obj'>
                <div className='txt-add-obj'></div>
                <MainButton
                    onClick={addConsistanceHandler}
                    className='btn-add-objectif'
                    label="Ajouter"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>


            <div>
                {listConsistance.map((item: string, index: number) => (
                    <Grid container spacing={1} key={index} style={{ marginBottom: "15px" }}>
                        <Grid item xs={true}>
                            <div className='item-obj'>
                                <div className='container-icon-target'><SyncAltOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                {/* <div className='txt-obj-item'>{item}</div> */}
                                <CustomInputBase
                                    value={item}
                                    onChangeList={onChangelistConsistance}
                                    id={index.toString()}
                                />
                            </div>
                        </Grid>
                        <Grid item >
                            <div>
                                <MainButtonIcon
                                    onClick={() => { deleteConsistanceHandler(index) }}
                                    className='btn-delete-obj'
                                    lchildren={<DeleteOutlineIcon />}
                                />
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </div>

            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep3}
                onClickNext={onClickNextStep3}
                onClickSave={onClickSaveStep3}
                onClickAnnuler={onClickAnnulerStep3}
                onClickModifier={onClickModifierStep3}
            />

        </div>
    );
}

export default Step3;