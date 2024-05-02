/**  axios default configs */
import axios from "axios";

const API_BASE_URL ='https://front-end-f65a6-default-rtdb.firebaseio.com/';
/**
 * Axios instance
 * @summary http axios instance creation with default configs
 * @type {AxiosInstance}
 *
 */

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-type': 'application/json' }
});

export default http;