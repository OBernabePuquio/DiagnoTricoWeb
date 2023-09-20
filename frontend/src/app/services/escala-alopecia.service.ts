import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscalaAlopeciaService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getEscalasAlopecia(): Observable<any> {
    const url = `${API_URL}/api/v1/escalas_alopecia`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getEscalasAlopeciaById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createEscalasAlopecia(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateEscalasAlopecia(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteEscalasAlopecia(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/escala_alopecia/${evaluacionId}`;
    return this.http.delete(url);
  }





}
