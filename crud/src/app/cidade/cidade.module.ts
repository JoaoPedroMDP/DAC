import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';



@NgModule({
  declarations: [
    InserirCidadeComponent,
    EditarCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
