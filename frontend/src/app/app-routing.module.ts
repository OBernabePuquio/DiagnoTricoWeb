import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BlancoComponent } from './componentes/blanco/blanco.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'principal', component:PrincipalComponent},
 
  {path:'', outlet: 'secondary', component:BlancoComponent},
  {path:'blanco', outlet: 'secondary', component:BlancoComponent},
  {path:'busqueda', outlet: 'secondary', component:BusquedaComponent},
  {path:'formulario', outlet: 'secondary', component:FormularioComponent},
  {path:'formulario/:id', outlet: 'secondary', component:FormularioComponent}
];

const options: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes,options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
