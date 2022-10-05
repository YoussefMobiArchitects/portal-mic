import React from 'react';
import "./styles.scss";
import Modal from '@mui/material/Modal';
import { Box, InputAdornment, List, Select, SelectChangeEvent, Typography } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {
    LIST_REGION,
    LIST_TYPE_CONVENTION,
    LIST_CONTEXTE_CONVENTION,
    LIST_DIMENSION_ROYALE,
    LIST_INTITULE_CONVENTION,
    LIST_SECTEUR
} from "../../constants/DataConstants";
import MainButton from "../mainButton/MainButton";
import { arDZ, arMA, arEG, arTN, enUS, frCA } from 'date-fns/locale';
import useAuthentication from "../../hooks/useAuthentication";


import { Region } from '../../models/region';
import { TypeConvention } from '../../models/typeConvention';
import { ContexteConvention } from '../../models/contexteConvention';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Dropzone from 'react-dropzone'
import { DimensionRoyale } from '../../models/dimensionRoyale';
import { IntituleConvention } from '../../models/intituleConvention';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Secteur } from '../../models/secteur';
import { Person } from '@mui/icons-material';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SecteurPartenariatI } from '../../models/secteurPartenariat';

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd?: React.MouseEventHandler,
    isOpen: boolean,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ModalAddConvention({ isOpen, onClickClose, onClickAdd }: Props) {

    const dispatch = useAppDispatch();
    const liste_secteur_partenariat_store = useAppSelector((state) => state.listSecteurPartenariatReducer.data);

    const language_app = useAuthentication().language;
    const direction_app = useAuthentication().direction;


    const [regionNational, setRegionNational] = React.useState<Region>({ id: "0", d: "", name: "National" });
    const [selectedRegion, setSelectedRegion] = React.useState<Region>({ id: "", d: "", name: "" });
    const [region, setRegion] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(event.target.value);
    };

    const selectRegionHandler = (reg: Region) => {
        setSelectedRegion(reg)
        console.log("the region is : ", reg)
    }
    const selectRegionNationlHandler = (reg: Region) => {
        setSelectedRegion(reg)
        console.log("the region is : ", reg)
    }

    /* #region TYPE CONVENTION  */
    const [selectedTypeConvention, setSelectedTypeConvention] = React.useState<TypeConvention>({ id: "", name: "" });
    const [TypeConvention, setTypeConvention] = React.useState("");
    const handleChangeTypeConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeConvention(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleChangeTypeConvention2 = (event: SelectChangeEvent<unknown>) => {
        setTypeConvention(event.target.value as string);
        console.log(event.target.value);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const selectTypeConventionHandler = (type: TypeConvention) => {
        setSelectedTypeConvention(type)
        console.log("the type is : ", type)
    }
    /* #endregion */

    /* #region CONTEXTE DE LA CONVENTION CADRE */
    const [selectedContexteConvention, setSelectedContexteConvention] = React.useState<ContexteConvention>({ id: "", name: "" });
    const [contexteConvention, setContexteConvention] = React.useState("");
    const handleChangeContexteConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContexteConvention(event.target.value);
    };

    const selectContexteConventionHandler = (Contexte: ContexteConvention) => {
        setSelectedContexteConvention(Contexte)
        console.log("the type is : ", Contexte)
    }
    /* #endregion */

    /* #region DIMENSION ROYALE */
    const [selectedDimensionRoyale, setSelectedDimensionRoyale] = React.useState<DimensionRoyale>({ id: "", name: "" });
    const [dimensionRoyale, setDimensionRoyale] = React.useState("");
    const handleChangeDimensionRoyale = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDimensionRoyale(event.target.value);
    };

    const selectDimensionRoyaleHandler = (Contexte: DimensionRoyale) => {
        setSelectedDimensionRoyale(Contexte)
        console.log("the type is : ", Contexte)
    }
    /* #endregion */

    /* #region INTITULÉ CONVENTION */
    const [selectedIntituleConvention, setSelectedIntituleConvention] = React.useState<IntituleConvention>({ id: "", name: "" });
    const [intituleConvention, setIntituleConvention] = React.useState("");
    const handleChangeIntituleConvention = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIntituleConvention(event.target.value);
    };

    const selectIntituleConventionHandler = (Intitule: IntituleConvention) => {
        setSelectedIntituleConvention(Intitule)
        console.log("the type is : ", Intitule)
    }
    /* #endregion */

    /* #region DATE */
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [value, setValue] = React.useState<Date | null>(null);
    /* #endregion */

    /* #region SECTEUR */
    const [selectedSecteur, setSelectedSecteur] = React.useState<SecteurPartenariatI>({ id: "", axm_name: "", axm_codesecteur: "" });
    const [secteur, setSecteur] = React.useState("");
    const handleChangeSecteur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecteur(event.target.value);
    };

    const selectSecteurHandler = (Intitule: SecteurPartenariatI) => {
        setSelectedSecteur(Intitule)
        console.log("the type is : ", Intitule)
    }
    /* #endregion */

    /* #region UPLOAD FILE  */
    const [nameFile, setNameFile] = React.useState("Glisser ou bien upload votre fichier scanné ici");


    const onDropFileHandler = (acceptedFiles: any) => {
        console.log(acceptedFiles)
        setNameFile(acceptedFiles[0].name)

        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            console.log("binaryStr : ", binaryStr)
        }
    }
    /* #endregion */
    return (
        <Modal
            open={isOpen}
            onClose={onClickClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px", }]}>
                <div className='txt-title-modal-add-conv'>Ajouter une convention</div>

                {/* REGION INPUT */}
                <TextField
                    id="outlined-select-region"
                    select
                    label="Partenariat*"
                    value={region}
                    onChange={handleChange}
                    // helperText="Please select your currency"
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                >
                    <div className='type-partenariat'>National</div>
                    <MenuItem className='item-region' value={regionNational.name} onClick={() => selectRegionNationlHandler(regionNational)}>
                        {regionNational.name}
                    </MenuItem>
                    <div className='type-partenariat'>Régional</div>
                    {LIST_REGION.map((reg) => (
                        <MenuItem className='item-region' key={reg.id} value={reg.name} onClick={() => selectRegionHandler(reg)}>
                            {reg.name}
                        </MenuItem>
                    ))}
                </TextField>

                {/* TYPE CONVENTION */}
                <TextField
                    id="outlined-select-type-convention"
                    select
                    label="Type de convention*"
                    value={TypeConvention}
                    onChange={handleChangeTypeConvention}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                >
                    {LIST_TYPE_CONVENTION.map((type) => (
                        <MenuItem className='item-region' key={type.id} value={type.name} onClick={() => selectTypeConventionHandler(type)}>
                            {type.name}
                        </MenuItem>
                    ))}
                </TextField>

                {/* <Select
                    value={TypeConvention}
                    onChange={handleChangeTypeConvention2}
                    IconComponent={() => <Person style={{ zIndex: "0", margin: "0px 15px", position: "absolute", right: "0",cursor:"pointer" }} onClick={handleOpen}/>}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px",backgroundColor:"red" }}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                >
                    {LIST_TYPE_CONVENTION.map((type) => (
                        <MenuItem className='item-region' key={type.id} value={type.name} onClick={() => selectTypeConventionHandler(type)}>
                            {type.name}
                        </MenuItem>
                    ))}
                </Select> */}

                {/* CONTEXTE CONVENTION */}
                <TextField
                    id="outlined-select-contexte-convention"
                    select
                    label="Contexte de la convention cadre"
                    value={contexteConvention}
                    onChange={handleChangeContexteConvention}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                >
                    {LIST_CONTEXTE_CONVENTION.map((contexte) => (
                        <MenuItem className='item-region' key={contexte.id} value={contexte.name} onClick={() => selectContexteConventionHandler(contexte)}>
                            {contexte.name}
                        </MenuItem>
                    ))}
                </TextField>

                {/* DIMENSION ROYALE */}
                <TextField
                    id="outlined-select-dimension-royale"
                    select
                    // label="Dimension Royale"
                    label={dimensionRoyale === "" ? "Dimension Royale" : ""}
                    value={dimensionRoyale}
                    onChange={handleChangeDimensionRoyale}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                    InputLabelProps={{ shrink: false }}
                >
                    {LIST_DIMENSION_ROYALE.map((dimension) => (
                        <MenuItem className='item-region' key={dimension.id} value={dimension.name} onClick={() => selectDimensionRoyaleHandler(dimension)}>
                            {dimension.name}
                        </MenuItem>
                    ))}
                </TextField>
                {/* INTITULÉ CONVENTION */}
                <TextField
                    id="outlined-select-intitule-convention"
                    select
                    label={intituleConvention === "" ? "Intitulé de la convention cadre*" : ""}
                    value={intituleConvention}
                    onChange={handleChangeIntituleConvention}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                    InputLabelProps={{ shrink: false }}
                >
                    {LIST_INTITULE_CONVENTION.map((intitule) => (
                        <MenuItem className='item-region' key={intitule.id} value={intitule.name} onClick={() => selectIntituleConventionHandler(intitule)}>
                            {intitule.name}
                        </MenuItem>
                    ))}
                </TextField>
                {/* DATE */}
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={language_app === "ar" ? arMA : (language_app === "en" ? enUS : frCA)}>
                    <DatePicker
                        label={selectedDate === null ? "Date signature" : ""}
                        value={selectedDate}
                        onChange={(newValue) => {
                            console.log(newValue)
                            setValue(newValue);
                            setSelectedDate(newValue)
                        }}
                        renderInput={(params) =>
                            <TextField
                                InputLabelProps={{ shrink: false }}
                                disabled
                                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px", }} {...params} />}

                        components={{
                            OpenPickerIcon: EventAvailableOutlinedIcon
                        }}

                    />
                </LocalizationProvider>

                {/* SECTEUR */}
                <TextField
                    id="outlined-select-secteur"
                    select
                    label={secteur === "" ? "Secteur" : ""}
                    value={secteur}
                    onChange={handleChangeSecteur}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                    size="medium"
                    InputLabelProps={{ shrink: false }}
                >
                    {liste_secteur_partenariat_store.map((secteur) => (
                        <MenuItem className='item-region' key={secteur.id} value={secteur.axm_name} onClick={() => selectSecteurHandler(secteur)}>
                            {secteur.axm_name}
                        </MenuItem>
                    ))}
                </TextField>

                {/* <TextField
                    id="outlined-select-date"
                    disabled
                    // label="Dimension Royale"
                    label={selectedDate === "" ? "Date signature" : ""}
                    value={selectedDate}
                    onChange={handleChangeIntituleConvention}
                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px", }}
                    size="medium"
                    InputLabelProps={{ shrink: false }}
                    onClick={() => console.log("pressed")}
                    InputProps={{
                        // startAdornment: (
                        //     <InputAdornment position="start">
                        //         <FileDownloadOutlinedIcon />
                        //     </InputAdornment>
                        // ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <CalendarTodayOutlinedIcon style={{ fontSize: "18px" }} />
                            </InputAdornment>
                        )
                    }}
                >
                </TextField> */}
                {/* UPLOAD FILE  */}
                <Dropzone onDrop={onDropFileHandler}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div className='container-drop-zone' {...getRootProps()}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div className='container-icon-upload'>
                                        <FileDownloadOutlinedIcon />
                                    </div>
                                    <input {...getInputProps()} />
                                    <div className='container-label-conv-upload'>
                                        <div className='txt-label-conv'>Convention*</div>
                                        <div className='txt-label-info-upload'>{nameFile}</div>
                                    </div>
                                </div>

                                <div className='container-add-icon'>
                                    <AddOutlinedIcon style={{ fontSize: "17px" }} />
                                </div>

                            </div>
                        </section>
                    )}
                </Dropzone>

                <div className='footer-modal-add-conv'>
                    <MainButton onClick={onClickClose} className="btn-modal-annuler-convention" label='Annuler' />
                    <MainButton onClick={onClickAdd} className="btn-modal-add-convention" label='Ajouter la convention' />
                </div>

            </Box>
        </Modal>
    );
}

export default ModalAddConvention;