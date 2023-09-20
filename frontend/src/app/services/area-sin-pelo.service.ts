import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaSinPeloService {
  constructor(private http: HttpClient) { }

  // Función para obtener todos los registros
  getAreasSinPelo(): Observable<any> {
    const url = `${API_URL}/api/v1/areas_sin_pelo`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getAreasSinPeloById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/area_sin_pelo/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createAreasSinPelo(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/area_sin_pelo`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateAreasSinPelo(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/area_sin_pelo/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteAreasSinPelo(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/area_sin_pelo/${evaluacionId}`;
    return this.http.delete(url);
  }



}
