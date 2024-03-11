import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {  Router } from '@angular/router';
import { Swiper }  from 'swiper';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('swiper') 
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  swiperSlideChanged(e:any){
    console.log('changed',e)
  }
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  irRegistro(){
    this.router.navigate(['/register']);
  }
  avanzar() { console.log(this.swiper)
    this.swiper?.slideNext();
  }
}
