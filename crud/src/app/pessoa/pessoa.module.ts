import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    InserirPessoaComponent,
    EditarPessoaComponent,
    ListarPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
