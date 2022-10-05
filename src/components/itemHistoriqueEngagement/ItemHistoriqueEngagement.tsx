import React from 'react';
import BoxIconTitleSubTitle from '../boxIconTitleSubTitle/BoxIconTitleSubTitle';
import "./itemHistoriqueEngagement.scss";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export interface Props {
    date: string;
    action: string;
}

function ItemHistoriqueEngagement({ date, action }: Props) {
    return (
        <div className='container-item-historique-engagement'>
            {/* HEADER */}
            <div className='header-item-historique-engagement'>
                {/* <div className='txt-date'>Date</div>
                <div className='txt-val-date'>{date}</div> */}
                <BoxIconTitleSubTitle
                    children={<CheckBoxOutlinedIcon sx={{ fontSize: "18px" }} />}
                    title="Date"
                    subTitle={date}
                />
            </div>
            {/* CONTENT */}
            <div className='content-engagement'>
                <div className='txt-engagement-observations'>Actions réalisées</div>
                <div className='val-engagement'>
                    {action}
                </div>
            </div>
        </div>
    );
}

export default ItemHistoriqueEngagement;