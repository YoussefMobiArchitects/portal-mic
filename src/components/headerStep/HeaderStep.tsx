import React from 'react';
import MainButton from '../mainButton/MainButton';
import "./styles.scss"
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export interface Props {
    label: string;
    numStep: number
    onClickEditHandler?:React.MouseEventHandler,
    isShowEditBtn?:boolean;
}

function HeaderStep({ label, numStep, onClickEditHandler,isShowEditBtn }: Props) {
    return (
        <div className='container-header-step-renseigner-conv'>
            <div className='container-header-step-left-side'>
                <div className='div-num-step'>{numStep}</div>
                <div className='div-label-step'>{label}</div>
            </div>

            {isShowEditBtn &&
                <MainButton
                    onClick={onClickEditHandler}
                    className='btn-edit-step1'
                    label='Modifier'
                    startIcon={<BorderColorOutlinedIcon />}
                />
            }


        </div>
    );
}

export default HeaderStep;