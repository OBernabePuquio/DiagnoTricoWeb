import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  constructor(private http: HttpClient) {}


  // Método para obtener un formulario en blanco de tbl_evaluacion
  getBlankEvaluacion(): any {
    return {
      codigo_paciente: '', 
      sexo_id: null,
      escala_alopecia_item_id: null,
      areas_sin_pelo_id: null,
      puntos_amarillos_id: null,
      grosor_pelo_comparacion_id: null,
      pelo_finos_frontal_id: null,
      proporcion_frontal_vs_occipital_id: null,
      existencia_pelos_vellosos_miniaturizados_id: null,
      decoloracion_piel_id: null,
      probabilidad_aga: null,
      comentario_evaluacion: ''
    };
  }

  // Método para obtener un formulario de búsqueda evaluación vacío
  getBlankBusquedaEvaluacion(): any {
    return {
      inputcodigo_paciente: '', 
      inputrango_fechas: null
    };
  }

  // Función para obtener las evaluaciones
  getEvaluaciones(): Observable<any> {
    const url = `${API_URL}/api/v1/evaluaciones`;
    return this.http.get(url);
  }

  // Función para obtener una evaluación por su ID
  getEvaluacionById(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion/${evaluacionId}`;
    return this.http.get(url);
  }

  // Función para crear una nueva evaluación
  createEvaluacion(evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion`;
    return this.http.post(url, evaluacionData);
  }

  // Función para actualizar una evaluación existente
  updateEvaluacion(evaluacionId: number, evaluacionData: any): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion/${evaluacionId}`;
    return this.http.put(url, evaluacionData);
  }

  // Función para eliminar una evaluación por su ID
  deleteEvaluacion(evaluacionId: number): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion/${evaluacionId}`;
    return this.http.delete(url);
  }

  // Función para buscar evaluaciones
  getEvaluacionSearch(criteriosBusqueda: any): Observable<any> {
    const url = `${API_URL}/api/v1/evaluacion_buscar`;
    return this.http.post(url,criteriosBusqueda);
  }


}
