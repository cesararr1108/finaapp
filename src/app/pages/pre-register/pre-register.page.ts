import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.page.html',
  styleUrls: ['./pre-register.page.scss'],
})
export class PreRegisterPage implements OnInit {
  miFormulario!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiServ:ApiService) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: [''],
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

}
