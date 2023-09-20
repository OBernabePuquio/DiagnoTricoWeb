import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecoloracionPielService {
  constructor(private http: HttpClient) { }

  // Función para obtener todos los registros
  getDecoloracionesPiel(): Observable<any> {
    const url = `${API_URL}/api/v1/decoloraciones_piel`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getDecoloracionesPielById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/decoloracion_piel/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createDecoloracionesPiel(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/decoloracion_piel`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateDecoloracionesPiel(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/decoloracion_piel/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteDecoloracionesPiel(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/decoloracion_piel/${evaluacionId}`;
    return this.http.delete(url);
  }






}
