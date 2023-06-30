import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './itens/item';
import { Observable } from 'rxjs';
import { environment } from '..//environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemServService {

  apiURl :string = environment.apiURLBase + "/itens"

  constructor(private http: HttpClient) { }

  salvar(item: Item) : Observable<Item>{
      return this.http.post<Item>(this.apiURl, item)
  }


}
