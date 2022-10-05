import axios from "axios";
import { EnvNetworkConstants } from "../constants/EnvNetworkConstants";

export default axios.create({
    baseURL: EnvNetworkConstants.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});