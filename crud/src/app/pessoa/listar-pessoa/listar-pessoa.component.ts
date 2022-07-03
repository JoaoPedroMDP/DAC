import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa){
    $event.preventDefault();
    if(confirm("Deseja remover "+pessoa.nome+"?")){
      console.log("Removendo " + pessoa.nome + " / " + pessoa.id);
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }
}
