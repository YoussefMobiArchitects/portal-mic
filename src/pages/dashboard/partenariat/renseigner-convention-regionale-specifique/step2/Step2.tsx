import { Grid, InputBase, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
    HeaderStep,
    MainButton,
    MainButtonIcon
} from '../../../../../components';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import "./step2.scss";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { editObjetObjectifsAction, isEditRenseignerConvAction, ObjetbjectifsConvI, setNumStepAction } from "../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer";
import { reverseArray } from "../../../../../utils/reverseArray";
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}


function Step2() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const [objetConvention, setObjetConvention] = useState<string>('');
    const [listObjectif, setListObjectif] = useState<string[]>([]);
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
                placeholder="Objectif"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleOnChangeInputBase}
                value={valueInput}
            />
        )
    }


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObjetConvention(event.target.value);
        console.log(event.target.value);
    };

    const addObjectifHandler = () => {
        setListObjectif([...listObjectif, ""])
    }

    const deleteObjectifHandler = (idx: number) => {
        let array: Array<string> = [];
        array = [...listObjectif.slice(0, idx), ...listObjectif.slice(idx + 1)]
        setListObjectif(array);
    }

    const onChangelistObjectif = (val: any, id: string) => {
        let tempArray = listObjectif;
        tempArray[parseInt(id)] = val;
        setListObjectif(tempArray);
    }

    const onClickPrevStep2 = () => {
        dispatch(setNumStepAction(0))
    }

    const onClickNextStep2 = () => {
        let objObectifs = {} as ObjetbjectifsConvI;
        objObectifs = { objet: objetConvention, listObjectif: listObjectif.filter(res => res != "") };
        dispatch(editObjetObjectifsAction(objObectifs));
        dispatch(setNumStepAction(2))
    }

    const onClickSaveStep2 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep2 = () => {
        // dispatch(setNumStepAction(7))
        // dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep2 = () => {
        let objObectifs = {} as ObjetbjectifsConvI;
        objObectifs = { objet: objetConvention, listObjectif: listObjectif.filter(res => res != "") };
        dispatch(editObjetObjectifsAction(objObectifs));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    useEffect(() => {

    }, [listObjectif])

    return (
        <div className='container-step2-conv-regionale-specifique'
            style={{ display: num_current_step_store == 1 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_2}
                numStep={2}
            />

            <div className='txt-obj-conv'>Objet de la convention</div>
            <TextField
                placeholder="Objet de la convention"
                multiline
                rows={4}
                style={{ width: "100%" }}
                onChange={handleOnChange}
                ref={textFieldRef}
                value={objetConvention}
            />

            <div className='container-add-obj'>
                <div className='txt-add-obj'>Objectifs</div>
                <MainButton
                    onClick={addObjectifHandler}
                    className='btn-add-objectif'
                    label="Ajouter un objectif"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>

            <div>
                {listObjectif.map((item: string, index: number) => (
                    <Grid container spacing={1} key={index} style={{ marginBottom: "15px" }}>
                        <Grid item xs={true}>
                            <div className='item-obj'>
                                <div className='container-icon-target'><TrackChangesOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                {/* <div className='txt-obj-item'>{item}</div> */}
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
                onClickPrev={onClickPrevStep2}
                onClickNext={onClickNextStep2}
                onClickSave={onClickSaveStep2}
                onClickAnnuler={onClickAnnulerStep2}
                onClickModifier={onClickModifierStep2}
            />
        </div>
    );
}

export default Step2;