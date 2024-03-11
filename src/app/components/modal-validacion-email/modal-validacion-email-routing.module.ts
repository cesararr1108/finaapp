import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalValidacionEmailPage } from './modal-validacion-email.page';

const routes: Routes = [
  {
    path: '',
    component: ModalValidacionEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalValidacionEmailPageRoutingModule {}
