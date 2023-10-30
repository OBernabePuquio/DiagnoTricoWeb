import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionFotoService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getEvaluacionFotos(): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_fotos`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getEvaluacionFotoById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_foto/${evaluacionId}`;
    return this.http.get(url);
  }

    // Función para obtener Fotos de una evaluación por su ID
    getEvaluacionFotoByEvaluacionId(evaluacionId: number): Observable<any> {
      const url = `${API_URL}/api/v1/evaluacion_foto_x_evaluacion/${evaluacionId}`;
      return this.http.get(url);
    }

  // Función para crear un nuevo registro
  createEvaluacionFoto(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_foto`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updateEvaluacionFoto(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_foto/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deleteEvaluacionFoto(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_foto/${evaluacionId}`;
    return this.http.delete(url);
  }


}
