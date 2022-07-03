import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

// Chave do local storage
const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE]; // Pode retornar undefined caso a chave nao exista
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void{
    const pessoas: Pessoa[] = this.listarTodos();
    console.log(pessoa);
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined{
    const pessoas: Pessoa[] = this.listarTodos();
    return pessoas.find(pessoa => pessoa.id == id);
  }

  atualizar(pessoa: Pessoa): void{
    const pessoas: Pessoa[] = this.listarTodos()

    pessoas.forEach((pessoaObj, pObjIndex, todasP) => {
      if(pessoaObj.id == pessoa.id){
        todasP[pObjIndex] = pessoa;
      }
    })

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: number): void{
    let pessoas: Pessoa[] = this.listarTodos();

    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
