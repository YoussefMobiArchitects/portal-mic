import React from 'react';
import useAuthentication from '../../hooks/useAuthentication';
import './styles.scss'

function Footer() {
    const direction_app = useAuthentication().direction;
    return (
        <div className='footerContainer'>
            <div className={direction_app == "ltr" ? 'txtFooterStyleLtr' : 'txtFooterStyleRtl'}>
                Copyright © Ministère de l'Industrie et du Commerce
            </div>
        </div>
    );
}

export default Footer;