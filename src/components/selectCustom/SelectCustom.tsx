import React from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import "./styles.scss";
import useAuthentication from '../../hooks/useAuthentication';
// import { makeStyles } from '@material-ui/styles';
// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';

const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
        color: "#858789"
    }
}));

const Placeholder = ({ children }: any) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
};


const useContainerValueStyles = makeStyles(theme => ({
    placeholder: {
        color: "#202125",
        fontFamily: "Rubik-Regular",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "-0.23px",
        lineHeight: "17px",
        overflow: "hidden",
    }
}));

const ContainerValue = ({ children }: any) => {
    const classes = useContainerValueStyles();
    return <div className={classes.placeholder}>{children}</div>;
};

export interface Props {
    value: string;
    onChange: any;
    open: boolean;
    handleClose: any;
    handleOpen: any | undefined
    data: any;
    selectItemHandler: any,
    customStyle: React.CSSProperties;
    titleSelect: string;
    isShowTitleSelect?: boolean;
    children: React.ReactNode;
    txtPlaceholder?: string;
    disabled?: boolean
}

function SelectCustom({
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
    disabled
}: Props) {

    const direction_app = useAuthentication().direction;

    return (
        <FormControl sx={{ m: 0, width: "100%" }} disabled={disabled}>
            {/* <InputLabel htmlFor="grouped-native-select">groupeffffffd</InputLabel> */}
            {isShowTitleSelect &&
                <div className='div-title-select'>{titleSelect}</div>
            }
            <Select
                // defaultValue=""
                id="grouped-native-select"
                value={value}
                onChange={onChange}
                IconComponent={() => <KeyboardArrowDownRoundedIcon className={direction_app === "ltr" ? 'position-ltr-icon-select ' : 'position-rtl-icon-select '} onClick={disabled ? undefined : handleOpen} />}
                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px", ...customStyle }}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                // label="Age"
                renderValue={
                    value?.length ? () => <ContainerValue>{value}</ContainerValue> : () => <Placeholder>{txtPlaceholder}</Placeholder>
                }
                displayEmpty={true}
            // renderValue={value?.length ? Array.isArray(value) ? value.join(', ') : () => <ContainerValue>{value}</ContainerValue> : () => <Placeholder>{txtPlaceholder}</Placeholder>}
            // renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : 'Placeholder'}
            >
                {/* {data.map((type: any) => (
                    <MenuItem className='item-region' key={type.id} value={type.name} onClick={() => selectItemHandler(type)}>
                        {type.name}
                    </MenuItem>
                ))} */}
                {children}
            </Select>
        </FormControl>
    );
}

export default SelectCustom;