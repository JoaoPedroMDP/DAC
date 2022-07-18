import { useAnimation } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = "usuarioLogado"; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario{
    let usuario = localStorage[LS_CHAVE];
    return (usuario ? JSON.parse(usuario) : null);
  }
  
  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario|null> {
    let usuario = new Usuario(1, "JoaoPedroFunc", login.login, login.senha, "FUNC");
    if (login.login == login.senha) {
      if (login.login == "admin") {
        usuario = new Usuario(1, "JoaoPedroAdmin", login.login, login.senha, "ADMIN");
      }
      else if (login.login == "gerente") {
        usuario = new Usuario(1, "JoaoPedroGerente", login.login, login.senha, "GERENTE");
      }

      return of(usuario);
    }
    else {
      return of(null);
    }
  }

  logout(){
    delete localStorage[LS_CHAVE];
  }
}