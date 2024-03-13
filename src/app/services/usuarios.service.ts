import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/Usuarios.interface';
import { Observable } from 'rxjs'; // Importa Observable desde RxJS
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl = environment.url_api;
  constructor(private http: HttpClient) { }

  crearUsuario(data: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/crear`, data);
  }

}
