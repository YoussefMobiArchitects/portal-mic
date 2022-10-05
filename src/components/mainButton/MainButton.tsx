import { Button } from '@mui/material';
import React from 'react';
import "./styles.scss"

export interface Props {
    onClick?: React.MouseEventHandler;
    className: string;
    label: string;
    startIcon?: React.ReactNode;
    id?: string;
    type?: "button" | "submit" | "reset" | undefined
}


function MainButton({ onClick, className, label, startIcon, id, type }: Props) {
    return (
        <Button id={id} onClick={onClick} className={`main-btn ${className}`} startIcon={startIcon} type={type} >{label}</Button>
    );
}

export default MainButton;