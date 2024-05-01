/**  axios default configs */
import axios from "axios";

const API_BASE_URL ='http://localhost:3000/api/v1';
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