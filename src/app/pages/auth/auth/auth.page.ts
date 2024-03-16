import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  formulario!: FormGroup;

  constructor(
    private auth:ApiService,
    private formBuilder: FormBuilder,
    private swal:SweetAlertService,
    private storage:LocalStorageService,
    private router: Router) { }
  

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      usuario: ['', [Validators.required,Validators.maxLength(100)]],
      clave: ['', [Validators.required, Validators.maxLength(100) ]],
    });
  }

  login() {
    if (this.formulario.valid) {
      this.swal.showLoading('Validando informacion');
      let usuario = this.formulario.get("usuario")?.value;
      let clave = this.formulario.get("clave")?.value;
      this.auth.login(usuario, clave)
        .subscribe({
          next: (resp:any) => {
          
            if(resp.status==200){
              this.storage.guardarClave('DataUser',{
                usuario:resp.data.nombres,
                id:resp.data.id,
                email:resp.data.email,
                jwt:resp.jwt
              });
              this.router.navigate(['/tabs/tab1']);
            }else{
              this.storage.existeClave('DataUser');
            }
            // Manejar la respuesta exitosa aquí
            this.swal.hideLoading();
          },
          error: (error) => {
            this.swal.hideLoading();
            this.storage.existeClave('DataUser');
            if(error.status==401){
              this.swal.showAlert("Error","El usuario o clave son incorrectos","error")
            }
           
            
          }
        });
    }
  }
  

}
