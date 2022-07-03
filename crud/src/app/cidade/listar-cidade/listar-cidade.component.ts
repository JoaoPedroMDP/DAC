import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services/cidade.service';
import { Cidade } from 'src/app/shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade){
    $event.preventDefault();
    if(confirm("Deseja remover a cidade " + cidade.nome + "?")){
      console.log(cidade.id);
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.cidadeService.listarTodos();
    }
  }
}
