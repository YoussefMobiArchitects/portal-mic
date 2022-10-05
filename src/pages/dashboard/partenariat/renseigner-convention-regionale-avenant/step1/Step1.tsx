import React, { useRef } from 'react';
import "./step1.scss";
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { isEditRenseignerConvAction, setNumStepAction } from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';
import { FooterStep } from '../RenseignerConventionRegionaleAvenant';
import { HeaderStep } from '../../../../../components';
import { Grid } from '@mui/material';
import { StyledDisabledTextField } from '../../../../../components/styledComponents';
import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';

function Step1() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);
    const info_generale_renseigner_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.infoGeneraleRenseignerConvRegionaleAvenant);

    /* #region TYPE CONVENTION  */
    const [typeConvention, setTypeConvention] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameTypeConvention);
    /* #endregion */
    /* #region REGION  */
    const [region, setRegion] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameRegion);
    /* #endregion */
    /* #region PROVINCE  */
    const [province, setProvince] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameProvince);
    /* #endregion */
    /* #region Secteur  */
    const [secteur, setSecteur] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameSecteur);
    /* #endregion */
    /* #region Dimension Royale  */
    const [isDimensionRoyale, setIsDimensionRoyale] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.isDimensionRoya);
    /* #endregion */
    /* #region contexte convention cadre  */
    const [ctxConvCadre, setCtxConvCadre] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.ctxConventionCadre);
    /* #endregion */
    /* #region Intitulé de la convention spécifique  */
    const [intituleConventionSpecifique, setIntituleConventionSpecifique] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.intituleConventionSpecifique);
    /* #endregion */
    /* #region Dernière convention à modifier par l’avenant  */
    const [derniereConventionModifierParAvenant, setDerniereConventionModifierParAvenant] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.derniereConventionModifierParAvenant);
    /* #endregion */
    /* #region Convention Avenant…  */
    const [intituleAvenant, setIntituleAvenant] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.intituleAvenant);
    /* #endregion */
    /* #region Date Signature  */
    const [dateSignature, setDateSignature] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.dateSignature);
    /* #endregion */
    /* #region Date Signature  */
    const [dateFinEffective, setDateFinEffective] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.dateFinEffective);
    /* #endregion */
    const onClickPrevStep1 = () => {
        dispatch(setNumStepAction(0))
    }
    // num_current_step_store
    const onClickNextStep1 = () => {
        // dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
        dispatch(setNumStepAction(1))
    }

    const onClickSaveStep1 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep1 = () => {
        // dispatch(setNumStepAction(7))
        // dispatch(isEditRenseignerConvAction(false));
    }
    const onClickModifierStep1 = () => {
        // dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
        dispatch(setNumStepAction(9))
        dispatch(isEditRenseignerConvAction(false));
    }

    return (
        <div className='container-step1-conv-regionale-avenant'
            style={{ display: num_current_step_store == 0 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_1}
                numStep={1}
            />
            <Grid container spacing={3} style={{ marginTop: "5px" }}>

                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* TYPE CONVENTION */}
                    <div className='title-input'>Type de la convention</div>
                    <StyledDisabledTextField
                        value={typeConvention}
                        placeholder="Type de la convention"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* REGION */}
                    <div className='title-input'>Région*</div>
                    <StyledDisabledTextField
                        value={region}
                        placeholder="Région*"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* PROVINCE */}
                    <div className='title-input'>Province*</div>
                    <StyledDisabledTextField
                        value={province}
                        placeholder="Province*"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Secteur */}
                    <div className='title-input'>Secteur</div>
                    <StyledDisabledTextField
                        value={secteur}
                        placeholder="Secteur"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Dimension Royale */}
                    <div className='title-input'>Dimension Royale</div>
                    <StyledDisabledTextField
                        value={isDimensionRoyale ? "Oui" : "Non"}
                        placeholder="Dimension Royale"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Contexte de la convention cadre */}
                    <div className='title-input'>Contexte de la convention cadre</div>
                    <StyledDisabledTextField
                        value={ctxConvCadre}
                        placeholder="Contexte de la convention cadre"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* l’intitulé de la convention spécifique y afférente */}
                    <div className='title-input'>l’intitulé de la convention spécifique y afférente</div>
                    <StyledDisabledTextField
                        value={intituleConventionSpecifique}
                        placeholder="l’intitulé de la convention spécifique y afférente"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Dernière convention à modifier par l’avenant */}
                    <div className='title-input'>Dernière convention à modifier par l’avenant</div>
                    <StyledDisabledTextField
                        value={derniereConventionModifierParAvenant}
                        placeholder="Dernière convention à modifier par l’avenant"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Intitulé de l’avenant */}
                    <div className='title-input'>Intitulé de l’avenant</div>
                    <StyledDisabledTextField
                        value={intituleAvenant}
                        placeholder="Intitulé de l’avenant"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Date de la signature */}
                    <div className='title-input'>Date de la signature</div>
                    <StyledDisabledTextField
                        value={dateSignature}
                        placeholder="Date de la signature"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Date fin effective */}
                    <div className='title-input'>Date fin effective</div>
                    <StyledDisabledTextField
                        value={dateFinEffective}
                        placeholder="Date fin effective"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                    <div className='div-txt-date-fin-effective'>Date fin effective sera remplie à la fin </div>
                </Grid>
            </Grid>
            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep1}
                onClickNext={onClickNextStep1}
                onClickSave={onClickSaveStep1}
                onClickAnnuler={onClickAnnulerStep1}
                onClickModifier={onClickModifierStep1}
            />
        </div>
    );
}

export default Step1;