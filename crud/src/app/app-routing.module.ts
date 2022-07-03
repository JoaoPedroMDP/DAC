import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';

const routes: Routes = [
  {path: '', redirectTo: 'pessoas/listar', pathMatch: 'full'},
  {path: 'pessoas', children: [
    {path: 'listar', component: ListarPessoaComponent },
    {path: 'editar/:id', component: EditarPessoaComponent },
    {path: 'novo', component: InserirPessoaComponent },
  ]},
  {path: 'enderecos', children: [
    {path: 'listar', component: ListarEnderecoComponent },
    {path: 'editar/:id', component: EditarEnderecoComponent },
    {path: 'novo', component: InserirEnderecoComponent }
  ]},
  {path: 'cidades', children: [
    {path: 'listar', component: ListarCidadeComponent },
    {path: 'editar/:id', component: EditarCidadeComponent },
    {path: 'novo', component: InserirCidadeComponent }
  ]},
  {path: 'estados', children: [
    {path: 'listar', component: ListarEstadoComponent },
    {path: 'editar/:id', component: EditarEstadoComponent },
    {path: 'novo', component: InserirEstadoComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
