import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.css']
})
export class ModalPessoaComponent implements OnInit {
  @Input() pessoa!: Pessoa;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
