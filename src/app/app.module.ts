import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module'
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { UsuariosService} from './usuarios.service'
import { ItensModule } from './itens/itens.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsuariosModule,
    TemplateModule,
    ItensModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
