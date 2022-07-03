import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa){
    $event.preventDefault();
    if(confirm("Deseja remover "+pessoa.nome+"?")){
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.pessoaService.listarTodos();
    }
  }
}
