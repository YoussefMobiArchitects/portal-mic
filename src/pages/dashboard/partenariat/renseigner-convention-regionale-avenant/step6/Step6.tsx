import React, { useState } from 'react';
import "./step6.scss";
import { HeaderStep, MainButton } from '../../../../../components';
import StepRenseignerConventionRegionaleAvenant from '../../../../../enums/StepRenseignerConventionRegionaleAvenant';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { groupBy } from '../../../../../utils/groupBy';
import { ContributionPartenaireGroupedByI } from '../../../../../models/contributionPartenaireGroupedBy';
import { ContributionPartenaireI } from '../../../../../models/contributionPartenaire';
import { FooterStep } from '../RenseignerConventionRegionaleAvenant';


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
import { Grid } from '@mui/material';
import {
    setNumStepAction,
    getListContributionPartenaireGroupedByAction,
    isEditRenseignerConvAction,
    editListContributionPartenaireAction,
} from '../../../../../redux/reducers/renseignerConvRegionaleAvenantReducer';

export const SingleAccordionContributionPartenaire = ({ listContributionPartenaire, nameProjet, isShowBtnEdit }: ContributionPartenaireGroupedByI) => {

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

    const totalEcheancier = listContributionPartenaire.reduce((allTotal, contribution) => {
        const sum = contribution.listEcheancier.reduce((total, item) => {
            return total + parseInt(item.contribution.toString());
        }, 0);
        return allTotal + sum;
    }, 0);

    return (
        <Accordion
            TransitionProps={{ unmountOnExit: true }}
            onChange={handleChangeExpanded(`panel_${nameProjet}`)}
            expanded={expanded === `panel_${nameProjet}`}
        >

            {/*  */}
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <div className='container-sub-header-accodion'>
                    <div className='container-icon-bug'><ShoppingBagOutlinedIcon style={{ fontSize: "17px" }} /></div>
                    <div className='txt-title-header-accordion'>{nameProjet}</div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/* HEADER TABLE */}
                <Grid container spacing={1} className="grid-item-axe" style={{ marginBottom: "15px", marginTop: "10px" }}>
                    <Grid item xs={4} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Partenaires </div>
                        </div>
                    </Grid>
                    <Grid item xs={5} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Echéancier(s)</div>
                        </div>
                    </Grid>
                    <Grid item xs={3} className="grid-item-item-axe">
                        <div className='container-name-axe'>
                            <div className='txt-header-table'>Total contribution prévue</div>
                        </div>
                    </Grid>
                </Grid>
                {/* BODY TABLE */}
                {
                    listContributionPartenaire.map((item, index) => (
                        <div className='container-proj-item' key={index.toString()}>
                            <Grid container spacing={1} className="grid-item-axe">
                                <Grid item xs={4} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='container-icon-paper'><FeedOutlinedIcon style={{ fontSize: "18px" }} /></div>
                                        <div className='txt-obj-item'>{item.namePartenaire}</div>
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
                                <Grid item xs={3} className="grid-item-item-axe">
                                    <div className='container-name-axe'>
                                        <div className='txt-obj-item' style={{ margin: "0px 8px", color: "#599F3E" }}>
                                            {item.listEcheancier.reduce((accumulator, obj) => {
                                                return accumulator + parseInt(obj.contribution.toString())
                                            }, 0)}</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </AccordionDetails>

        </Accordion>
    );
};

function Step6() {
    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.numCurrentStep);

    const list_contribution_partenaire_store = useAppSelector((state) => state.renseignerConvRegionaleAvenantReducer.listContributionPartenaire);

    const [listContributionPartenaire, setListContributionPartenaire] = useState(list_contribution_partenaire_store);
    const [listContributionPartenaireGroupBy, setListContributionPartenaireGroupBy] = useState<ContributionPartenaireGroupedByI[]>([]);

    /* #region FCT GROUPBY LIST CONTRIBUTION PARTENAIRE  */
    const groubByListContributionPartenaireHandler = () => {
        let tempArray: Array<ContributionPartenaireI> = [];
        tempArray = listContributionPartenaire;

        const results = groupBy(tempArray, i => i.nameProjet);
        let res2 = JSON.parse(JSON.stringify(results));
        console.log("res2 ===>: ", res2);

        // convert object to array
        const entries = Object.entries(res2);
        console.log("entries : ", entries);

        // push item to new array
        let arrs: Array<ContributionPartenaireGroupedByI> = [];
        entries.forEach(res => {
            arrs.push({ nameProjet: res[0] as string, listContributionPartenaire: res[1] as ContributionPartenaireI[] });
        });

        console.log("final data2 : ", arrs);
        setListContributionPartenaireGroupBy(arrs);
        return arrs
    }
    /* #endregion */

    const onClickPrevStep6 = () => {
        dispatch(setNumStepAction(4))
    }

    const onClickNextStep6 = () => {
        dispatch(editListContributionPartenaireAction(listContributionPartenaire));
        dispatch(setNumStepAction(6))
        dispatch(getListContributionPartenaireGroupedByAction())
    }

    const onClickSaveStep6 = () => {
        console.log("pressed")
    }

    const onClickAnnulerStep6 = () => {
        dispatch(setNumStepAction(7))
        dispatch(isEditRenseignerConvAction(false));
    }

    const onClickModifierStep6 = () => {
        dispatch(editListContributionPartenaireAction(listContributionPartenaire));
        dispatch(setNumStepAction(8))
        dispatch(isEditRenseignerConvAction(false));
        dispatch(getListContributionPartenaireGroupedByAction())
    }

    React.useEffect(() => {
        setListContributionPartenaire(list_contribution_partenaire_store)
        groubByListContributionPartenaireHandler();

    }, [listContributionPartenaire, num_current_step_store])

    return (
        <div className='container-step6-conv-regionale-avenant'
            style={{ display: num_current_step_store == 5 ? "block" : "none" }}
        >
            <HeaderStep
                label={StepRenseignerConventionRegionaleAvenant.STEP_6}
                numStep={6}
            />
            {/* AJOUTER ENGAGEMENT FINANCIER */}
            <div className='container-add-partenaire '>
                <div className='txt-add-partenaire '></div>
                <MainButton
                    onClick={() => console.log("pressed")}
                    className='btn-add-partenaire '
                    label="Ajouter un partenaire"
                    startIcon={<ControlPointOutlinedIcon />}
                />
            </div>
            {/* Accordion */}

            <div>
                {listContributionPartenaireGroupBy.map((res, index) => {
                    return <SingleAccordionContributionPartenaire
                        key={index}
                        nameProjet={res.nameProjet}
                        listContributionPartenaire={res.listContributionPartenaire}
                        isShowBtnEdit={true}
                    />;
                })}
            </div>
            {/* Footer */}
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