import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ItensRoutingModule } from './itens-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ItemFormComponent, ItemListaComponent],
  imports: [
    CommonModule,
    ItensRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [
    ItemFormComponent, ItemListaComponent
  ]
})
export class ItensModule { }
