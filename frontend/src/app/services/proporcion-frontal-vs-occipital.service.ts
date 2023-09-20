import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProporcionFrontalVsOccipitalService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getProporcionFrontalVsOccipital(): Observable<any> {
    const url = `${API_URL}/api/v1/proporcion_frontal_vs_occipital`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getProporcionFrontalVsOccipitalById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/proporcion_frontal_vs_occipital/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createProporcionFrontalVsOccipital(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/proporcion_frontal_vs_occipital`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateProporcionFrontalVsOccipital(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/proporcion_frontal_vs_occipital/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteProporcionFrontalVsOccipital(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/proporcion_frontal_vs_occipital/${evaluacionId}`;
    return this.http.delete(url);
  }


}
