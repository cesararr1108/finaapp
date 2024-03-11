import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
    constructor(private router: Router) {
      // Verificar si el usuario está autenticado
      const isAuthenticated = true; // Aquí debes implementar la lógica para verificar la autenticación
  
      // Redirigir al usuario al login si no está autenticado
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    }
}
