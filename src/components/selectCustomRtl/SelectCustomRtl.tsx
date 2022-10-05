import React from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import "./styles.scss";
import useAuthentication from '../../hooks/useAuthentication';
import { makeStyles } from '@mui/styles';

const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
        // color: "#858789",
        color:"#A4A4A4",
        fontWeight:"200 !important",
        fontFamily: "Rubik-Regular",
    }
}));

const Placeholder = ({ children }: any) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
};


const useContainerValueStyles = makeStyles(theme => ({
    placeholder: {
        color: "#202125",
        fontFamily: "ArbFONTS-Droid-Arabic-Kufi",
        fontSize: "14px",
        fontWeight: "500",
        letterSpacing: "-0.23px",
        lineHeight: "17px",
    }
}));

const ContainerValue = ({ children }: any) => {
    const classes = useContainerValueStyles();
    return <div className={classes.placeholder}>{children}</div>;
};

export interface Props {
    value?: string;
    onChange: any;

    open: boolean;
    handleClose: any;
    handleOpen: any
    data: any;
    selectItemHandler: any,
    customStyle: React.CSSProperties;
    titleSelect: string;
    isShowTitleSelect?: boolean;
    children: React.ReactNode;
    txtPlaceholder?: string;
    ref?: any;
}

function SelectCustomRtl({
    value,
    onChange,
    open,
    handleClose,
    handleOpen,
    data,
    selectItemHandler,
    customStyle,
    titleSelect,
    isShowTitleSelect,
    children,
    txtPlaceholder,
    ref
}: Props) {

    const direction_app = useAuthentication().direction;

    return (
        <FormControl sx={{ m: 0, width: "100%" }}>
            {isShowTitleSelect &&
                <div className='div-title-select'>{titleSelect}</div>
            }
            <Select

                id="grouped-native-select"
                value={value}
                onChange={onChange}
                IconComponent={() => <KeyboardArrowDownRoundedIcon className='position-rtl-icon-select' onClick={handleOpen} />}
                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px", ...customStyle }}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                
                renderValue={
                    value?.length ? () => <ContainerValue>{value}</ContainerValue> : () => <Placeholder>{txtPlaceholder}</Placeholder>
                }
                displayEmpty={true}
                ref={ref}
            
            >

                {children}
            </Select>
        </FormControl>
    );
}

export default SelectCustomRtl;