import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CidadeService } from '../services/cidade.service';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';
@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService, private modalService: NgbModal) { }

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

  abrirModal(cidade: Cidade){
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }
}
