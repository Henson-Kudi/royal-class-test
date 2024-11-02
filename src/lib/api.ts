import axios from "axios";
import envConf from "./env.conf";

export const api = axios.create({
    baseURL: envConf.apiBaseUrl,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
})