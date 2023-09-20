import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExistenciaPelosVellososMiniaturizadoService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getExistenciaPelosVellososMiniaturizados(): Observable<any> {
    const url = `${API_URL}/api/v1/existencia_pelos_vellosos_miniaturizados`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getExistenciaPelosVellososMiniaturizadosById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/existencia_pelos_vellosos_miniaturizado/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createExistenciaPelosVellososMiniaturizados(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/existencia_pelos_vellosos_miniaturizado`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateExistenciaPelosVellososMiniaturizados(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/existencia_pelos_vellosos_miniaturizado/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteExistenciaPelosVellososMiniaturizados(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/existencia_pelos_vellosos_miniaturizado/${evaluacionId}`;
    return this.http.delete(url);
  }



}
