import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimerNgModule,
    FormsModule
  ],
  exports:[

    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent

  ],
})
export class VentasModule { }
