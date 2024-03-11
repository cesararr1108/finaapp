// register.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ApiService } from 'src/app/services/auth.service';
import {  ModalValidacionEmailPage } from '../../components/modal-validacion-email/modal-validacion-email.page';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  
  miFormulario!: FormGroup;
  miFormularioValidacion!: FormGroup;
  emailValido:boolean= false;
  codigoValido:boolean=false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private swal:SweetAlertService,
    private serviceAuth:ApiService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      usuario: ['', [Validators.required,Validators.maxLength(100)]],
      nombres: ['', [Validators.required, Validators.maxLength(100) ]],
      clave: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.miFormularioValidacion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){ 
    if (this.miFormulario.valid) {
      // Lógica para enviar el formulario
      console.log('Formulario válido:', this.miFormulario.value);
    } else {
      console.log('Formulario inválido',this.miFormulario.valid);
    }
  }
  ValidarEmail(){

    try{
      if (this.miFormularioValidacion.valid) {
        this.swal.showLoading(/*'Enviando email','Estamos enviando un código de verificacion a tu correo .Por favor revisa !'*/)
        this.serviceAuth.sendEmail(this.miFormularioValidacion.value)
        .subscribe(resp=>{ console.log(resp)
           if(resp.ok){
            this.swal.showAlert('Mensaje','Hemos enviado un codigo de verificacion a tú email','success');
            this.openModal();
            this.swal.hideLoading();
           }
        })
      } else{
        this.swal.hideLoading();
        this.swal.showAlert('Mensaje','El email no es valido','warning')
      }
    }catch(e){
      console.error(e)
      this.swal.hideLoading();
      this.swal.showAlert('Mensaje','Ha ocurrido un error','error')
     
    }

  }


  async openModal() {
    const modal = await this.modalController.create({
      component: ModalValidacionEmailPage,
      componentProps: { email:this.miFormularioValidacion.value}
    });

    modal.onDidDismiss().then((data:any) => {
      if (data && data.data) {
        if(data.data.codigoValido){
          this.codigoValido=true
        } 
      }
    });

    return await modal.present();
  }


}
