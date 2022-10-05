import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import "./styles.scss";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { isLoggedAction } from "../../../redux/reducers/authReducer";
import { useTranslation } from 'react-i18next';

type FormData = {
    email: string;
    password: string;
};

function Login() {

    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (e: any) => {
        console.log("pressed")
        // console.log(e)
        return dispatch(isLoggedAction(true));
        // navigate('/', {
        //     state: { id: 1, name: 'sabaoon' }
        // });
    }

    return (
        <div className="containerStyle">
            <Box
                flex={1.5}
                className='leftSide'
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                <div>111111</div>
            </Box>
            <Box flex={3} className="rightSide">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ marginBottom: '50px', }}>
                        <div className='authText'>{t('authentification_key')}</div>
                        <div className='subText'>{t('entrez_email_mot_passe_dessous_key')}</div>
                    </Box>

                    <div className='formInput'>
                        <TextField
                            id="outlined-basic"
                            label={t('email_key')}
                            variant="outlined"
                            error={errors.email?.message ? true : false}
                            {...register("email", {
                                required: { value: true, message: `${t('saisissez_votre_email_key')}` },
                                maxLength: { value: 20, message: `${t('saisissez_email_valide_key')}` },
                                minLength: { value: 4, message: `${t('saisissez_email_valide_key')}` },
                                // pattern: { value: /^[A-Za-z]+$/i, message: "Only caracters" }
                            })}
                        />

                        <div className='errorStyle'>{errors?.email?.message}</div>
                    </div>

                    <div className='formInput'>
                        <TextField
                            id="outlined-basic"
                            label={t('mot_de_passe_key')}
                            variant="outlined"
                            error={errors.password?.message ? true : false}
                            {...register("password", {
                                required: { value: true, message: `${t('saisissez_votre_mot_passe')}` },
                                maxLength: { value: 20, message: `${t('mot_passe_maxlength_key')}` },
                                minLength: { value: 6, message: `${t('mot_passe_minlength_key')}` },
                                // pattern: { value: /^[A-Za-z]+$/i, message: "Only caracters" }
                            })}
                        />
                        <div className='errorStyle'>{errors.password?.message}</div>
                    </div>

                    <div className='containerBtn'>
                        <button type="submit">{t('se_connecter_key')}</button>
                    </div>

                </form>
            </Box>
            <Box
                flex={1}
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                <div></div>
            </Box>
        </div>


    );
}

export default Login;