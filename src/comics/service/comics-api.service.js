import http from "../../shared/service/http-common.js";
import axios from 'axios';

const baseUrl = 'https://front-end-f65a6-default-rtdb.firebaseio.com/comics';

export class TutorialsApiService {
    getComics() {
        return http.get('/comics');
    }
    getById(id) {
        return http.get(`/comics/${id}`);
    }
    create(data) {
        return http.post('/comics', data);
    }
    update(id, data) {
        return http.put(`/comics/${id}`, data);
    }

    delete(id) {
        return http.delete(`/comics/${id}`);
    }
}

export function fetchComics() {
    return axios.get(baseUrl)
        .then(response => response.data);
}

export function filterComicsByCategory(categoryId) {
    return axios.get(`${baseUrl}/category/${categoryId}/comics`)
        .then(response => response.data);
}

