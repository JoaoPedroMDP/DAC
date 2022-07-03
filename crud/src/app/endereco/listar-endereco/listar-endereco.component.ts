import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco){
    $event.preventDefault();
    if(confirm("Deseja remover o endereco " + endereco.rua + ", " + endereco.numero + "?")){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.enderecoService.listarTodos();
    }
  }
}
