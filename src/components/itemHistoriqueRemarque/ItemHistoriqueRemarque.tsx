import React from 'react';
import "./styles.scss";

export interface Props {
    date: string;
    remarque: string;
}

function ItemHistoriqueRemarque({ date, remarque }: Props) {
    return (
        <div className='container-item-historique-remarque'>
            {/* HEADER */}
            <div className='header-item-historique-remarque'>
                <div className='txt-date'>Date</div>
                <div className='txt-val-date'>{date}</div>
            </div>
            {/* CONTENT */}
            <div className='content-remarque'>
                <div className='txt-remarques-observations'>Remarques/observations</div>
                <div className='val-remarque'>
                    {remarque}
                </div>
            </div>
        </div>
    );
}

export default ItemHistoriqueRemarque;