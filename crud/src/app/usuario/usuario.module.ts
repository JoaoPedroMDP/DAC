import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InserirEditarUsuarioComponent,
    ListarUsuarioComponent,
    ModalUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class UsuarioModule { }
