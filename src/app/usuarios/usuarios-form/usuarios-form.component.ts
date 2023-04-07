import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import {Usuario} from '../usuario'
import {UsuariosService} from '../../usuarios.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {


  
  sucesso: boolean = false;
  errors: String[]
  id:number
  usuario:Usuario;

  constructor(private service: UsuariosService , private router: Router, private activatedRoute: ActivatedRoute) {
   this.usuario = new Usuario()
   }

  ngOnInit(): void {
    let parametros: Observable<Params> = this.activatedRoute.params
    parametros.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service.getUsuarioById(this.id).subscribe(response => this.usuario = response , 
          errorResponse => this.usuario = new Usuario())
      }
      
    })
  }

  voltarParaLista(){
    this.router.navigate(['/usuarios-lista'])
  }

  onSubmit(){
if(this.id){

this.service.atualizar(this.usuario).subscribe(reposta =>{
  this.sucesso = true; this.errors = null
}, erroResposta => {
  this.errors = ['Erro ao atualizar o usuario']
})

}else{
  this.service.salvar(this.usuario).subscribe( reposta =>{
    this.sucesso = true; this.errors = null; this.usuario = reposta
   }, erroResposta =>{
     this.sucesso = false; this.errors = erroResposta.error.errors
   })
 } 


}
}