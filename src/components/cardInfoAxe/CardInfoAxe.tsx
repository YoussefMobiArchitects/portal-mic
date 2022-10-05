import React from 'react';
import "./styles.scss";

export interface Props {
    nameAxe: string;
    bgColor1: string;
    bgColor2: string;
    nameRegion: string;
    infoAxe: string;
    bgColor: string;
}

function CardInfoAxe({ nameAxe, bgColor1, bgColor2, nameRegion, bgColor, infoAxe }: Props) {
    return (
        <div className='container-card-info-axe' style={{ backgroundColor: bgColor }}>
            {/* TOP */}
            <div className='container-top-card-info-axe'>
                <div
                    className='div-name-axe'
                    style={{ background: `linear-gradient(180deg, ${bgColor1} 0%, ${bgColor2} 100%)` }}
                >{nameAxe}</div>
                <div className='div-name-region'>{nameRegion}</div>
            </div>

            {/* BOTTOM */}
            <div className='container-bottom-card-info-axe'>
                {infoAxe}
            </div>

        </div>
    );
}

export default CardInfoAxe;