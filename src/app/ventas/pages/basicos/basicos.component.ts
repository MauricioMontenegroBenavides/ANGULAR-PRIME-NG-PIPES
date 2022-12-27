import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [


  ]
})
export class BasicosComponent{

  nombreLower:string='fernando';
  nombreUpper:string='FERNANDO';
  nombreCompleto:string='ferNaNDO HERRera';


  // fechas en JS

  fecha:Date=new Date();// Fecha para el dia de hoy



}
