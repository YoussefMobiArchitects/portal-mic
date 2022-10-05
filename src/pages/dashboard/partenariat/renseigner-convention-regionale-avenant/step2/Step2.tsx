import React, { useEffect, useRef, useState } from 'react';
import "./step2.scss";
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import {
    setNumStepAction,
    isEditRenseignerConvAction,
    setTypeModificationConvAvenantAction,
    setTypeEngagementFinancierConvAvenantAction,
    editObjetObjectifsAction,
    ObjetbjectifsConvI,
    setAutreAspectAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';
import { FooterStep } from '../RenseignerConventionRegionaleAvenant';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import { HeaderStep, InputDatePicker, MainButton, MainButtonIcon, SelectCustom } from '../../../../../components';
import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';
import {
    LIST_SECTEUR,
    LIST_TYPE_ENGAGEMENT_FINANCIER_CONV_AVENANT,
    LIST_TYPE_MODIFICATION_CONV_AVENANT,
    LIST_PROJET,
    LIST_TYPE_ENGAGEMENT,
    LIST_MODE_DEBLOCAGE,
} from '../../../../../constants/DataConstants';
import { Grid, InputBase, MenuItem, TextField } from '@mui/material';
import { Secteur } from '../../../../../models/secteur';
import { TypeModificationConvAvenantI } from '../../../../../models/typeModificationConvAvenant';
import { TypeEngagementFinancierConvAvenantI } from '../../../../../models/typeEngagementFinancierConvAvenant';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import autoAnimate from '@formkit/auto-animate'
import { DomiciliationContributionI } from '../../../../../models/domiciliationContribution';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { ProjetI } from '../../../../../models/projet';
import { TypeEngagementI } from '../../../../../models/typeEngagement';
import { ModeDeblocageI } from '../../../../../models/modeDeblocage';

export interface PropsInputBase {
    value: string;
    onChangeList: any,
    id: string,
}

function Step2() {
    const dispatch = useAppDispatch();
    // const parent = useRef(null);
    const parent = useRef<HTMLInputElement>(null);

    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);
    const type_modification_conv_avenant_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.typeModificationConvAvenant);
    const objet_objectifs_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.objetObjectifs);

    const autre_aspect_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.autreAspect);

    const list_domiciliation_contribution_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.listDomiciliationContribution);
    const [listDomiciliationContribution, setListDomiciliationContribution] = useState<DomiciliationContributionI[]>(list_domiciliation_contribution_store)


    /* #region Type de la modification  */
    const [selectedTypeModificationConvAvenant, setSelectedTypeModificationConvAvenant] = React.useState(type_modification_conv_avenant_store);
    const [typeModificationConvAvenant, setTypeModificationConvAvenant] = React.useState("");
    const handleChangeTypeModificationConvAvenant = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeModificationConvAvenant(event.target.value);
    };
    const [openMenuTypeModificationConvAvenant, setOpenMenuTypeModificationConvAvenant] = React.useState(false);
    const handleCloseMenuTypeModificationConvAvenant = () => {
        setOpenMenuTypeModificationConvAvenant(false);
    };
    const handleOpenMenuTypeModificationConvAvenant = () => {
        setOpenMenuTypeModificationConvAvenant(true);
    };
    const selectTypeModificationConvAvenantHandler = (item: any) => {
        setSelectedTypeModificationConvAvenant(item);
        if (item.id === 2) {
            setListObjectif([]);
            setObjetConvention("");
            setAutreAspect("");
        }
    }
    /* #endregion */
    /* #region Type d’engagement financier  */
    const [selectedTypeEngagementFinancierConvAvenant, setSelectedTypeEngagementFinancierConvAvenant] = React.useState({ id: 0, name: "" });
    const [typeEngagementFinancierConvAvenant, setTypeEngagementFinancierConvAvenant] = React.useState("");
    const handleChangeTypeEngagementFinancierConvAvenant = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeEngagementFinancierConvAvenant(event.target.value);
    };
    const [openMenuTypeEngagementFinancierConvAvenant, setOpenMenuTypeEngagementFinancierConvAvenant] = React.useState(false);
    const handleCloseMenuTypeEngagementFinancierConvAvenant = () => {
        setOpenMenuTypeEngagementFinancierConvAvenant(false);
    };
    const handleOpenMenuTypeEngagementFinancierConvAvenant = () => {
        setOpenMenuTypeEngagementFinancierConvAvenant(true);
    };
    const selectTypeEngagementFinancierConvAvenantHandler = (item: any) => {
        setSelectedTypeEngagementFinancierConvAvenant(item);
        console.log(item);
    }
    /* #endregion */

    const [objetConvention, setObjetConvention] = useState<string>(objet_objectifs_store.objet);
    const [listObjectif, setListObjectif] = useState<string[]>(objet_objectifs_store.listObjectif);
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

    /* #region  Autre Aspect */
    const [autreAspect, setAutreAspect] = useState(autre_aspect_store);
    const refAutreAspect = React.useRef<HTMLInputElement>(null);

    const handleOnChangeAutreAspect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutreAspect(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

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


    /* #region  2-3 */
    // PROJET
    const [selectedProjet, setSelectedProjet] = React.useState(LIST_PROJET[0]);
    const [projet, setProjet] = React.useState("");
    const handleChangeProjet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjet(event.target.value);
    };
    const [openMenuProjet, setOpenMenuProjet] = React.useState(false);
    const handleCloseMenuProjet = () => {
        setOpenMenuProjet(false);
    };
    const handleOpenMenuProjet = () => {
        setOpenMenuProjet(true);
    };
    const selectProjetHandler = (item: any) => {
        setSelectedProjet(item);
    }

    // TYPE ENGAGEMENT
    const [selectedTypeEngagement, setSelectedTypeEngagement] = React.useState(LIST_TYPE_ENGAGEMENT[0]);
    const [typeEngagement, setTypeEngagement] = React.useState("");
    const handleChangeTypeEngagement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeEngagement(event.target.value);
    };
    const [openMenuTypeEngagement, setOpenMenuTypeEngagement] = React.useState(false);
    const handleCloseMenuTypeEngagement = () => {
        setOpenMenuTypeEngagement(false);
    };
    const handleOpenMenuTypeEngagement = () => {
        setOpenMenuTypeEngagement(true);
    };
    const selectTypeEngagementHandler = (item: any) => {
        setSelectedTypeEngagement(item);
    }

    // DIPOSITIF DE FINANCEMENT
    const refDispositifFinancement = useRef<HTMLInputElement>(null);
    const [dispositifFinancement, setDispositifFinancement] = React.useState<string>("")
    const handleChangeInputDispositifFinancement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDispositifFinancement(event.target.value);
        console.log(event.target.value);
    };
    // MODE DE DÉBLOCAGE
    const [selectedModeDeblocage, setSelectedModeDeblocage] = React.useState(LIST_MODE_DEBLOCAGE[0]);
    const [modeDeblocage, setModeDeblocage] = React.useState("");
    const handleChangeModeDeblocage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModeDeblocage(event.target.value);
    };
    const [openMenuModeDeblocage, setOpenMenuModeDeblocage] = React.useState(false);
    const handleCloseMenuModeDeblocage = () => {
        setOpenMenuModeDeblocage(false);
    };
    const handleOpenMenuModeDeblocage = () => {
        setOpenMenuModeDeblocage(true);
    };
    const selectModeDeblocageHandler = (item: any) => {
        setSelectedModeDeblocage(item);
    }

    //  Ancienne année de déblocage
    const [selectedAncienneAnneeDeblocage, setSelectedAncienneAnneeDeblocage] = React.useState<Date | null>(new Date());
    const selectedAncienneAnneeDeblocageHandler = (date: any) => {
        console.log(date);
        setSelectedAncienneAnneeDeblocage(date);
    }

    //  Nouvelle année de déblocage
    const [selectedNouvelleAnneeDeblocage, setSelectedNouvelleAnneeDeblocage] = React.useState<Date | null>(new Date());
    const selectedNouvelleAnneeDeblocageHandler = (date: any) => {
        console.log(date);
        setSelectedNouvelleAnneeDeblocage(date);
    }

    /* #endregion */

    const onClickPrevStep2 = () => {
        dispatch(setNumStepAction(0))
    }

    const onClickNextStep2 = () => {
        let objObectifs = {} as ObjetbjectifsConvI;
        objObectifs = { objet: objetConvention, listObjectif: listObjectif.filter(res => res !== "") };
        dispatch(editObjetObjectifsAction(objObectifs));
        dispatch(setTypeModificationConvAvenantAction(selectedTypeModificationConvAvenant));
        dispatch(setTypeEngagementFinancierConvAvenantAction(selectedTypeEngagementFinancierConvAvenant));
        dispatch(setAutreAspectAction(autreAspect));

        if (selectedTypeModificationConvAvenant.id == 2 && selectedTypeEngagementFinancierConvAvenant.id == 1) {
            dispatch(setNumStepAction(2));
        }
        if (selectedTypeModificationConvAvenant.id == 1) {
            dispatch(setNumStepAction(9));
        }
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
        objObectifs = { objet: objetConvention, listObjectif: listObjectif.filter(res => res !== "") };
        dispatch(editObjetObjectifsAction(objObectifs));
        dispatch(setNumStepAction(9))
        dispatch(isEditRenseignerConvAction(false));
        dispatch(setTypeModificationConvAvenantAction(selectedTypeModificationConvAvenant));
        dispatch(setTypeEngagementFinancierConvAvenantAction(selectedTypeEngagementFinancierConvAvenant))
    }

    useEffect(() => {
        setListDomiciliationContribution(list_domiciliation_contribution_store);
        setSelectedTypeModificationConvAvenant(type_modification_conv_avenant_store);
        parent.current && autoAnimate(parent.current)
    }, [
        // listObjectif
        parent,
        num_current_step_store
    ])

    return (
        <div className='container-step2-conv-regionale-avenant'
            style={{ display: num_current_step_store == 1 ? "block" : "none" }}
            ref={parent}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_2}
                numStep={2}
            />

            <Grid container spacing={3} style={{ marginTop: "5px" }}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* Type de la modification */}
                    <SelectCustom
                        value={typeModificationConvAvenant}
                        open={openMenuTypeModificationConvAvenant}
                        data={LIST_TYPE_MODIFICATION_CONV_AVENANT}
                        handleClose={handleCloseMenuTypeModificationConvAvenant}
                        handleOpen={handleOpenMenuTypeModificationConvAvenant}
                        onChange={handleChangeTypeModificationConvAvenant}
                        selectItemHandler={selectTypeModificationConvAvenantHandler}
                        customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                        titleSelect="Choisissez le type de la modification"
                        isShowTitleSelect={true}
                        txtPlaceholder="Choisissez le type de la modification"
                    >
                        {LIST_TYPE_MODIFICATION_CONV_AVENANT.map((sec: TypeModificationConvAvenantI) => (
                            <MenuItem className='item-dropdown-secteur' key={sec.id} value={sec.name} onClick={() => selectTypeModificationConvAvenantHandler(sec)}>

                                <div style={{ width: "100%" }} >
                                    {sec.name}
                                </div>
                            </MenuItem>
                        ))}
                    </SelectCustom>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8} xl={8}  >
                    {/* Type d’engagement financier */}
                    {(selectedTypeModificationConvAvenant.id !== 1 && selectedTypeModificationConvAvenant.id !== 0) &&
                        <SelectCustom
                            value={typeEngagementFinancierConvAvenant}
                            open={openMenuTypeEngagementFinancierConvAvenant}
                            data={LIST_TYPE_ENGAGEMENT_FINANCIER_CONV_AVENANT}
                            handleClose={handleCloseMenuTypeEngagementFinancierConvAvenant}
                            handleOpen={handleOpenMenuTypeEngagementFinancierConvAvenant}
                            onChange={handleChangeTypeEngagementFinancierConvAvenant}
                            selectItemHandler={selectTypeEngagementFinancierConvAvenantHandler}
                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                            titleSelect="Choisissez le type d’engagement financier"
                            isShowTitleSelect={true}
                            txtPlaceholder="Choisissez le type d’engagement financier"
                        >
                            {LIST_TYPE_ENGAGEMENT_FINANCIER_CONV_AVENANT.map((type: TypeEngagementFinancierConvAvenantI) => (
                                <MenuItem className='item-dropdown-secteur' key={type.id} value={type.name} onClick={() => selectTypeEngagementFinancierConvAvenantHandler(type)}>
                                    <div style={{ width: "100%" }} >
                                        {type.name}
                                    </div>
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    }
                </Grid>
            </Grid>
            {/* 1 - none */}
            {selectedTypeModificationConvAvenant.id === 1 &&
                <div>
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
                    <div className='txt-obj-conv'>Renseigner la modification</div>
                    <TextField
                        placeholder="Renseigner la modification si le changement concerne un aspect autre"
                        style={{ width: "100%" }}
                        onChange={handleOnChangeAutreAspect}
                        ref={refAutreAspect}
                        value={autreAspect}
                    />
                </div>
            }
            {/*  */}

            {/* 2 - 1 */}
            {/*  */}
            {/* 2 - 2 */}
            {(selectedTypeModificationConvAvenant.id === 2 && selectedTypeEngagementFinancierConvAvenant.id === 2) &&
                <>
                    <div className='container-add-obj'>
                        <div className='txt-add-obj'>Domiciliation des contributions</div>
                        <MainButton
                            onClick={() => console.log("pressed")}
                            className='btn-add-objectif'
                            label="Ajouter domiciliation "
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
                </>
            }
            {/*  */}
            {/* 2 - 3 */}
            {(selectedTypeModificationConvAvenant.id === 2 && selectedTypeEngagementFinancierConvAvenant.id === 3) &&
                <Grid container spacing={3} style={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Projet */}
                        <div className='title-input'>Projet</div>
                        <SelectCustom
                            value={projet}
                            open={openMenuProjet}
                            data={LIST_PROJET}
                            handleClose={handleCloseMenuProjet}
                            handleOpen={handleOpenMenuProjet}
                            onChange={handleChangeProjet}
                            selectItemHandler={selectProjetHandler}
                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                            titleSelect="Projet"
                            isShowTitleSelect={false}
                            txtPlaceholder="Projet"
                        >
                            {LIST_PROJET.map((proj: ProjetI) => (
                                <MenuItem className='item-dropdown-secteur' key={proj.id} value={proj.name} onClick={() => selectProjetHandler(proj)}>
                                    <div style={{ width: "100%" }} >
                                        {proj.name}
                                    </div>
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Type d’engagement */}
                        <div className='title-input'>Type d’engagement</div>
                        <SelectCustom
                            value={typeEngagement}
                            open={openMenuTypeEngagement}
                            data={LIST_TYPE_ENGAGEMENT}
                            handleClose={handleCloseMenuTypeEngagement}
                            handleOpen={handleOpenMenuTypeEngagement}
                            onChange={handleChangeTypeEngagement}
                            selectItemHandler={selectTypeEngagementHandler}
                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                            titleSelect="Type d’engagement"
                            isShowTitleSelect={false}
                            txtPlaceholder="Type d’engagement"
                        >
                            {LIST_TYPE_ENGAGEMENT.map((typeEng: TypeEngagementI) => (
                                <MenuItem className='item-dropdown-secteur' key={typeEng.id} value={typeEng.name} onClick={() => selectProjetHandler(typeEng)}>
                                    <div style={{ width: "100%" }} >
                                        {typeEng.name}
                                    </div>
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Dispositif de financement */}
                        <div className='title-input'>Dispositif de financement</div>
                        <TextField
                            ref={refDispositifFinancement}
                            placeholder="Dispositif de financement"
                            value={dispositifFinancement}
                            // onChange={handleChangeInputPermission}
                            onChange={(event) => {

                            }}
                            // helperText="Please select your currency"
                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                            size="medium"
                            InputLabelProps={{ shrink: false }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Mode de déblocage */}
                        <div className='title-input'>Mode de déblocage</div>
                        <SelectCustom
                            value={modeDeblocage}
                            open={openMenuModeDeblocage}
                            data={LIST_MODE_DEBLOCAGE}
                            handleClose={handleCloseMenuModeDeblocage}
                            handleOpen={handleOpenMenuModeDeblocage}
                            onChange={handleChangeModeDeblocage}
                            selectItemHandler={selectModeDeblocageHandler}
                            customStyle={{ backgroundColor: "#FFFFFF", height: "50px", }}
                            titleSelect="Mode de déblocage"
                            isShowTitleSelect={false}
                            txtPlaceholder="Type d’engagement"
                        >
                            {LIST_MODE_DEBLOCAGE.map((mode: ModeDeblocageI) => (
                                <MenuItem className='item-dropdown-secteur' key={mode.id} value={mode.name} onClick={() => selectProjetHandler(mode)}>
                                    <div style={{ width: "100%" }} >
                                        {mode.name}
                                    </div>
                                </MenuItem>
                            ))}
                        </SelectCustom>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Ancienne année de déblocage */}
                        <div className='title-input'>Ancienne année de déblocage</div>
                        <InputDatePicker
                            selectedDate={selectedAncienneAnneeDeblocage}
                            setSelectedDate={selectedAncienneAnneeDeblocageHandler}
                            isShowTitle={false}
                            title="Ancienne année de déblocage"
                            label="Ancienne année de déblocage"
                            views={['year']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                        {/* Nouvelle année de déblocage */}
                        <div className='title-input'>Nouvelle année de déblocage</div>
                        <InputDatePicker
                            selectedDate={selectedNouvelleAnneeDeblocage}
                            setSelectedDate={selectedNouvelleAnneeDeblocageHandler}
                            isShowTitle={false}
                            title="Nouvelle année de déblocage"
                            label="Nouvelle année de déblocage"
                            views={['year']}
                        />
                    </Grid>
                </Grid>
            }
            {/*  */}
            {/* 2 - 4 */}
            {
                (selectedTypeModificationConvAvenant.id === 2 && selectedTypeEngagementFinancierConvAvenant.id === 4) &&
                <div> 2-4 </div>
            }
            {/*  */}
            {/* 2 - 5 */}
            {
                (selectedTypeModificationConvAvenant.id === 2 && selectedTypeEngagementFinancierConvAvenant.id === 5) &&
                <div> 2-5 </div>
            }
            {/*  */}

            {/* Footer */}
            <FooterStep
                onClickPrev={onClickPrevStep2}
                onClickNext={onClickNextStep2}
                onClickSave={onClickSaveStep2}
                onClickAnnuler={onClickAnnulerStep2}
                onClickModifier={onClickModifierStep2}
            />
        </div >
    );
}

export default Step2;