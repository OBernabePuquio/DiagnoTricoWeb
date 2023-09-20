import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscalaAlopeciaItemService {
  constructor(private http: HttpClient) { }

  // Función para obtener todos los registros
  getEscalaAlopeciaItems(): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia_items`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getEscalaAlopeciaItemById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia_item/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createEscalaAlopeciaItem(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia_item`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateEscalaAlopeciaItem(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia_item/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteEscalaAlopeciaItem(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia_item/${evaluacionId}`;
    return this.http.delete(url);
  }

}
