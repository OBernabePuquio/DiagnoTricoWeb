import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BlancoComponent } from './componentes/blanco/blanco.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { UserService } from './services/user.service';
import { EvaluacionService } from './services/evaluacion.service';
import { SexoService } from './services/sexo.service';
import { EscalaAlopeciaItemService } from './services/escala-alopecia-item.service';

import { PuntosAmarillosService } from './services/puntos-amarillos.service';
import { GrosorPeloComparacionService } from './services/grosor-pelo-comparacion.service';
import { PeloFinosFrontalService } from './services/pelo-finos-frontal.service';
import { ProporcionFrontalVsOccipitalService } from './services/proporcion-frontal-vs-occipital.service';
import { ExistenciaPelosVellososMiniaturizadoService } from './services/existencia-pelos-vellosos-miniaturizado.service';
import { DecoloracionPielService } from './services/decoloracion-piel.service';
import { AgrupacionCriterioService } from './services/agrupacion-criterio.service';
import { EscalaAlopeciaService } from './services/escala-alopecia.service';
import { EvaluacionFotoService } from './services/evaluacion-foto.service';
import { GradoAlopeciaService } from './services/grado-alopecia.service';
import { PerfilService } from './services/perfil.service';
import { AreaSinPeloService } from './services/area-sin-pelo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PrincipalComponent,
    BusquedaComponent,
    BlancoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [UserService,
              EvaluacionService,
              SexoService,
              EscalaAlopeciaItemService,
              PuntosAmarillosService,
              GrosorPeloComparacionService,
              PeloFinosFrontalService,
              ProporcionFrontalVsOccipitalService,
              ExistenciaPelosVellososMiniaturizadoService,
              DecoloracionPielService,
              AgrupacionCriterioService,
              AreaSinPeloService,
              EscalaAlopeciaService,
              EvaluacionFotoService,
              GradoAlopeciaService,
              PerfilService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
