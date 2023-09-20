import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SexoService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getSexos(): Observable<any> {
    const url = `${API_URL}/api/v1/sexos`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getSexoById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/sexo/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createSexo(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/sexo`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateSexo(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/sexo/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteSexo(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/sexo/${evaluacionId}`;
    return this.http.delete(url);
  }


}
