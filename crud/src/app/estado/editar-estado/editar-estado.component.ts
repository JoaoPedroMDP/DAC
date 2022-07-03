import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(private estadoService: EstadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    let estado = this.estadoService.buscarPorId(id);

    if(estado != undefined){
      this.estado = estado;
    }else{
      throw new Error("Estado " + id + " não encontrado.");
    }
  }

  atualizar(): void {
    if(this.formEstado.form.valid){
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados/listar']);
    }
  }
}
