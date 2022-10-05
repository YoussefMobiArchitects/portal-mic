import React, { useEffect, useState } from 'react';
import "./styles.scss";
import { AppbarGray, MainButton } from '../../../../components';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Grid } from '@mui/material';
import { useAppDispatch } from '../../../../hooks';
import useAuthentication from '../../../../hooks/useAuthentication';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';



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

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1
        }
        setActiveIndex(newIndex);

    }

    useEffect(() => {

    }, [])

    return (
        <div className='carousel'>

            {/* CONTAINER SWITCH BTNS */}
            <div style={{ marginBottom: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <MainButton onClick={() => { updateIndex(0) }} label="Aperçu sur la Convention" className={activeIndex == 0 ? 'btn-switch-section-consult-conv-active' : 'btn-switch-section-consult-conv-inactive'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <MainButton onClick={() => { updateIndex(1) }} label="Conventions en lien avec la convention cadre" className={activeIndex == 1 ? 'btn-switch-section-consult-conv-active' : 'btn-switch-section-consult-conv-inactive'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <MainButton onClick={() => { updateIndex(2) }} label="Conventions en lien avec la convention cadre" className={activeIndex == 2 ? 'btn-switch-section-consult-conv-active' : 'btn-switch-section-consult-conv-inactive'} />
                    </Grid>
                </Grid>
            </div>

            <div className="inner" style={{ transform: direction_app == "ltr" ? `translateX(-${activeIndex * 100}%)` : `translateX(${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

        </div>
    )
}

function ConsulterConvention() {
    return (
        <div>
            <AppbarGray
                data={["Accueil", ">", "Partenariat", ">", "Régions", ">", "Consulter la convention",]} />

            <div className='container-consulter-convention-page'>
                {/* BOX INFO CONVENTION */}
                <div className='box-info-consulter-conv'>
                    <div className='container-icon-info-consulter-conv'>
                        <EditRoundedIcon />
                    </div>
                    <div className='txt-info-consulter-conv'>
                        Signature d’une convention cadre pour le renforcement de la formation dans les secteurs industriels
                    </div>
                </div>




                <Carousel >
                    <CarouselItem>
                        <Section1 />
                    </CarouselItem>
                    <CarouselItem>
                        <Section2 />
                    </CarouselItem>
                    <CarouselItem >
                        <Section3 />
                    </CarouselItem>
                </Carousel>


            </div>
        </div>
    );
}

export default ConsulterConvention;