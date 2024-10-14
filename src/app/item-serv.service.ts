import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './itens/item';
import { Observable } from 'rxjs';
import { environment } from '..//environments/environment';
import { ItemDTO } from './itens/itemDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemServService {

  apiURl :string = environment.apiURLBase + "/itens"

  constructor(private http: HttpClient) { }

  salvar(item: ItemDTO) : Observable<ItemDTO>{
      return this.http.post<ItemDTO>(this.apiURl, ItemDTO)
  }


}
