import { Injectable } from '@angular/core';
import { CRUDService } from 'src/app/shared/interfaces/crud-service.interface';
import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE = 'enderecos';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService implements CRUDService{

  constructor() { }

  listarTodos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE]; // Pode retornar undefined caso a chave nao exista
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserir(endereco: Endereco): void{
    const enderecos: Endereco[] = this.listarTodos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorId(id: number): Endereco | undefined{
    const enderecos: Endereco[] = this.listarTodos();
    return enderecos.find(endereco => endereco.id == id);
  }

  atualizar(endereco: Endereco): void{
    const enderecos: Endereco[] = this.listarTodos()

    enderecos.forEach((pessoaObj, pObjIndex, todasP) => {
      if(pessoaObj.id == endereco.id){
        todasP[pObjIndex] = endereco;
      }
    })

    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  remover(id: number): void{
    let enderecos: Endereco[] = this.listarTodos();

    enderecos = enderecos.filter(endereco => endereco.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
