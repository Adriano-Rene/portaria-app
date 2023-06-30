import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuario } from './usuarios/usuario';
import { Observable} from'rxjs'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL: string = environment.apiURLBase + '/usuarios';

  constructor(private http: HttpClient) { 

  }

  salvar(usuario:Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}`, usuario)
  }

  atualizar(usuario :Usuario) : Observable<any> {
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}`, usuario)
  }

  deletar(usuario:Usuario): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${usuario.id}`)
  }

getUsuarios(): Observable<Usuario[]>{
     return this.http.get<Usuario[]>(this.apiURL);
}
     

getUsuarioById(id:Number): Observable<Usuario>{
      return this.http.get<any>(`${this.apiURL}/${id}`)
     }
}

