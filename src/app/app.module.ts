import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import{PrimerNgModule} from './primer-ng/primer-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


/////////////////////////////

// Cambiar el idioma de los paises
import locales from '@angular/common/locales/es-EC';
import { registerLocaleData } from '@angular/common';//registerLocaleData  es una funcion
registerLocaleData(locales);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PrimerNgModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],

  exports:[


  ],
  providers: [{provide:LOCALE_ID,useValue:'es-EC'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
