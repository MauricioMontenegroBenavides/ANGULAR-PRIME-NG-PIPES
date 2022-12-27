import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // I18NSELECT /////////
  nombre:string='';
  genero:string='masculino';
  invitacion={

    'masculino':'invitarlo',
    'femenino':'invitarla'
  };

  // I18NPLURAL ///////
  clientes:string[]=['maria','oscar','dario','daniel','d'];
  opciones={'=0':'no tenemos ningun cliente',
  '=1':'hay un cliente',
  'other':'hay # clientes'
  };

  borrar(){

     console.log(this.nombre)
     this.clientes=this.clientes.filter((dato)=>dato!=this.nombre)
     console.log(this.clientes)
  }


  persona={
    nombre:'Mauricio',

    edad:35,

    direccion:'Quito-Ecuador'

  }



  /////////////ASYNC PIPE////////////////////
  // Este funciona con promesas y objetos

  obs=interval();

  datos=new Promise((resolve,reject)=>{


    setTimeout(()=>{resolve('Los datos se cargaron')},4000)
  })








}
