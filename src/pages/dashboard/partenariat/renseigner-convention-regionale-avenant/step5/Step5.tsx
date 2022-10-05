import React, { useState } from 'react';
import "./step5.scss";
import { HeaderStep, MainButton, ModalAjouterDomiciliation } from '../../../../../components';
import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { FooterStep } from '../RenseignerConventionRegionaleAvenant';
import {
    setNumStepAction,
    isEditRenseignerConvAction,
    setTypeModificationConvAvenantAction,
    setTypeEngagementFinancierConvAvenantAction,
    editObjetObjectifsAction,
    ObjetbjectifsConvI,
    setAutreAspectAction,
    editListConsistanceAction,
    editListDomiciliationContributionAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';
import { DomiciliationContributionI } from '../../../../../models/domiciliationContribution';
import { Grid } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

function Step5() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);
    const list_domiciliation_contribution_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.listDomiciliationContribution);
    const [listDomiciliationContribution, setListDomiciliationContribution] = useState<DomiciliationContributionI[]>(list_domiciliation_contribution_store)

    const onClickPrevStep5 = () => {
        dispatch(setNumStepAction(3))
    }

    const onClickNextStep5 = () => {
        dispatch(editListDomiciliationContributionAction(listDomiciliationContribution));
        dispatch(setNumStepAction(5));
    }

    const onClickSaveStep5 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep5 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep5 = () => {
        dispatch(editListDomiciliationContributionAction(listDomiciliationContribution));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    /* #region  Modal Ajouter Domiciliation */
    const [openModalAjouterDomiciliation, setOpenModalAjouterDomiciliation] = React.useState(false);
    const handleOpenModalAjouterDomiciliation = () => setOpenModalAjouterDomiciliation(true);
    const handleCloseModalAjouterDomiciliation = () => setOpenModalAjouterDomiciliation(false);

    const handleAjouterDomiciliation = (item: DomiciliationContributionI) => {
        console.log("pressed", item);
        setListDomiciliationContribution([...listDomiciliationContribution, item])
        handleCloseModalAjouterDomiciliation()
    }
    /* #endregion */

    React.useEffect(() => {
        setListDomiciliationContribution(list_domiciliation_contribution_store);
    }, [
        num_current_step_store
    ])


    return (
        <div className='container-step5-conv-regionale-avenant'
            style={{ display: num_current_step_store == 4 ? "block" : "none" }}
        >
            <ModalAjouterDomiciliation
                isOpen={openModalAjouterDomiciliation}
                onClickClose={handleCloseModalAjouterDomiciliation}
                onClickAdd={handleAjouterDomiciliation}
            />

            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_5}
                numStep={5}
            />

            <div className='container-add-axe'>
                <div className='txt-add-axe'>Domiciliation des contributions</div>
                <MainButton
                    onClick={handleOpenModalAjouterDomiciliation}
                    className='btn-add-axe'
                    label="Ajouter domiciliation"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>
            {/* HEADER */}
            <Grid container spacing={1} className="grid-item-axe">
                <Grid item xs={2} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table' style={{ margin: "0px 15px" }}>Convention</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Article de la convention</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Organisme bénéficiaire</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>RIB</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe">
                    <div className='container-name-axe'>
                        <div className='txt-header-table'>Autres informations</div>
                    </div>
                </Grid>
                <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                </Grid>
            </Grid>
            {/* BODY */}
            {
                listDomiciliationContribution.map((item, index) => (
                    <div className='container-axe-item' key={`index-${item.id}`}>
                        <Grid container spacing={1} className="grid-item-axe">
                            <Grid item xs={2} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item' style={{ margin: "0px 15px" }}>Cadre</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.articleConvention}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.organismeBeneficiaire}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.rib}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe">
                                <div className='container-name-axe'>
                                    <div className='txt-obj-item'>{item.autreInfo}</div>
                                </div>
                            </Grid>
                            <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>
                                <MainButton
                                    onClick={() => { console.log(item) }}
                                    className='btn-edit-axe'
                                    label='Modifier'
                                    startIcon={<BorderColorOutlinedIcon />}
                                />
                            </Grid>
                        </Grid>
                    </div>
                ))
            }
            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep5}
                onClickNext={onClickNextStep5}
                onClickSave={onClickSaveStep5}
                onClickAnnuler={onClickAnnulerStep5}
                onClickModifier={onClickModifierStep5}
            />
        </div>
    );
}

export default Step5;