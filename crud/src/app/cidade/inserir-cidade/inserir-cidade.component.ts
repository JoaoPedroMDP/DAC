import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private cidadeService: CidadeService, private router: Router) {
    this.cidade = new Cidade();
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
