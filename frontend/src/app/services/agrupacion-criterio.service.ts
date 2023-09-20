import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgrupacionCriterioService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getAgrupacionCriterios(): Observable<any> {
    const url = `${API_URL}/api/v1/agrupacion_criterios`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getAgrupacionCriterioById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/agrupacion_criterio/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createAgrupacionCriterio(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/agrupacion_criterio`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateAgrupacionCriterio(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/agrupacion_criterio/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteAgrupacionCriterio(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/agrupacion_criterio/${evaluacionId}`;
    return this.http.delete(url);
  }


}
