import React from 'react';
import './styles.scss'

export interface Props {
    num: number;
}

function Boxe(
    {
        num
    }: Props
) {
    return (
        <div className='containerBox'>
            box {num}
        </div>
    );
}

export default Boxe;