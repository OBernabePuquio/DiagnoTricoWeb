import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrosorPeloComparacionService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getGrosorPeloComparacion(): Observable<any> {
    const url = `${API_URL}/api/v1/grosor_pelo_comparacion`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getGrosorPeloComparacionById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/grosor_pelo_comparacion/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createGrosorPeloComparacion(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/grosor_pelo_comparacion`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateGrosorPeloComparacion(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/grosor_pelo_comparacion/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteGrosorPeloComparacion(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/grosor_pelo_comparacion/${evaluacionId}`;
    return this.http.delete(url);
  }


}
