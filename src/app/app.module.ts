import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module'
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
