import { Injectable } from '@angular/core';
import { CRUDService } from 'src/app/shared/interfaces/crud-service.interface';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE = 'estados';

@Injectable({
  providedIn: 'root'
})
export class EstadoService implements CRUDService{

  constructor() { }

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE]; // Pode retornar undefined caso a chave nao exista
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado): void{
    const estados: Estado[] = this.listarTodos();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado | undefined{
    const estados: Estado[] = this.listarTodos();
    return estados.find(estado => estado.id == id);
  }

  atualizar(estado: Estado): void{
    const estados: Estado[] = this.listarTodos()

    estados.forEach((estadoObj, eObjIndex, todosE) => {
      if(estadoObj.id == estado.id){
        todosE[eObjIndex] = estado;
      }
    })

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: number): void{
    let estados: Estado[] = this.listarTodos();

    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
