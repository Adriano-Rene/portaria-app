import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuarios/usuario';
import { UsuariosService } from '../../usuarios.service'
import { Item } from '../item';
import { ItemDTO } from '../itens';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  usuarios: Usuario[] = []
  item : ItemDTO;

  constructor(
    private usuarioService : UsuariosService
  ) { this.item = new ItemDTO() }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe( response => this.usuarios = response)

  }

  onSubmit(){
    console.log(this.item)
  }

}
