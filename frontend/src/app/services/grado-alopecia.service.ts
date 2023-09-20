import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GradoAlopeciaService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getGradosAlopecia(): Observable<any> {
    const url = `${API_URL}/api/v1/grados_alopecia`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getGradoAlopeciaById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/grado_alopecia/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createGradoAlopecia(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/grado_alopecia`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateGradoAlopecia(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/grado_alopecia/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteGradoAlopecia(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/grado_alopecia/${evaluacionId}`;
    return this.http.delete(url);
  }


}
