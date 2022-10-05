import React, { useState, useEffect } from 'react';
import { AppbarGray, MainButton, MainButtonIcon } from '../../../../components';
import "./renseignerConventionRegionaleCadre.scss";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";
import Step5 from "./step5/Step5";
import Step6 from "./step6/Step6";
import Step7 from "./step7/Step7";
import Step8 from "./step8/Step8";
import Step9 from "./step9/Step9";


import { Grid } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
    setNumStepAction,
    getListDomiciliationContributionAction,
    getlistEngagementFinancierConvRegionaleSpecifiqueAction,
    getListAutreEngagementConvRegionaleSpecifiqueAction,
    getListContributionPartenaireAction,
    getListComiteAction,
} from "../../../../redux/reducers/renseignerConvRegionaleSpecifiqueReducer";
import useAuthentication from "../../../../hooks/useAuthentication";

export interface PropsFooterStep {
    onClickPrev: React.MouseEventHandler;
    onClickNext: React.MouseEventHandler;
    onClickSave: React.MouseEventHandler;
    onClickAnnuler?: React.MouseEventHandler;
    onClickModifier?: React.MouseEventHandler;
}

export const FooterStep = ({ onClickPrev, onClickNext, onClickSave, onClickAnnuler, onClickModifier }: PropsFooterStep) => {

    const is_edit_renseigner_conv_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.isEditRenseignerConv);

    return (
        <div className='btns-footer-nav-steps'>
            {!is_edit_renseigner_conv_store &&
                <Grid container spacing={1} style={{ justifyContent: "end" }}>
                    <Grid item >
                        <MainButtonIcon
                            className='btn-save-steps'
                            onClick={onClickSave}
                            lchildren={<SaveOutlinedIcon style={{ color: '#222A35' }} />}
                        />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={onClickPrev} className='btn-prev' label="Précedent" />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={onClickNext} className='btn-next' label="Suivant" />
                    </Grid>
                </Grid>
            }

            {is_edit_renseigner_conv_store &&
                <Grid container spacing={1} style={{ justifyContent: "end" }}>
                    <Grid item >
                        <MainButton onClick={onClickAnnuler} className='btn-prev' label="Annuler" />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={onClickModifier} className='btn-next' label="Modifier" />
                    </Grid>
                </Grid>
            }

        </div>
    )
}



export const CarouselItem = ({ children, width }: any) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

export const Carousel = ({ children }: any) => {

    const dispatch = useAppDispatch();
    const direction_app = useAuthentication().direction

    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);


    const [activeIndex, setActiveIndex] = useState(num_current_step_store);

    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1
        }
        setActiveIndex(newIndex);
        dispatch(setNumStepAction(newIndex))
    }

    useEffect(() => {

    }, [num_current_step_store])

    return (
        <div className='carousel'>
            <div className="inner" style={{ transform: direction_app == "ltr" ? `translateX(-${num_current_step_store * 100}%)` : `translateX(${num_current_step_store * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            {/* <div className='btns-footer-nav-steps'>
                <Grid container spacing={1} style={{ justifyContent: "end" }}>
                    <Grid item >
                        <MainButtonIcon
                            className='btn-save-steps'
                            onClick={() => console.log("pressed")}
                            lchildren={<SaveOutlinedIcon style={{ color: '#222A35' }} />}
                        />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={() => { updateIndex(num_current_step_store - 1) }} className='btn-prev' label="Précedent" />
                    </Grid>
                    <Grid item >
                        <MainButton onClick={() => { updateIndex(num_current_step_store + 1) }} className='btn-next' label="Suivant" />
                    </Grid>

                </Grid>
            </div> */}
        </div>
    )
}


function RenseignerConventionRegionaleSpecifique() {

    const dispatch = useAppDispatch();
    const num_current_step_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.numCurrentStep);
    const info_generale_renseigner_conv_regionale_specifique_store = useAppSelector((state) => state.renseignerConvRegionaleSpecifiqueReducer.infoGeneraleRenseignerConvRegionaleSpecifique);

    useEffect(() => {
        dispatch(getListComiteAction());
        // dispatch(getListRemarqueAction());
        dispatch(getListDomiciliationContributionAction());
        dispatch(getlistEngagementFinancierConvRegionaleSpecifiqueAction());
        dispatch(getListAutreEngagementConvRegionaleSpecifiqueAction());
        dispatch(getListContributionPartenaireAction());
    }, [])

    return (
        <div>
            <AppbarGray
                data={["Accueil", ">", "Partenariat", ">", "Régions", ">", "Renseigner la convention",]} />

            <div className='container-renseigner-convention-regionale-specifique'>

                {/* BOX INFO CONVENTION */}
                {num_current_step_store !== 8 &&
                    <div className='box-info-conv'>
                        <div className='container-icon-info-conv'>
                            <EditRoundedIcon />
                        </div>
                        <div className='txt-info-conv'>
                            {info_generale_renseigner_conv_regionale_specifique_store.titleConv}
                        </div>
                    </div>
                }


                <Carousel>
                    <CarouselItem>
                        <Step1 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step2 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step3 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step4 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step5 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step6 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step7 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step8 />
                    </CarouselItem>
                    <CarouselItem>
                        <Step9 />
                    </CarouselItem>
                </Carousel>

            </div>
        </div>
    );
}

export default RenseignerConventionRegionaleSpecifique;