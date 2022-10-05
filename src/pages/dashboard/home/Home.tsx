import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS } from "../../../constants";
import './styles.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { isLoggedAction } from "../../../redux/reducers/authReducer";
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {

    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.body.dir = i18n.dir();
        localStorage.setItem('APP_LANG', lng);
        // theme.direction = i18n.dir();
    }


    const disconnect = () => {
        dispatch(isLoggedAction(false));
    }

    return (
        <div
            className='homePageStyle'
        >
            HomePage

            <div className="App">
                <div className="">
                    <div className='testrtlStyle'> {t('hello_world_key')}</div>
                    <div> {t('change_language_key')}</div>

                    <div
                        onClick={() => changeLanguage('ar')}
                        className="btnStyle"
                    >
                        {t('arabe_key')}
                    </div>

                    <div
                        onClick={() => changeLanguage('en')}
                        className="btnStyle"
                    >
                        {t('anglais_key')}
                    </div>

                    <div
                        onClick={() => changeLanguage('fr')}
                        className="btnStyle"
                    >
                        {t('francais_key')}
                    </div>


                    <div
                        onClick={disconnect}
                        className="btnStyle"
                    >
                        disconnect
                    </div>


                    <div
                        className="btnStyle"
                        onClick={() => navigate("/")}
                    >
                        Navigate to dashboard
                    </div>


                    <TextField
                        id="outlined-basic"
                        label="Mot de passe"
                        variant="outlined"
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;