import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavbarComponent] // Exporta el componente NavbarComponent
})
export class SharedModule {}
