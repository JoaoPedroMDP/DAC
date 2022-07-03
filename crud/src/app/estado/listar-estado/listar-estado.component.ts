import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = [];

  constructor(private estadoService: EstadoService) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado){
    $event.preventDefault();
    if(confirm("Deseja remover "+estado.nome+"?")){
      this.estadoService.remover(estado.id!);
      this.estados = this.estadoService.listarTodos();
    }
  }

}
