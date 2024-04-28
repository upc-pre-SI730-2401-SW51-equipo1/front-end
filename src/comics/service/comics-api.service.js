import http from '../../shared/services/http-common';

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
    findByTitle(title) {
        return http.get(`/comics?title=${title}`);
    }
}
