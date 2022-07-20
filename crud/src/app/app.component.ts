import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { Usuario } from './shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastros';

  navbarItems = [
    {
      name: 'Pessoas',
      link: '/pessoas/listar',
      roles: ['ADMIN', 'FUNC', 'GERENTE']
    },
    {
      name: 'Usuarios',
      link: '/usuarios/listar',
      roles: ['ADMIN', 'GERENTE']
    },
    {
      name: 'Enderecos',
      link: '/enderecos/listar',
      roles: ['ADMIN', 'GERENTE']
    },
    {
      name: 'Cidades',
      link: '/cidades/listar',
      roles: ['GERENTE']
    },
    {
      name: 'Estados',
      link: '/estados/listar',
      roles: ['ADMIN', 'FUNC']
    },
  ];

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  checaPermissao(usuario: Usuario, permitidos: string[]): boolean{
    return permitidos.indexOf(usuario.perfil!) > 0;
  }

  get usuarioLogado(): Usuario | null{
    return this.loginService.usuarioLogado;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
