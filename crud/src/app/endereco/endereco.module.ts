import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EnderecoService } from './services/endereco.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    ListarEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
