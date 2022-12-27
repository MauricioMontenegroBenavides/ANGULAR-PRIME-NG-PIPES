import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {


    this.items = [


      {
          label: 'Pipes de Angular',
          items: [{
                  label: 'Textos y Fechas',
                  routerLink:'/'
                  },
                  {
                  label: 'Numeros',
                  routerLink:'numeros'
                  },
                  {
                  label: 'No comunes',
                  routerLink:'no-comunes'
                  }
                ]
      },
      {

        label:'Pipes Personalizados',
        icon:'pi pi-cog'



      }


  ];



  }

}
