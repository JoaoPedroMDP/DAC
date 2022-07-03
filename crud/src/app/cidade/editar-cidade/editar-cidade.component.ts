import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;

  constructor(private cidadeService: CidadeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    let cidade = this.cidadeService.buscarPorId(id);
    if(cidade != undefined){
      this.cidade = cidade;
    }else{
      throw new Error("Não foi possível encontrar a cidade " + id)
    }
  }

  atualizar(){
    if(this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['cidades/listar']);
    }
  }
}
