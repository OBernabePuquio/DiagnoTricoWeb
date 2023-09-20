import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getPerfiles(): Observable<any> {
    const url = `${API_URL}/api/v1/perfiles`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getPerfilById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/perfil/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createPerfil(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/perfil`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updatePerfil(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/perfil/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deletePerfil(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/perfil/${evaluacionId}`;
    return this.http.delete(url);
  }

}
