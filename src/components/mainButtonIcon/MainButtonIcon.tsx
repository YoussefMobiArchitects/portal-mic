import React from 'react';
import { IconButton } from '@mui/material';
import "./styles.scss"

export interface Props {
    onClick?: React.MouseEventHandler;
    className: string;
    lchildren: React.ReactNode;
    id?:string;

}

function MainButtonIcon({ onClick, className, lchildren,id }: Props) {
    return (
        <IconButton onClick={onClick} className={`main-btn-icon ${className}`} id={id}>
            {lchildren}
        </IconButton>
    );
}

export default MainButtonIcon;