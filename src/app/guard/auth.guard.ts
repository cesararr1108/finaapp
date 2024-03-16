import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private localstorage: LocalStorageService) {}

  canActivate(): boolean {
    // Verifica si el JWT está presente en el localStorage
    const dataUser = this.localstorage.recuperarClave('DataUser');
    console.log({
      dataUser
    })
    return true;
   /* if (dataUser && dataUser.jwt) {
      // Si el JWT está presente, permite el acceso a la ruta protegida
      return true;
    } else {
      // Si el JWT no está presente, redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }*/
  }
}
