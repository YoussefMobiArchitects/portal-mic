import React from 'react';
import BoxIconTitleSubTitle from '../boxIconTitleSubTitle/BoxIconTitleSubTitle';
import "./styles.scss";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';

export interface Props {
    id: number;
    idStatus: number;
    status: string;
    txtColorStatus: string;
    bgColorStatus: string;
    titleProjet: string;
    coutGlobal: number;
    contribution: number;
    situationDeblocage: number;
    dateDerniereSituation: string;
    onClick?: React.MouseEventHandler;

}

function ItemProjet({ id, idStatus, status, txtColorStatus, bgColorStatus, titleProjet, coutGlobal, contribution, situationDeblocage, dateDerniereSituation, onClick }: Props) {


    return (
        <div className='container-item-projet-consult-conv' onClick={onClick}>
            {/* status && title projet */}
            <div className='container-status-title'>
                <div className='div-status' style={{ backgroundColor: `${bgColorStatus}`, color: `${txtColorStatus}` }}>{status}</div>

                <BoxIconTitleSubTitle
                    children={<ArticleOutlinedIcon style={{ fontSize: "18px" }} />}
                    subTitle={titleProjet}
                    className='sub-classname-container-box-icon-title-sub-title'
                    classNameContainerIcon='container-icon'
                />
            </div>
            {/* cout & contribution */}
            <Grid container spacing={0} >
                <Grid item xs={12} sm={6}>
                    <Box style={{ padding: "20px" }} sx={{ borderLeft: { xs: "0px solid #f2f2f2" }, borderRight: { xs: "0px solid #f2f2f2", sm: "1px solid #f2f2f2" }, borderTop: "1px solid #f2f2f2", borderBottom: "1px solid #f2f2f2" }}>
                        <div className='txt-title-coutglobale-contribution'>Coût global du projet</div>
                        <div className='val-coutglobale-contribution'>{coutGlobal}MDH</div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box style={{ padding: "20px" }} sx={{ borderLeft: { xs: "0px solid #f2f2f2" }, borderRight: { xs: "0px solid #f2f2f2", sm: "0px solid #f2f2f2" }, borderTop: { xs: "0px solid #f2f2f2", sm: "1px solid #f2f2f2" }, borderBottom: "1px solid #f2f2f2" }}>
                        <div className='txt-title-coutglobale-contribution'>Contribution du Ministère</div>
                        <div className='val-coutglobale-contribution'>{coutGlobal}MDH</div>
                    </Box>
                </Grid>
            </Grid>
            {/* situation */}
            <Box style={{ padding: "20px", borderBottom: "1px solid #f2f2f2" }}>
                <div className='header-situation-deblocage'>
                    <div className='txt-situation '>Situation déblocage</div>
                    <div className='val-situation'>{situationDeblocage}%</div>
                </div>
                <LinearProgress variant="determinate" value={situationDeblocage} color="success" />
            </Box>
            {/* date */}
            <Box style={{ padding: "20px" }}>
                <div className='date-derniere-situation'>
                    Dernière situation {dateDerniereSituation} par direction métier
                </div>
            </Box>
        </div>
    );
}

export default ItemProjet;