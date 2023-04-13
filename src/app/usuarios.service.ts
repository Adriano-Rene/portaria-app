import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuario } from './usuarios/usuario';
import { Observable} from'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { 

  }

  salvar(usuario:Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/usuarios", usuario)
  }

  atualizar(usuario :Usuario) : Observable<any> {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/${usuario.id}`, usuario)
  }

  deletar(usuario:Usuario): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/usuarios/${usuario.id}`)
  }

getUsuarios(): Observable<Usuario[]>{
     return this.http.get<Usuario[]>('http://localhost:8080/usuarios');
}
     

getUsuarioById(id:Number): Observable<Usuario>{
      return this.http.get<any>(`http://localhost:8080/usuarios/${id}`)
     }
}

