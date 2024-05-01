import http from "../../shared/service/http-common.js";
import {Libro} from "@/recommendations/model/Libro.entity.js";

class RecommendationsService {
    getAll() {
        return http.get('/libros');
    }

    getById(id) {
        return http.get(`/libros/${id}`);
    }

    create(data) {
        return http.post('/libros', data);
    }

    update(id, data) {
        return http.put(`/libros/${id}`, data);
    }

    delete(id) {
        return http.delete(`/libros/${id}`);
    }

    async getAllLibros() {
        try {
            const response = await http.get('/libros');
            if (response.data && Array.isArray(response.data)) {
                return response.data.map(libro => Libro.fromDisplayableLibro(libro));
            } else {
                console.error('La respuesta no tiene el formato esperado.');
                return [];
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    }
}

export default new RecommendationsService();