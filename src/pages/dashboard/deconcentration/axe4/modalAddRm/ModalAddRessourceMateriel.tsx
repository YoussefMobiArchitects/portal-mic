import React, { useEffect, useState } from 'react';
import { Grid, MenuItem, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import "./modalAddRessourceMateriel.scss";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { MainButton, SelectCustomRtl } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import { DiffusionRhItemI } from '../../../../../models/diffusionRhItem';
import { LIST_SECTEUR } from "../../../../../constants/DataConstants";
import { Secteur } from '../../../../../models/secteur';

interface onClickAddProps {
    idSecteur: number | null;
    nameRessourceMaterielle: string;
    situationActuelleAdministrationsCentrales: number | null;
    situationActuelleInteretsRegionaux: number | null;
    objectifsAtteindreYearOne: number | null;
    objectifsAtteindreYearTwo: number | null;
    objectifsAtteindreYearThree: number | null;
}

export interface Props {
    onClickClose?: React.MouseEventHandler,
    onClickAdd: ({
        idSecteur,
        nameRessourceMaterielle,
        situationActuelleAdministrationsCentrales,
        situationActuelleInteretsRegionaux,
        objectifsAtteindreYearOne,
        objectifsAtteindreYearTwo,
        objectifsAtteindreYearThree,

    }: onClickAddProps) => void;
    isOpen: boolean,
}

const style = {
    // position: 'absolute' as 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

// id: number;
// lblOrganisation: string;
// situationActuelleAdministrationsCentrales: number | null;
// situationActuelleInteretsRegionaux: number | null;
// objectifsAtteindreYearOne: number | null;
// objectifsAtteindreYearTwo: number | null;
// objectifsAtteindreYearThree: number | null;

function ModalAddRessourceMateriel({ isOpen, onClickClose, onClickAdd }: Props) {

    const liste_diffusion_rh_store = useAppSelector((state) => state.deconcentrationListDiffusionRhReducer.liste_diffusion_rh);

    /* #region  THÉME */
    const Theme = createTheme({ direction: "rtl" });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    /* #endregion */

    const [isSwitchOneActive, setIsSwitchOneActive] = useState(true);


    /* #region SELECT SECTEUR */
    const [selectedSecteur, setSelectedSecteur] = React.useState<DiffusionRhItemI>({ id: null, lblOrganisation: "", situationActuelleAdministrationsCentrales: null, situationActuelleInteretsRegionaux: null, objectifsAtteindreYearOne: null, objectifsAtteindreYearTwo: null, objectifsAtteindreYearThree: null });
    const [secteur, setSecteur] = React.useState("");
    const handleChangeSecteur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecteur(event.target.value);
    };
    const [openMenuSecteur, setOpenMenuSecteur] = React.useState(false);
    const handleCloseMenuSecteur = () => {
        setOpenMenuSecteur(false);
    };
    const handleOpenMenuSecteur = () => {
        setOpenMenuSecteur(true);
    };
    const selectSecteurHandler = (item: any) => {
        setSelectedSecteur(item)
    }
    /* #endregion */
    /* #region  situationActuelleAdministrationsCentrales */
    const [nameRessourceMaterielle, setNameRessourceMaterielle] = React.useState<string>("")
    const handleChangeInputNameRessourceMaterielle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameRessourceMaterielle(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  situationActuelleAdministrationsCentrales */
    const [situationActuelleAdministrationsCentrales, setsituationActuelleAdministrationsCentrales] = React.useState<string>("")
    const handleChangeInputSituationActuelleAdministrationsCentrales = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsituationActuelleAdministrationsCentrales(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region  SituationActuelleInteretsRegionaux */
    const [situationActuelleInteretsRegionaux, setSituationActuelleInteretsRegionaux] = React.useState<string>("")
    const handleChangeInputSituationActuelleInteretsRegionaux = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSituationActuelleInteretsRegionaux(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    /* #region  objectifsAtteindreYearOne */
    const [objectifsAtteindreYearOne, setObjectifsAtteindreYearOne] = React.useState<string>("")
    const handleChangeInputObjectifsAtteindreYearOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObjectifsAtteindreYearOne(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  objectifsAtteindreYearTwo */
    const [objectifsAtteindreYearTwo, setObjectifsAtteindreYearTwo] = React.useState<string>("")
    const handleChangeInputObjectifsAtteindreYearTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObjectifsAtteindreYearTwo(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */
    /* #region  objectifsAtteindreYearThree */
    const [objectifsAtteindreYearThree, setObjectifsAtteindreYearThree] = React.useState<string>("")
    const handleChangeInputObjectifsAtteindreYearThree = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObjectifsAtteindreYearThree(event.target.value);
        console.log(event.target.value);
    };
    /* #endregion */

    useEffect(() => {
        setSecteur("");
    }, [isOpen])
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Theme}>
                <Modal
                    open={isOpen}
                    onClose={onClickClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-add-situation-organisme"
                    dir="rtl"
                    sx={{ display: "flex", alignItems: 'flex-start', justifyContent: 'center', marginTop: "3%" }}
                >
                    <Box sx={[style, { width: { xs: "70%", sm: "70%", md: "520px" }, borderRadius: "4px" }]}>
                        <div className='txt-title-modal-add-situation-organisme'>أضف الموارد المادية</div>
                        <div className='container-switch'>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={6} >
                                    <div
                                        className={isSwitchOneActive ? 'div-switch-active' : 'div-switch-inactive'}
                                        onClick={() => setIsSwitchOneActive(true)}
                                    >المصالح الإقليمية</div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div
                                        className={isSwitchOneActive ? 'div-switch-inactive' : 'div-switch-active'}
                                        onClick={() => setIsSwitchOneActive(false)}
                                    >الإدارات المركزية</div>
                                </Grid>
                            </Grid>
                        </div>
                        <Grid >
                            <Grid item xs={12}>
                                {/* Secteur*/}
                                <SelectCustomRtl
                                    value={secteur}
                                    open={openMenuSecteur}
                                    data={LIST_SECTEUR}
                                    handleClose={handleCloseMenuSecteur}
                                    handleOpen={handleOpenMenuSecteur}
                                    onChange={handleChangeSecteur}
                                    selectItemHandler={selectSecteurHandler}
                                    customStyle={{ backgroundColor: "#FFFFFF", height: "50px", fontFamily: "ArbFONTS-Droid-Arabic-Kufi-Bold !important",marginBottom:"10px" }}
                                    titleSelect="القطاع"
                                    isShowTitleSelect={false}
                                    txtPlaceholder="القطاع"
                                >
                                    {LIST_SECTEUR.map((sec: Secteur) => (
                                        <MenuItem className='item-dropdown-sec' key={sec.id} value={sec.nameAr} onClick={() => selectSecteurHandler(sec)}>
                                            <div style={{ width: "100%", textAlign: "end", fontFamily: "ArbFONTS-Droid-Arabic-Kufi", fontSize: "14px" }} >
                                                {sec.nameAr}
                                            </div>
                                        </MenuItem>
                                    ))}
                                </SelectCustomRtl>
                            </Grid>
                            <Grid item xs={12}>
                                {/* Name ressource materielle */}
                                <TextField
                                    // label={nameRessourceMaterielle == "" ? "الموارد المادية" : ""}
                                    placeholder="الموارد المادية"
                                    value={nameRessourceMaterielle}
                                    onChange={handleChangeInputNameRessourceMaterielle}
                                    // helperText="Please select your currency"
                                    style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "10px" }}
                                    size="medium"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                        </Grid>
                        {isSwitchOneActive &&
                            <div>
                                <Grid >
                                    <Grid item xs={12}>
                                        {/* SituationActuelleAdministrationsCentrales */}
                                        <TextField
                                            // label={situationActuelleAdministrationsCentrales == "" ? "الوضعية الحالية" : ""}
                                            placeholder="الوضعية الحالية"
                                            value={situationActuelleAdministrationsCentrales}
                                            onChange={handleChangeInputSituationActuelleAdministrationsCentrales}
                                            type="number"
                                            InputProps={{
                                                inputProps: { min: 0 }
                                            }}
                                            // helperText="Please select your currency"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        }
                        {!isSwitchOneActive &&
                            <div>
                                <Grid >
                                    <Grid item xs={12}>
                                        {/* SituationActuelleInteretsRegionaux */}
                                        <TextField
                                            // label={situationActuelleInteretsRegionaux == "" ? "الوضعية الحالية" : ""}
                                            placeholder="الوضعية الحالية"
                                            value={situationActuelleInteretsRegionaux}
                                            onChange={handleChangeInputSituationActuelleInteretsRegionaux}
                                            type="number"
                                            InputProps={{
                                                inputProps: { min: 0 }
                                            }}
                                            // helperText="Please select your currency"
                                            style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                            size="medium"
                                            InputLabelProps={{ shrink: false }}
                                        />
                                    </Grid>
                                </Grid>

                                <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                            <div className='txt-div-year'>السنة الأولى</div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                            <TextField
                                                // label={objectifsAtteindreYearOne == "" ? "الأهداف المزعم بلوغها" : ""}
                                                placeholder="الأهداف المزعم بلوغها"
                                                value={objectifsAtteindreYearOne}
                                                onChange={handleChangeInputObjectifsAtteindreYearOne}
                                                type="number"
                                                InputProps={{
                                                    inputProps: { min: 0 }
                                                }}
                                                // helperText="Please select your currency"
                                                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                                size="medium"
                                                InputLabelProps={{ shrink: false }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                            <div className='txt-div-year'>السنة التانية</div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                            <TextField
                                                // label={objectifsAtteindreYearTwo == "" ? "الأهداف المزعم بلوغها" : ""}
                                                placeholder="الأهداف المزعم بلوغها"
                                                value={objectifsAtteindreYearTwo}
                                                onChange={handleChangeInputObjectifsAtteindreYearTwo}
                                                type="number"
                                                InputProps={{
                                                    inputProps: { min: 0 }
                                                }}
                                                // helperText="Please select your currency"
                                                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                                size="medium"
                                                InputLabelProps={{ shrink: false }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                            <div className='txt-div-year'>السنة الثالثة</div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                            <TextField
                                                // label={objectifsAtteindreYearThree == "" ? "الأهداف المزعم بلوغها" : ""}
                                                placeholder="الأهداف المزعم بلوغها"
                                                value={objectifsAtteindreYearThree}
                                                onChange={handleChangeInputObjectifsAtteindreYearThree}
                                                type="number"
                                                InputProps={{
                                                    inputProps: { min: 0 }
                                                }}
                                                // helperText="Please select your currency"
                                                style={{ width: "100%", border: "0px solid #F2F2F2", marginBottom: "0px" }}
                                                size="medium"
                                                InputLabelProps={{ shrink: false }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        }
                        <div className='footer-modal-add-situation-organisme'>
                            <MainButton onClick={() => onClickAdd({
                                idSecteur: selectedSecteur.id,
                                nameRessourceMaterielle: nameRessourceMaterielle,
                                situationActuelleInteretsRegionaux: parseInt(situationActuelleInteretsRegionaux),
                                situationActuelleAdministrationsCentrales: parseInt(situationActuelleAdministrationsCentrales),
                                objectifsAtteindreYearOne: parseInt(objectifsAtteindreYearOne),
                                objectifsAtteindreYearTwo: parseInt(objectifsAtteindreYearOne),
                                objectifsAtteindreYearThree: parseInt(objectifsAtteindreYearThree)
                            })} className="btn-modal-add-situation-organisme" label='أضف' />
                        </div>

                    </Box>


                </Modal>
            </ThemeProvider>
        </CacheProvider >
    );
}

export default ModalAddRessourceMateriel;