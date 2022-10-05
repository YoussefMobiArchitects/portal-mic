import React from 'react';
import "./styles.scss";

export interface Props {
    children: React.ReactNode;
    title?: string;
    subTitle?: string;
    className?: string;
    classNameContainerIcon?: string;
}

function BoxIconTitleSubTitle({ children, title, subTitle, className, classNameContainerIcon }: Props) {
    return (
        <div className={`container-box-icon-title-subtitle ${className}`}>
            <div className={`icon-box-icon-title-subtitle ${classNameContainerIcon}`} style={{display: "flex"}}> {children}</div>
            <div className='right-side-box-icon-title-subtitle'>
                <div className='title-box-icon-title-subtitle'>{title}</div>
                <div className='subtitle-box-icon-title-subtitle'>{subTitle}</div>
            </div>
        </div>
    );
}

export default BoxIconTitleSubTitle;