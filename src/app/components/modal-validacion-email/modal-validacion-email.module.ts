import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalValidacionEmailPageRoutingModule } from './modal-validacion-email-routing.module';

import { ModalValidacionEmailPage } from './modal-validacion-email.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalValidacionEmailPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [ModalValidacionEmailPage]
})
export class ModalValidacionEmailPageModule {}
