import axios from "axios";

import localStorageService from './LocalStorageService'
import { URL } from '../API_URL'
export const start = () => {

    axios.interceptors.request.use(
        config => {

            const LocalStorageService = localStorageService.getService();
            config.baseURL = URL
            const token = localStorageService.getAccessToken();
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
    axios.interceptors.response.use(
        (response) => {
            console.log(response);
            if (response.data.token) {
                const LocalStorageService = localStorageService.getService();
                localStorageService.setAccessToken(response.data);
            }
            return response;
        }
    )
}