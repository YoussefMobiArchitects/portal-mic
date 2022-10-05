import React, { useState } from 'react';
import "./step6.scss";
import { Grid, MenuItem } from '@mui/material';
import { FooterStep } from '../RenseignerConventionRegionaleSpecifique';
import {
    isEditRenseignerConvAction,
    setNumStepAction,
    editListEngagementFinancierConvRegionaleSpecifiqueAction,
    editListAutreEngagementConvRegionaleSpecifiqueAction,
    setTypeEngagementAction,
    setDipositifFinancementAction,
    setModeDeblocageAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { HeaderStep, MainButton, SelectCustom } from '../../../../../components';
import { StepRenseignerConventionRegionaleSpecifique } from '../../../../../enums';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { ItemEcheancierFinancierI } from '../../../../../models/engagementFinancier';
import { LIST_DIPOSITIF_FINANCEMENT, LIST_ENGAGEMENT_FINANCIER_CONV_REGIONALE_SPECIFIQUE, LIST_MODE_DEBLOCAGE, LIST_TYPE_ENGAGEMENT } from '../../../../../constants/DataConstants';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


function Step6() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const list_engagement_financier_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listEngagementFinancierConvRegionaleSpecifique);
    const list_autre_engagement_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.listAutreEngagementConvRegionaleSpecifique);

    const [listEngagementFinancierConvRegionaleSpecifique, setListEngagementFinancierConvRegionaleSpecifique] = useState(list_engagement_financier_conv_regionale_specifique_store);
    const [listAutreEngagementConvRegionaleSpecifique, setListAutreEngagementConvRegionaleSpecifique] = useState(list_autre_engagement_conv_regionale_specifique_store);

    /* #region  ADD ENGAGEMENT FINANCIER */
    const [openModalAddEngagementFinancier, setOpenModalAddEngagementFinancier] = React.useState(false);
    const handleOpenModalAddEngagementFinancier = () => setOpenModalAddEngagementFinancier(true);
    const handleCloseModalAddEngagementFinancier = () => setOpenModalAddEngagementFinancier(false);

    const handleAddEngagementFinancierConvRegionaleSpecifique = (axe: string, nameProject: string, cout: string, listEcheancier: ItemEcheancierFinancierI[]) => {

        handleCloseModalAddEngagementFinancier()
    }
    /* #endregion */
    /* #region  AJOUTER AUTRE ENGAGEMENT */
    const [openModalAjouterAutreEngagement, setOpenModalAjouterAutreEngagement] = React.useState(false);
    const handleOpenModalAjouterAutreEngagement = () => setOpenModalAjouterAutreEngagement(true);
    const handleCloseModalAjouterAutreEngagement = () => setOpenModalAddEngagementFinancier(false);

    const handleAjouterAutreEngagementConvRegionaleSpecifique = (axe: string, nameProject: string, cout: string, listEcheancier: ItemEcheancierFinancierI[]) => {

        handleCloseModalAddEngagementFinancier()
    }
    /* #endregion */

    /* #region TYPE ENGAGEMENT  */
    const [selectedTypeEngagement, setSelectedTypeEngagement] = React.useState({ id: LIST_TYPE_ENGAGEMENT[0].id, name: LIST_TYPE_ENGAGEMENT[0].name });
    const [typeEngagement, setTypeEngagement] = React.useState(LIST_TYPE_ENGAGEMENT[0].name);
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
    /* #endregion */
    /* #region DIPOSITIF FINANCEMENT  */
    const [selectedDipositifFinancement, setSelectedDipositifFinancement] = React.useState({ id: "", name: "" });
    const [dipositifFinancement, setDipositifFinancement] = React.useState(LIST_DIPOSITIF_FINANCEMENT[0].name);
    const handleChangeDipositifFinancement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDipositifFinancement(event.target.value);
    };
    const [openMenuDipositifFinancement, setOpenMenuDipositifFinancement] = React.useState(false);
    const handleCloseMenuDipositifFinancement = () => {
        setOpenMenuDipositifFinancement(false);
    };
    const handleOpenMenuDipositifFinancement = () => {
        setOpenMenuDipositifFinancement(true);
    };
    const selectDipositifFinancementHandler = (item: any) => {
        setSelectedDipositifFinancement(item);
    }
    /* #endregion */

    /* #region MODE DE DÉBLOCAGE  */
    const [selectedModeDeblocage, setSelectedModeDeblocage] = React.useState({ id: "", name: "" });
    const [modeDeblocage, setModeDeblocage] = React.useState(LIST_MODE_DEBLOCAGE[0].name);
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
    /* #endregion */

    const onClickPrevStep6 = () => {
        dispatch(setNumStepAction(4))
    }

    const onClickNextStep6 = () => {
        dispatch(editListEngagementFinancierConvRegionaleSpecifiqueAction(listEngagementFinancierConvRegionaleSpecifique));
        dispatch(editListAutreEngagementConvRegionaleSpecifiqueAction(listAutreEngagementConvRegionaleSpecifique));
        dispatch(setTypeEngagementAction(selectedTypeEngagement));
        dispatch(setDipositifFinancementAction(selectedDipositifFinancement));
        dispatch(setModeDeblocageAction(selectedModeDeblocage));
        dispatch(setNumStepAction(6));
        // dispatch(getListEngagementGroupedByTypeAction());
    }

    const onClickSaveStep6 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep6 = () => {
        // dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep6 = () => {
        dispatch(editListEngagementFinancierConvRegionaleSpecifiqueAction(listEngagementFinancierConvRegionaleSpecifique));
        dispatch(editListAutreEngagementConvRegionaleSpecifiqueAction(listAutreEngagementConvRegionaleSpecifique));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        setListEngagementFinancierConvRegionaleSpecifique(list_engagement_financier_conv_regionale_specifique_store);
        setListAutreEngagementConvRegionaleSpecifique(list_autre_engagement_conv_regionale_specifique_store);
    }, [
        num_current_step_store
    ])

    return (
        <div className='container-step6-conv-regionale-specifique'
            style={{ display: num_current_step_store == 5 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleSpecifique.STEP_6}
                numStep={6}
            />

            <Grid container spacing={3} style={{ marginTop: "5px" }}>

                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* TYPE ENGAGEMENT */}
                    <SelectCustom
                        value={typeEngagement}
                        open={openMenuTypeEngagement}
                        data={LIST_TYPE_ENGAGEMENT}
                        handleClose={handleCloseMenuTypeEngagement}
                        handleOpen={handleOpenMenuTypeEngagement}
                        onChange={handleChangeTypeEngagement}
                        selectItemHandler={selectTypeEngagementHandler}
                        customStyle={{ backgroundColor: "#FFFFFF" }}
                        titleSelect="Type d’engagement du MIC*"
                        isShowTitleSelect={true}
                        txtPlaceholder="Type d’engagement du MIC*"
                    >
                        {LIST_TYPE_ENGAGEMENT.map((eng: any) => (
                            <MenuItem className='item-region' key={eng.id} value={eng.name} onClick={() => selectTypeEngagementHandler(eng)}>
                                {eng.name}
                            </MenuItem>
                        ))}
                    </SelectCustom>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* DIPOSITIF FINANCEMENT */}
                    <SelectCustom
                        value={dipositifFinancement}
                        open={openMenuDipositifFinancement}
                        data={LIST_DIPOSITIF_FINANCEMENT}
                        handleClose={handleCloseMenuDipositifFinancement}
                        handleOpen={handleOpenMenuDipositifFinancement}
                        onChange={handleChangeDipositifFinancement}
                        selectItemHandler={selectDipositifFinancementHandler}
                        customStyle={{ backgroundColor: "#FFFFFF" }}
                        titleSelect="Dispositif de financement"
                        isShowTitleSelect={true}
                        txtPlaceholder="Dispositif de financement"
                    >
                        {LIST_DIPOSITIF_FINANCEMENT.map((depo: any) => (
                            <MenuItem className='item-region' key={depo.id} value={depo.name} onClick={() => selectDipositifFinancementHandler(depo)}>
                                {depo.name}
                            </MenuItem>
                        ))}
                    </SelectCustom>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  >
                    {/* MODE DE DÉBLOCAGE */}
                    <SelectCustom
                        value={modeDeblocage}
                        open={openMenuModeDeblocage}
                        data={LIST_MODE_DEBLOCAGE}
                        handleClose={handleCloseMenuModeDeblocage}
                        handleOpen={handleOpenMenuModeDeblocage}
                        onChange={handleChangeModeDeblocage}
                        selectItemHandler={selectModeDeblocageHandler}
                        customStyle={{ backgroundColor: "#FFFFFF" }}
                        titleSelect="Mode de déblocage"
                        isShowTitleSelect={true}
                        txtPlaceholder="Mode de déblocage"
                    >
                        {LIST_MODE_DEBLOCAGE.map((mode: any) => (
                            <MenuItem className='item-region' key={mode.id} value={mode.name} onClick={() => selectModeDeblocageHandler(mode)}>
                                {mode.name}
                            </MenuItem>
                        ))}
                    </SelectCustom>
                </Grid>
            </Grid>
            {(selectedTypeEngagement.id === "1" || selectedTypeEngagement.id === "3") &&
                <>
                    {/* AJOUTER ENGAGEMENT FINANCIER */}
                    <div className='container-add-engagement'>
                        <div className='txt-add-engagement'>Contribution financière du Ministère aux projets</div>
                        <MainButton
                            onClick={handleOpenModalAddEngagementFinancier}
                            className='btn-add-engagement'
                            label="Ajouter un engagement financier"
                            startIcon={<ControlPointOutlinedIcon />}
                        />
                    </div>


                    {/* HEADER TABLE */}
                    <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                        <Grid item xs={4.5} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-header-table'>Projets</div>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-header-table'>Echéancier(s)</div>
                            </div>
                        </Grid>
                        <Grid item xs={2.5} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-header-table'>Total contribution prévue</div>
                            </div>
                        </Grid>
                    </Grid>
                    {/* BODY TABLE */}
                    {
                        listEngagementFinancierConvRegionaleSpecifique.map((item, index) => (
                            <div className='container-proj-item' style={{ padding: "0px 15px", backgroundColor: "#F9F9F9" }} key={index.toString()}>
                                <Grid container spacing={1} className="grid-item-axe">
                                    <Grid item xs={4.5} className="grid-item-item-axe">
                                        <div className='container-name-axe'>
                                            <div className='txt-obj-item'>{item.nameProjet}</div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={5} className="grid-item-item-axe">
                                        <div className='container-echeancier'>
                                            {item.listEcheancier.map((item, index) => (
                                                <div key={index} className='container-val-echeancier'>
                                                    <div className='txt-obj-item'>{item.contribution}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item xs={2.5} className="grid-item-item-axe">
                                        <div className='container-name-axe'>
                                            <div className='txt-obj-item' style={{ margin: "0px 15px", color: "#599F3E" }}>
                                                {item.listEcheancier.reduce((accumulator, obj) => {
                                                    return accumulator + parseInt(obj.contribution.toString())
                                                }, 0)}</div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))
                    }
                </>
            }
            {(selectedTypeEngagement.id === "2" || selectedTypeEngagement.id === "3") &&
                <>
                    {/* AJOUTER AUTRE ENGAGEMENT */}
                    <div className='container-add-engagement'>
                        <div className='txt-add-engagement'>Autre engagement du ministre aux projets</div>
                        <MainButton
                            onClick={handleOpenModalAjouterAutreEngagement}
                            className='btn-add-engagement'
                            label="Ajouter un engagement financier"
                            startIcon={<ControlPointOutlinedIcon />}
                        />
                    </div>

                    {/* HEADER TABLE */}
                    <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                        <Grid item xs={4} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-header-table'>Projets</div>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="grid-item-item-axe">
                            <div className='container-name-axe'>
                                <div className='txt-header-table'>Echéancier(s)</div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                        </Grid>
                    </Grid>
                    {/* BODY TABLE */}
                    {
                        listAutreEngagementConvRegionaleSpecifique.map((item, index) => (
                            <div className='container-proj-item' key={index.toString()}>
                                <Grid container spacing={1} className="grid-item-axe">
                                    <Grid item xs={4} className="grid-item-item-axe">
                                        <div className='container-name-axe'>
                                            <div className='container-icon-paper'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                            <div className='txt-obj-item'>{item.nameProjet}</div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={5} className="grid-item-item-axe">
                                        <div className='container-echeancier'>
                                            {item.listEcheancier.map((item, index) => (
                                                <div key={index} className='container-val-echeancier'>
                                                    <div className='txt-obj-item'>{item.contribution}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>
                                        <MainButton
                                            onClick={() => { console.log(item) }}
                                            className='btn-edit-proj'
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
            {/* FOOTER */}
            <FooterStep
                onClickPrev={onClickPrevStep6}
                onClickNext={onClickNextStep6}
                onClickSave={onClickSaveStep6}
                onClickAnnuler={onClickAnnulerStep6}
                onClickModifier={onClickModifierStep6}
            />

        </div>
    );
}

export default Step6;