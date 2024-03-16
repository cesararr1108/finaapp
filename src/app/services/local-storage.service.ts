import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarClave(clave: string, valor: any): void {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  recuperarClave<T>(clave: string): T | null {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) as T : null;
  }

  existeClave(clave: string): boolean {
    return localStorage.getItem(clave) !== null;
  }
  eliminarClave(clave: string): void {
    localStorage.removeItem(clave);
  }
}
