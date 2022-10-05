import React from 'react';
import './styles.scss';

export interface Props {
    onClick?: React.MouseEventHandler,
    nameService: string,
    icon: string,

}


function ServiceItem({
    nameService,
    icon,
    onClick }: Props) {
    return (
        <div className='main-container' onClick={onClick}>
            <div className='containerItemService' >
                <img
                    src={icon}
                    className='icon-style'
                    // src={require('../../assets/svg/strategies-nationales.svg').default} 
                    alt='mySvgImage'
                />
                {nameService}
            </div>
        </div>

    );
}

export default ServiceItem;