import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { FormControl, TextField } from '@mui/material';
import useAuthentication from '../../hooks/useAuthentication';
import { arDZ, arMA, arEG, arTN, enUS, frCA } from 'date-fns/locale';
import "./styles.scss";
import { CalendarPickerView } from '@mui/x-date-pickers';
import {
    StyledDisabledTextField,
    StyledTextFieldEmpty
} from "../styledComponents";

export interface Props {
    selectedDate: Date | null;
    setSelectedDate: any;
    isShowTitle: boolean;
    title: string;
    label?: string;
    views?: readonly CalendarPickerView[];
    classNameInput?: string;
}

function InputDatePicker({ selectedDate, setSelectedDate, isShowTitle, title, label, views, classNameInput }: Props) {

    const language_app = useAuthentication().language;


    return (
        <FormControl sx={{ m: 0, width: "100%" }}>
            {isShowTitle &&
                <div className='div-title-dateTime-picker'>{title}</div>
            }
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={language_app === "ar" ? arMA : (language_app === "en" ? enUS : frCA)}>
                <DatePicker
                    views={views}
                    label={selectedDate === null ? label : ""}
                    value={selectedDate}
                    onChange={(newValue) => {
                        console.log(newValue)
                        setSelectedDate(newValue)
                    }}

                    renderInput={(params) =>
                        <TextField
                            InputLabelProps={{ shrink: false }}
                            disabled
                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px", }}
                            className={classNameInput}
                            {...params} />}

                    components={{
                        OpenPickerIcon: EventAvailableOutlinedIcon
                    }}

                />
            </LocalizationProvider>
        </FormControl>
    );
}

export default InputDatePicker;