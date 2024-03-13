import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup ,Validators,ReactiveFormsModule } from '@angular/forms';
import { IonInput, ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-modal-validacion-email',
  templateUrl: './modal-validacion-email.page.html',
  styleUrls: ['./modal-validacion-email.page.scss'],
})
export class ModalValidacionEmailPage implements OnInit {
 
  formulario!: FormGroup;
  formattedInput: string = '';
  email!: string;

  @ViewChild('codigo', { static: false }) codigo: IonInput | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private auth:ApiService,
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      codigo:['']
    });
    setTimeout(() => {
      this.focusInput();
    }, 100);
   
  }

  ValidarCodigo(){
    if (this.formulario.valid) {

      try{
        let codigo = this.formulario.get('codigo')?.value.replace(/[\s-]/g, '');
        this.email = this.navParams.get('email').email;
        this.auth.validarCodigoEmail(this.email,codigo)
        .subscribe(resp=>{
           if(resp.ok){
            this.modalController.dismiss({ codigoValido: resp.ok });
           }
        })
      }catch(e){
        console.error(e)
      }

    }
  }

  focusInput() {
    this.codigo?.setFocus();
  }
  NextInput(event: any) {
    let valor: string = event.target.value.replace(/[\s\-]/g, '');
    let input = valor.split("");
  
    if(input.join("-").length<12){
      this.formulario.get('codigo')?.setValue(input.join(" - "));
    }else{
      this.formulario.get('codigo')?.setValue( input.join(" - ").substring(0,21) );
    }
   
    let codigo = this.formulario.value
   // this.auth.validarCodigoEmail()
    //event.target.value=input
  }

}
