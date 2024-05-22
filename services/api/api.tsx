import axios from "axios";
import { apisigninback } from "./api.endpoints";


const api = axios.create({
    baseURL: apisigninback
})

export default api