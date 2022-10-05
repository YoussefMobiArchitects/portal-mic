import React, { useEffect, useRef } from 'react';
import "./styles.scss";
import {
    HeaderStep,
    SelectCustom,
    InputDatePicker
} from "../../../../../components";
import { StepRenseignerConventionRegionaleCadre } from "../../../../../enums";
import { Grid, MenuItem } from '@mui/material';
import {
    LIST_REGION,
    LIST_TYPE_CONVENTION,
    LIST_CONTEXTE_CONVENTION,
    LIST_DIMENSION_ROYALE,
    LIST_SECTEUR
} from "../../../../../constants/DataConstants"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { FooterStep } from '../RenseignerConventionRegionaleCadre';
import { 
    setNumStepAction, 
    editInfoGeneraleAction, 
    InfoGeneraleRenseignerConvRegionaleCadreI, 
    getListModeGouvernanaceAction, 
    isEditRenseignerConvAction,
    editAnneeFinPrevAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleCadreReducer';
import moment from 'moment';
import { StyledDisabledTextField } from '../../../../../components/styledComponents';


function Step1() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const info_generale_renseigner_conv_regionale_cadre_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.infoGeneraleRenseignerConvRegionaleCadre);

    /* #region PARTENARIAT  */
    const refRegion = useRef<HTMLInputElement>(null);
    const [region, setRegion] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.nameRegion);
    const handleChangeInputRegion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region TYPE CONVENTION  */
    const refTypeConvention = useRef<HTMLInputElement>(null);
    const [typeConvention, setTypeConvention] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.nameTypeConvention);
    const handleChangeInputTypeConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region CONTEXTE CONVENTION  */
    const refContexteConvention = useRef<HTMLInputElement>(null);
    const [contexteConvention, setContexteConvention] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.nameCtxConvCadre);
    const handleChangeInputContexteConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region DIMENSION ROYALE  */
    const refDimensionRoyale = useRef<HTMLInputElement>(null);
    const [dimensionRoyale, setDimensionRoyale] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.isDimensionRoya);
    const handleChangeInputDimensionRoyale = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region ANNEE SIGNATURE */
    const refAnneeSignature = useRef<HTMLInputElement>(null);
    const [anneeSignature, setAnneeSignature] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.anneeSignature);
    const handleChangeInputAnneeSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */
    /* #region DATE SIGNATURE */
    const refDateSignature = useRef<HTMLInputElement>(null);
    const [dateSignature, setDateSignature] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.dateSignature);
    const handleChangeInputDateSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region ANNEE FIN */
    const [selectedAnneeFin, setSelectedAnneeFin] = React.useState<Date | null>(new Date(info_generale_renseigner_conv_regionale_cadre_store.anneeFinPrev));
    const selectAnneeFinHandler = (date: any) => {
        console.log(date);
        setSelectedAnneeFin(date);
    }
    /* #endregion */

    /* #region DATE FIN EFFECTIVE */
    const refDateFinEffective = useRef<HTMLInputElement>(null);
    const [dateFinEffective, setDateFinEffective] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.dateFinEffective);
    const handleChangeInputDateFinEffective = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    /* #region SECTEUR  */
    const refSecteur = useRef<HTMLInputElement>(null);
    const [secteur, setSecteur] = React.useState(info_generale_renseigner_conv_regionale_cadre_store.nameSecteur);
    const handleChangeInputSecteur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };
    /* #endregion */

    const onClickPrevStep1 = () => {
        dispatch(setNumStepAction(0))
    }
    // num_current_step_store
    const onClickNextStep1 = () => {
        let infogeneraleObject = {} as InfoGeneraleRenseignerConvRegionaleCadreI;
        dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
        dispatch(setNumStepAction(1))
    }

    const onClickSaveStep1 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep1 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }
    const onClickModifierStep1 = () => {
        let infogeneraleObject = {} as InfoGeneraleRenseignerConvRegionaleCadreI;
        dispatch(editAnneeFinPrevAction(moment(selectedAnneeFin).format('YYYY')));
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    useEffect(() => {

    }, [])

    return (
        <div className='container-step1'
            style={{ display: num_current_step_store == 0 ? "block" : "none" }}
        >

            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_1}
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
                    {/* CONTEXTE CONVENTION */}
                    <div className='title-input'>Contexte de la convention cadre*</div>
                    <StyledDisabledTextField
                        inputRef={refContexteConvention}
                        value={contexteConvention}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Contexte de la convention"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* DIMENSION ROYALE */}
                    <div className='title-input'>Dimension Royale</div>
                    <StyledDisabledTextField
                        inputRef={refDimensionRoyale}
                        value={dimensionRoyale}
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
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    {/* ANNEE SIGNATURE */}
                    {/* <InputDatePicker
                        selectedDate={selectedAnneeSignature}
                        setSelectedDate={selectAnneeSignatureHandler}
                        isShowTitle={true}
                        title="Année de la signature*"
                        label="Année de la signature*"
                        views={['year']}
                    /> */}
                    <div className='title-input'>Année de la signature</div>
                    <StyledDisabledTextField
                        inputRef={refAnneeSignature}
                        value={anneeSignature}
                        onChange={(event) => {
                            // onChange(event.target.value)
                        }}
                        placeholder="Année de la signature"
                        style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", }}
                        size="medium"
                        InputLabelProps={{ shrink: false }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    {/* DATE SIGNATURE */}
                    {/* <InputDatePicker
                        selectedDate={selectedDateSignature}
                        setSelectedDate={selecteDateSignatureHandler}
                        isShowTitle={true}
                        title="Date de la signature"
                        label="Date de la signature"
                    /> */}
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
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    {/* ANNEE FIN */}
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
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    {/* DATE FIN */}
                   
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
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    {/* SECTEUR */}
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