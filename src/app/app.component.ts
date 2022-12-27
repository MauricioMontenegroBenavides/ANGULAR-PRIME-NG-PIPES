import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import {CardModule} from 'primeng/card';

import { PrimeNGConfig } from 'primeng/api';// Este es un servicio que permite insertar burbujitas

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private burbujas:PrimeNGConfig) { }

  ngOnInit(): void {

    this.burbujas.ripple = true;
  }


  nombre:string = 'Mauricio mONTENEgro';
  mostrar(){

    console.log(this.nombre)
  }
}
