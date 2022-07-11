import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Estado } from 'src/app/shared';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados!: Estado[];
  
  constructor(private cidadeService: CidadeService, private estadoService: EstadoService, private router: Router) {
    this.cidade = new Cidade();
    this.estados = this.estadoService.listarTodos();
  }

  ngOnInit(): void {
  }

  inserir(){
    if(this.formCidade.form.valid){
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades/listar']);
    }
  }
}
