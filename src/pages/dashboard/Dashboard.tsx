import React from 'react';
import { Boxe, ServiceItem } from "../../components";
import { Box, Container, Stack, Grid } from '@mui/material';
import { ImagesConstants } from "../../constants";
import { useNavigate } from "react-router-dom";
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { LIST_SERVICE } from "../../constants/DataConstants";
import { Service } from '../../models/service';
// import Grid from '@mui/material/Grid';


function Dashboard() {
    const { t, i18n } = useTranslation();

    let navigate = useNavigate();


    const navigateToPages = (root: string) => {
        navigate(root)
    }

    return (
        <div className='dashboardStyle'>

            <div className='containerSides'>
                <Box
                    flex={1.3}
                    className='leftSide'
                >
                    <div className='txt-suivi-partenariats-action-des-services-deconcentres'>{t('suivi_partenariats_action_des_services_deconcentres_key')}</div>
                    <div className='txt-consulter-services'>{t('consulter_services_key')}</div>

                    {/* <ServiceItem nameService='Stratégies nationales' onClick={() => console.log("pressed")} /> */}

                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3}>
                            {LIST_SERVICE.map((item: Service, index: number) => {
                                return (
                                    <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={index}>
                                        <ServiceItem
                                            nameService={item.name}
                                            icon={item.icon}
                                            onClick={() => navigateToPages(item.root)}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                </Box>
                <Box flex={1} className="rightSide" sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } }}>
                    <img
                        src={ImagesConstants.imgdashboard}
                        className="img-dashboard-style"
                    />
                </Box>
            </div>



        </div>
    );
}

export default Dashboard;