import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BaseChartDirective],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega aquí el CUSTOM_ELEMENTS_SCHEMA
})
export class AppModule {}
