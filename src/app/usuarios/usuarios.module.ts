import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';


@NgModule({
  declarations: [
    UsuariosListaComponent,
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
    
  ], exports: [
    UsuariosListaComponent,
    UsuariosFormComponent
  ]
})
export class UsuariosModule { }
