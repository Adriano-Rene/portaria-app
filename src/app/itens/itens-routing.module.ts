import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListaComponent } from './item-lista/item-lista.component';


const routes: Routes = [
  {path: 'itens-form' , component: ItemFormComponent},
  {path: 'itens-listagem', component: ItemListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensRoutingModule { }
