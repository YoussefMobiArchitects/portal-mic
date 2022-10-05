import React, { useState } from 'react';
import {
    HeaderStep,
    MainButton,
    ModalAjouterDomiciliation,
} from '../../../../../components';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import "./step4.scss";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Grid } from '@mui/material';
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import { editListDomiciliationContributionAction, isEditRenseignerConvAction, setNumStepAction } from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import { DomiciliationContributionI } from '../../../../../models/domiciliationContribution';


function Step4() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const list_domiciliation_contribution_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listDomiciliationContribution);

    const [listDomiciliationContribution, setListDomiciliationContribution] = useState<DomiciliationContributionI[]>(list_domiciliation_contribution_store)

    const onClickPrevStep4 = () => {
        dispatch(setNumStepAction(2))
    }

    const onClickNextStep4 = () => {
        dispatch(editListDomiciliationContributionAction(listDomiciliationContribution));
        dispatch(setNumStepAction(4));
    }

    const onClickSaveStep4 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep4 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep4 = () => {
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
        <div className='container-step4-conv-regionale-specifique'
            style={{ display: num_current_step_store == 3 ? "block" : "none" }}
        >
            <ModalAjouterDomiciliation
                isOpen={openModalAjouterDomiciliation}
                onClickClose={handleCloseModalAjouterDomiciliation}
                onClickAdd={handleAjouterDomiciliation}
            />
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_4}
                numStep={4}
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
                onClickPrev={onClickPrevStep4}
                onClickNext={onClickNextStep4}
                onClickSave={onClickSaveStep4}
                onClickAnnuler={onClickAnnulerStep4}
                onClickModifier={onClickModifierStep4}
            />
        </div>
    );
}

export default Step4;