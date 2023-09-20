import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeloFinosFrontalService {
  constructor(private http: HttpClient) { }


  // Función para obtener todos los registros
  getPeloFinoFrontal(): Observable<any> {
    const url = `${API_URL}/api/v1/pelo_finos_frontal`;
    return this.http.get(url);
  }

  // Función para obtener un registro por su ID
  getPeloFinoFrontalById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/pelo_finos_frontal/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear un nuevo registro
  createPeloFinoFrontal(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/pelo_finos_frontal`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar un registro existente
  updatePeloFinoFrontal(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/pelo_finos_frontal/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar un registro por su ID
  deletePeloFinoFrontal(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/pelo_finos_frontal/${evaluacionId}`;
    return this.http.delete(url);
  }


}
