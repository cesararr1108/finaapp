import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' = 'success') {
    return Swal.fire({
      title,
      text,
      icon,
    });
  }

  showLoading(title: string = 'Cargando...') {
    return Swal.fire({
      title,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  hideLoading() {
    Swal.close();
  }
}
