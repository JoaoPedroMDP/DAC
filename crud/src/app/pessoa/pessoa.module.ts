import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { MinimoValidatorDirective } from '../shared/directives/minimo-validator.directive';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    InserirPessoaComponent,
    EditarPessoaComponent,
    ListarPessoaComponent,
    NumericoDirective,
    MinimoValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
