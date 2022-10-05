import { useNavigate } from 'react-router-dom';

const useNavigationApp = () => {
let navigate = useNavigate()

  return {
    navigate,
  };
}

export default useNavigationApp;