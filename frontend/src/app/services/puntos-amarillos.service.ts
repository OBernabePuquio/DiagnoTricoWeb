import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntosAmarillosService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getPuntosAmarrillos(): Observable<any> {
    const url = `${API_URL}/api/v1/puntos_amarillos`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getPuntoAmarrilloById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/punto_amarillo/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createPuntoAmarrillo(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/punto_amarillo`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updatePuntoAmarrillo(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/punto_amarillo/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deletePuntoAmarrillo(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/punto_amarillo/${evaluacionId}`;
    return this.http.delete(url);
  }



}
