import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config'; // Importa la URL del servidor desde tu archivo de configuración
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<any> {
    const apiUrl = `${API_URL}/api/v1/users/${userId}`;
    return this.http.get(apiUrl);
  }

  login(user: any): Observable<any> {
    const apiUrl = `${API_URL}/api/v1/auth`;
    return this.http.post(apiUrl, user);
  }


}
