import React, { useState } from 'react';
import { Grid, MenuItem } from '@mui/material';
import "./styles.scss";
import {
    HeaderStep,
    MainButton,
    SelectCustom,
    ModalAjouterEngagementFinancier,
} from '../../../../../components';
import {
    LIST_TYPE_ENGAGEMENT,
    LIST_DIPOSITIF_FINANCEMENT,
    LIST_MODE_DEBLOCAGE,
} from '../../../../../constants/DataConstants';
import { StepRenseignerConventionRegionaleCadre } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import {
    EngagementFinancierGroupedByI,
    getListEngagementAction,
    getListEngagementGroupedByTypeAction,
    isEditRenseignerConvAction,
    setNumStepAction,
} from "../../../../../redux/reducers/renseignerConvRegionaleCadreReducer";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

import { FooterStep } from '../RenseignerConventionRegionaleCadre';
import { LIST_ENGAGEMENT_FINANCIER } from "../../../../../constants/DataConstants";
import { EngagementFinancierI, ItemEcheancierFinancierI } from '../../../../../models/engagementFinancier';
import {
    editListEngagementFinancierAction,
} from "../../../../../redux/reducers/renseignerConvRegionaleCadreReducer";
import { groupBy } from '../../../../../utils/groupBy';


export const SingleAccordion = ({ listEngagementFinancier, nameAxe, isShowBtnEdit }: EngagementFinancierGroupedByI) => {

    const [expanded, setExpanded] = React.useState<string | false>('panel_0');
    const handleChangeExpanded = (panel: string) => (event: any, newExpanded: any) => {
        setExpanded(newExpanded ? panel : false);
    };

    // const Accordion = styled((props: AccordionProps) => (
    //     <MuiAccordion disableGutters elevation={0} square {...props} />
    // ))(({ theme }) => ({
    //     border: `1px solid ${theme.palette.divider}`,
    //     '&:not(:last-child)': {
    //         borderBottom: 0,
    //     },
    //     '&:before': {
    //         display: 'none',
    //     },
    // }));

    const AccordionSummary = styled((props: AccordionSummaryProps) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', margin: "0px 15px" }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        // flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    const totalEcheancier = listEngagementFinancier.reduce((allTotal, engagement) => {
        const sum = engagement.listEcheancier.reduce((total, item) => {
            return total + parseInt(item.contribution.toString());
        }, 0);
        return allTotal + sum;
    }, 0);

    // const total = listEngagement.reduce((total, engagement) => total + amount.price, 0);

    return (
        <Accordion
            TransitionProps={{ unmountOnExit: true }}
            onChange={handleChangeExpanded(`panel_${nameAxe}`)}
            expanded={expanded === `panel_${nameAxe}`}
        >

            {/*  */}
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <div className='container-sub-header-accodion'>
                    <div className='container-icon-bug'><ShoppingBagOutlinedIcon style={{ fontSize: "17px" }} /></div>
                    <div className='txt-title-header-accordion'>{nameAxe}</div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/* HEADER TABLE */}
                <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                    <Grid item xs={3} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Projets</div>
                        </div>
                    </Grid>
                    <Grid item xs={2} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Coût total</div>
                        </div>
                    </Grid>
                    <Grid item xs={4} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Echéancier(s)</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Total contribution Ministère</div>
                        </div>
                    </Grid>
                    <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>

                    </Grid>
                </Grid>
                {/* BODY TABLE */}
                {
                    listEngagementFinancier.map((item, index) => (
                        <div className='container-proj-item' key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={3} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='container-icon-paper'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                        <div className='txt-obj-item'>{item.nameProject}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={2} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item'>{item.cout}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} className="grid-item-item-axe">
                                    <div className='container-echeancier'>
                                        {item.listEcheancier.map((item, index) => (
                                            <div key={index} className='container-val-echeancier'>
                                                <div className='txt-obj-item'>{item.contribution}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item' style={{ margin: "0px 8px" }}>
                                            {item.listEcheancier.reduce((accumulator, obj) => {
                                                return accumulator + parseInt(obj.contribution.toString())
                                            }, 0)}</div>
                                    </div>
                                </Grid>
                                <Grid item xs={true} className="grid-item-item-axe" style={{ justifyContent: "end" }}>
                                    {isShowBtnEdit &&
                                        <MainButton
                                            onClick={() => { console.log(item) }}
                                            className='btn-edit-proj'
                                            label='Modifier'
                                            startIcon={<BorderColorOutlinedIcon />}
                                        />
                                    }
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
                {/* TOTAL */}
                <div className='container-total-axes'>
                    <Grid container spacing={1} className="grid-item-total">
                        <Grid item xs={3} className="grid-item-item-total">
                            <div className='container-name-item-total'>
                                <div className='container-hidden-icon'></div>
                                {listEngagementFinancier.length > 1 ?
                                    <div className='txt-div-totals'> {listEngagementFinancier.length} projets</div>
                                    :
                                    <div className='txt-div-totals'> {listEngagementFinancier.length} projet</div>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={2} className="grid-item-item-total">
                            <div className='container-name-item-total'>
                                <div className='txt-div-totals'>{listEngagementFinancier.reduce((accumulator, obj) => {
                                    return accumulator + obj.cout;
                                }, 0)}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="grid-item-item-total">
                            <div className='container-name-item-total'>
                                <div className='txt-div-totals'>
                                    {totalEcheancier}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-total">
                            <div className='container-name-item-total'>
                                <div className='txt-div-totals' style={{ margin: "0px 8px" }}>{totalEcheancier}</div>
                            </div>
                        </Grid>
                        <Grid item xs={true} className="grid-item-item-total" style={{ justifyContent: "end" }}>

                        </Grid>
                    </Grid>
                </div>
            </AccordionDetails>

        </Accordion>
    );
};

function Step4() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.numCurrentStep);
    const list_engagement_groupedby_type_store = useAppSelector((state) => state.renseignerConvRegionaleCadreReducer.listEngagementFinancierGroupedByType);
    const [listEngagementFinancier, setListEngagementFinancier] = useState(LIST_ENGAGEMENT_FINANCIER);
    const [listEngagementFinancierGroupBy, setListEngagementFinancierGroupBy] = useState<EngagementFinancierGroupedByI[]>([]);

    /* #region FCT GROUPBY LIST ENGAGEMENT FINANCIER  */
    const groubByListEngagementFinancierHandler = () => {
        let tempArray: Array<EngagementFinancierI> = [];
        tempArray = listEngagementFinancier;

        const results = groupBy(tempArray, i => i.nameAxe);
        let res2 = JSON.parse(JSON.stringify(results));
        console.log("res2 ===>: ", res2);

        // convert object to array
        const entries = Object.entries(res2);
        console.log("entries : ", entries);

        // push item to new array
        let arrs: Array<EngagementFinancierGroupedByI> = [];
        entries.forEach(res => {
            arrs.push({ nameAxe: res[0] as string, listEngagementFinancier: res[1] as any[] });
        });

        console.log("final data2=======> : ", arrs);
        setListEngagementFinancierGroupBy(arrs);
        return arrs
    }
    /* #endregion */

    /* #region  ADD ENGAGEMENT FINANCIER */
    const [openModalAddEngagementFinancier, setOpenModalAddEngagementFinancier] = React.useState(false);
    const handleOpenModalAddEngagementFinancier = () => setOpenModalAddEngagementFinancier(true);
    const handleCloseModalAddEngagementFinancier = () => setOpenModalAddEngagementFinancier(false);

    const handleAddEngagementFinancier = (axe: string, nameProject: string, cout: string, listEcheancier: ItemEcheancierFinancierI[]) => {

        setListEngagementFinancier(listEngagementFinancier => [...listEngagementFinancier,
        {
            id: Date.now().toString(),
            idTypeEngagement: selectedTypeEngagement.id,
            nameTypeEngagement: selectedTypeEngagement.name,
            idDipositifFinancier: selectedDipositifFinancement.id,
            nameDipositifFinancier: selectedDipositifFinancement.name,
            idModeDeblocage: selectedModeDeblocage.id,
            nameModeDeblocage: selectedModeDeblocage.name,
            idAxe: "1",
            nameAxe: axe,
            nameProject: nameProject,
            cout: parseInt(cout),
            listEcheancier: listEcheancier,
        }
        ]);

        handleCloseModalAddEngagementFinancier()
    }
    /* #endregion */

    /* #region TYPE ENGAGEMENT  */
    const [selectedTypeEngagement, setSelectedTypeEngagement] = React.useState({ id: "", name: "" });
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
        setSelectedTypeEngagement(item)
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
        setSelectedDipositifFinancement(item)
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
        setSelectedModeDeblocage(item)
    }
    /* #endregion */

    const onClickPrevStep4 = () => {
        dispatch(setNumStepAction(2))
    }

    const onClickNextStep4 = () => {
        dispatch(editListEngagementFinancierAction(listEngagementFinancier));
        dispatch(setNumStepAction(4))
        dispatch(getListEngagementGroupedByTypeAction())
    }

    const onClickSaveStep4 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep4 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep4 = () => {
        dispatch(editListEngagementFinancierAction(listEngagementFinancier));
        dispatch(getListEngagementGroupedByTypeAction())
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    React.useEffect(() => {
        dispatch(getListEngagementAction());
        groubByListEngagementFinancierHandler();
    }, [listEngagementFinancier])

    return (
        <div className='container-step4'
            style={{ display: num_current_step_store == 3 ? "block" : "none" }}
        >
            <ModalAjouterEngagementFinancier
                isOpen={openModalAddEngagementFinancier}
                onClickClose={handleCloseModalAddEngagementFinancier}
                onClickAdd={handleAddEngagementFinancier}
            />

            <HeaderStep
                label={StepRenseignerConventionRegionaleCadre.STEP_4}
                numStep={4}
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

            {/* Accordion */}

            <div>
                {listEngagementFinancierGroupBy.map((res, index) => {
                    return <SingleAccordion
                        key={index}
                        nameAxe={res.nameAxe}
                        listEngagementFinancier={res.listEngagementFinancier}
                        isShowBtnEdit={true}
                    />;
                })}
            </div>
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