import React, { useState } from 'react';
import "./styles.scss"
import {
    HeaderStep,
    MainButton,
    ModalAddAxe,
    ModalEditAxe
} from '../../../../../components';
import { StepRenseignerConventionRegionaleCadre } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Grid } from '@mui/material';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { addListAxesAction, isEditRenseignerConvAction, setNumStepAction, totalAxesAction } from "../../../../../redux/reducers/renseignerConvRegionaleCadreReducer";
import { AxeI } from "../../../../../models/axe"
import { FooterStep } from '../RenseignerConventionRegionaleCadre';

function Step3() {
    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const axes_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.axes);
    const total_axes_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.totalAxes);
    const [axes, setAxes] = useState<AxeI[]>([
        {
            id: "1",
            nameAxe: "axe1",
            cout: "20",
            nbrDomaine: "3",
            nbrProgProj: "2"
        },
        {
            id: "2",
            nameAxe: "axe2",
            cout: "30",
            nbrDomaine: "3",
            nbrProgProj: "2"
        }
    ])


    /* #region  ADD AXE */
    const [openModalAddAxe, setOpenModalAddAxe] = React.useState(false);
    const handleOpenModalAddAxe = () => setOpenModalAddAxe(true);
    const handleCloseModalAddAxe = () => setOpenModalAddAxe(false);
    const handleAddAxe = (item: any) => {
        console.log("pressed", item);
        setAxes([...axes, item])
        handleCloseModalAddAxe()
    }
    /* #endregion */

    /* #region  EDIT AXE */
    const [openModalEditAxe, setOpenModalEditAxe] = React.useState(false);
    const handleOpenModalEditAxe = () => setOpenModalEditAxe(true);
    const handleCloseModalEditAxe = () => setOpenModalEditAxe(false);

    const handleEditAxe = (item: AxeI) => {
        console.log("pressed", item);
        let tempArray: AxeI[] = [];
        tempArray = [...axes];
        let objIndex = tempArray.findIndex((obj => obj.id === item.id));
        tempArray[objIndex] = { id: item.id, cout: item.cout, nameAxe: item.nameAxe, nbrDomaine: item.nbrDomaine, nbrProgProj: item.nbrProgProj };
        setAxes(tempArray);
        handleCloseModalEditAxe()
    }
    const [selectedAxe, setSelectedAxe] = React.useState<AxeI>({ id: "", nameAxe: "", cout: "", nbrDomaine: "", nbrProgProj: "" });
    const onClickEditHandler = (item: AxeI) => {
        handleOpenModalEditAxe();
        setSelectedAxe(item);
        console.log(item)
    }
    /* #endregion */

    const onClickPrevStep3 = () => {
        dispatch(setNumStepAction(1))
    }

    const onClickNextStep3 = () => {
        dispatch(addListAxesAction(axes));
        dispatch(setNumStepAction(3));
    }

    const onClickSaveStep3 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep3 = ()=>{
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep3 = ()=>{
        dispatch(addListAxesAction(axes));
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        dispatch(totalAxesAction())
    }, [])


    return (
        <div className='container-step3'
            style={{ display: num_current_step_store == 2 ? "block" : "none" }}
        >
            <ModalAddAxe
                isOpen={openModalAddAxe}
                onClickClose={handleCloseModalAddAxe}
                onClickAdd={handleAddAxe}
            />
            <ModalEditAxe
                isOpen={openModalEditAxe}
                onClickClose={handleCloseModalEditAxe}
                onClickEdit={handleEditAxe}
                axeObject={selectedAxe}
            />

            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_3}
                numStep={3}
            />

            <div className='container-add-axe'>
                <div className='txt-add-axe'>Axes</div>
                <MainButton
                    onClick={handleOpenModalAddAxe}
                    className='btn-add-axe'
                    label="Ajouter un axe"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>


            {/* HEADER TABLE */}
            <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "25px" }}>
                <Grid item xs={4} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Nom d’axe</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Coût</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Nombre de domaines</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Nombre de programmes/projets</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                </Grid>
            </Grid>
            {/* BODY TABLE */}
            {
                axes.map((item, index) => (
                    <div className='container-axe-item' key={`index-${item.id}`}>
                        <Grid container spacing={1} className="grid-item-axe">
                            <Grid item xs={4} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='container-icon-target'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                    <div className='txt-obj-item'>{item.nameAxe}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.cout}MDH</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.nbrDomaine}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.nbrProgProj}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>
                                <MainButton
                                    onClick={() => { onClickEditHandler(item) }}
                                    className='btn-edit-axe'
                                    label='Modifier'
                                    startIcon={<BorderColorOutlinedIcon />}
                                />
                            </Grid>
                        </Grid>
                    </div>
                ))
            }
            {/* TOTAL */}
            <div className='container-total-axes'>
                <Grid container spacing={1} className="grid-item-axe">
                    <Grid item xs={4} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='container-hidden-icon'></div>
                            <div className='txt-div-totals'>{axes.length} axes</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-div-totals'>{axes.reduce((accumulator, obj) => {
                                return accumulator + parseInt(obj.cout);
                            }, 0)}MDH</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-div-totals'>{axes.reduce((accumulator, obj) => {
                                return accumulator + parseInt(obj.nbrDomaine);
                            }, 0)}</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-div-totals'>{axes.reduce((accumulator, obj) => {
                                return accumulator + parseInt(obj.nbrProgProj);
                            }, 0)}</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                    </Grid>
                </Grid>
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