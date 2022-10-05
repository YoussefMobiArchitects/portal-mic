import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from ".";

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const direction = i18n.dir();

  const profile = useAppSelector(state => state.authReducer);
  const isAuth = profile.isLogged !== null;


  const language = localStorage.getItem("APP_LANG");


  return {
    isAuth,
    direction,
    language
  };
}
export default useAuthentication;