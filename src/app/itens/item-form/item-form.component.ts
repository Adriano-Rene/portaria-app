import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuarios/usuario';
import { UsuariosService } from '../../usuarios.service'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(
    private usuarioService : UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe( response => this.usuarios = response)

  }

  onSubmit(){

  }

}
