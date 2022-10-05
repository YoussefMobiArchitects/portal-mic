import { Button, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import useAuthentication from "../../hooks/useAuthentication";
import MainButton from "../mainButton/MainButton";
import MainButtonIcon from "../mainButtonIcon/MainButtonIcon"

export interface Props {
    onClickRenseigner?: React.MouseEventHandler;
    onClickSupprimer?: React.MouseEventHandler;
    onClickConsulter?: React.MouseEventHandler;
    dateUpdate: string;
    isDimensionRoyale: boolean;
    idTypeConvention: number;
    typeConvention: string;
    txtColorTypeConvention: string;
    backgroundColorTypeConvention: string;
    idStatusConvention: number;
    statusConvention: string;
    txtColorStatusConvention: string;
    backgroundColorStatusConvention: string;
    description: string;
    dateSignature: string;
    isShowBtns?: boolean;
    containerClassName?:string;

}


function ConventionItem({
    onClickRenseigner,
    onClickSupprimer,
    onClickConsulter,
    dateUpdate,
    isDimensionRoyale,
    idTypeConvention,
    typeConvention,
    txtColorTypeConvention,
    backgroundColorTypeConvention,
    idStatusConvention,
    statusConvention,
    txtColorStatusConvention,
    backgroundColorStatusConvention,
    description,
    dateSignature,
    isShowBtns,
    containerClassName,
}: Props) {

    const direction = useAuthentication().direction;

    return (
        <div className={`container-item-conv ${containerClassName}`}>
            {isDimensionRoyale &&
                <img
                    className={direction == 'ltr' ? 'icon-flag-maroc-ltr' : 'icon-flag-maroc-rtl'}
                    src={require('../../assets/svg/flagmaroc.svg').default}
                    alt='mySvgImage'
                />
            }

            {/* TOP SIDE */}
            <div className='top-side-conv-item'>
                <div className='txt-date-update'><div>Dernière mise à jour le</div> <div className='txt-val-date-update'>{dateUpdate}</div></div>
                <div className='container-type-status'>
                    <div className='type-conv' style={{ backgroundColor: backgroundColorTypeConvention, color: txtColorTypeConvention }}>{typeConvention}</div>
                    <div className='status-conv' style={{ backgroundColor: backgroundColorStatusConvention, color: txtColorStatusConvention }}>{statusConvention}</div>
                </div>
                {/* <div className='txt-desc-conv'>
                    {description}
                </div> */}
                <Typography
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                    }}
                    variant="body1"
                    className='txt-desc-conv'
                    >
                    {description}
                </Typography>
            </div>
            {/* BOTTOM SIDE */}
            <div className='bottom-side-conv-item '>
                {isShowBtns != false &&
                    <div>
                        {idStatusConvention === 1 &&
                            <div className='btns-renseigne-delete-consulter'>

                                <MainButton id="id-btn-renseigner-conv" onClick={onClickRenseigner} label="Renseigner la convention" className='btn-renseigner-conv' />

                                <MainButtonIcon
                                    onClick={onClickSupprimer}
                                    className='btn-delete-conv'
                                    lchildren={<DeleteOutlineIcon />}
                                    id="id-btn-delete-conv"
                                />

                            </div>
                        }
                        {idStatusConvention !== 1 &&
                            <div className='btns-renseigne-delete-consulter'>
                                {/* <Button id="id-btn-consulter-conv" onClick={onClickConsulter} className='btn-consulter-conv'>Consulter</Button> */}
                                <MainButton id="id-btn-consulter-conv" onClick={onClickConsulter} label="Consulter" className='btn-consulter-conv' />

                            </div>
                        }
                    </div>

                }

                <div className='date-signature-conv-item '>
                    <div className='txt-bottom-side'>
                        <div className='round-pen'>
                            <EditIcon fontSize='small' />
                        </div>
                        <div className='txt-date-signature'>Date signature</div>
                    </div>
                    <div className='txt-bottom-side'>{dateSignature}</div>
                </div>
            </div>


        </div>

    );
}

export default ConventionItem;