import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicosComponent } from '../ventas/pages/basicos/basicos.component';
import { OrdenarComponent } from '../ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from '../ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from '../ventas/pages/numeros/numeros.component';


const rutas:Routes=[
  {
    path:'',
    component:BasicosComponent,
    pathMatch:'full'
  },
  {
    path:'ordenar',
    component:OrdenarComponent
  },
  {
    path:'no-comunes',
    component:NoComunesComponent
  },
  {
    path:'numeros',
    component:NumerosComponent
  },

  {
    path:'**',
    redirectTo:''
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
