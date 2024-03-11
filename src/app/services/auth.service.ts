import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.url_api;


  constructor(private http: HttpClient) { }

  // Ejemplo de método para enviar un correo electrónico
  sendEmail(emailData: any) {
    return this.http.post<any>(`${this.apiUrl}/auth/enviarcodigo`, emailData);
  }

  validarCodigoEmail(email:string,codigo:number){

    return this.http.post<any>(`${this.apiUrl}/auth/validarcodigoemail`,{ email,codigo});
  }

}
