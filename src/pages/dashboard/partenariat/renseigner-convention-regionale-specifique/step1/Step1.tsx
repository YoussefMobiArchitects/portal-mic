import styled from '@emotion/styled';
import { Grid, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { HeaderStep, InputDatePicker, SelectCustom } from '../../../../../components';
import { LIST_PROVINCE, LIST_REGION, LIST_TYPE_CONVENTION } from '../../../../../constants/DataConstants';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';
import "./step1.scss";
import {
    StyledDisabledTextField
} from "../../../../../components/styledComponents";
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import {
    InfoGeneraleRenseignerConvRegionaleSpecifiqueI,
    setNumStepAction,
    editAnneeFinPrevAction,
    isEditRenseignerConvAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import moment from 'moment';

function Step1() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const info_generale_renseigner_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.infoGeneraleRenseignerConvRegionaleSpecifique);

    
    /* #region REGION  */
    const refRegion = useRef<HTMLInputElement>(null);
    const [region, setRegion] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameRegion);
    const handleChangeInputRegion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region TYPE CONVENTION  */
    const refTypeConvention = useRef<HTMLInputElement>(null);
    const [typeConvention, setTypeConvention] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameTypeConvention);
    const handleChangeInputTypeConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region PROVINCE  */
    const refProvince = useRef<HTMLInputElement>(null);
    const [province, setProvince] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameProvince);
    const handleChangeInputProvince = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region Rattachée à une convention cadre  */
    const refRattacheeConvCadre = useRef<HTMLInputElement>(null);
    const [rattacheeConvCadre, setRattacheeConvCadre] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.isRattacheeConvCadre);
    const handleChangeInputRattacheeConvCadre = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Dimension Royale  */
    const refIsDimensionRoyale = useRef<HTMLInputElement>(null);
    const [isDimensionRoyale, setIsDimensionRoyale] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.isDimensionRoya);
    const handleChangeInputIsDimensionRoyale = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Date Signature  */
    const refDateSignature = useRef<HTMLInputElement>(null);
    const [dateSignature, setDateSignature] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.dateSignature);
    const handleChangeInputDateSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Secteur  */
    const refSecteur = useRef<HTMLInputElement>(null);
    const [secteur, setSecteur] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.nameSecteur);
    const handleChangeInputSecteur = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Année de signature  */
    const refAnneeSignature = useRef<HTMLInputElement>(null);
    const [anneeSignature, setAnneeSignature] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.anneeSignature);
    const handleChangeInputAnneeSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region Date fin effective  */
    const refDateFinEffective = useRef<HTMLInputElement>(null);
    const [dateFinEffective, setDateFinEffective] = React.useState(info_generale_renseigner_conv_regionale_specifique_store.dateFinEffective);
    const handleChangeInputDateFinEffective = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region ANNEE FIN */
    const [selectedAnneeFin, setSelectedAnneeFin] = React.useState<Date | null>(new Date(info_generale_renseigner_conv_regionale_specifique_store.anneeFinPrev));
    const selectAnneeFinHandler = (date: any) => {
        console.log(date);
        setSelectedAnneeFin(date);
    }
    /* #endregion */
    const onClickPrevStep1 = () => {
        dispatch(setNumStepAction(0))
    }
    // num_current_step_store
    const onClickNextStep1 = () => {
        dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
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
        dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    useEffect(() => {

    }, [])

    return (
        <div className='container-step1'
            style={{ display: num_current_step_store == 0 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_1}
                numStep={1}
            />
            <Grid container spacing={3} style={{ marginTop: "5px" }}>

                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* REGION */}
                    <div className='title-input'>Région*</div>
                    <StyledDisabledTextField
                        inputRef={refRegion}
                        value={region}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Région*"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* TYPE CONVENTION */}
                    <div className='title-input'>Type de la convention*</div>
                    <StyledDisabledTextField
                        inputRef={refTypeConvention}
                        value={typeConvention}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Type convention*"
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
                        inputRef={refProvince}
                        value={province}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Province*"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Rattachée à une convention cadre */}
                    <div className='title-input'> Rattachée à une convention cadre ?*</div>
                    <StyledDisabledTextField
                        inputRef={refRattacheeConvCadre}
                        value={rattacheeConvCadre ? "Oui" : "Non"}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Rattachée à une convention cadre ?*"
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
                        inputRef={refIsDimensionRoyale}
                        value={isDimensionRoyale ? "Oui" : "Non"}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Dimension Royale"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Annee Signature */}
                    <div className='title-input'>Année de signature</div>
                    <StyledDisabledTextField
                        inputRef={refAnneeSignature}
                        value={anneeSignature}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Année de signature"
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
                        inputRef={refDateSignature}
                        value={dateSignature}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Date de la signature"
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
                        inputRef={refSecteur}
                        value={secteur}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Secteur"
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
                        inputRef={refDateFinEffective}
                        value={dateFinEffective}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Date fin effective"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                     <div className='div-txt-date-fin-effective'>Date fin effective sera remplie à la fin </div>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Année de fin prévisionnelle */}
                    <div className='title-input'>Année de fin prévisionnelle</div>
                    <InputDatePicker
                        selectedDate={selectedAnneeFin}
                        setSelectedDate={selectAnneeFinHandler}
                        isShowTitle={false}
                        title="Année de fin prévisionnelle"
                        label="Année de fin prévisionnelle"
                        views={['year']}
                    />
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