import { Component } from '@angular/core';
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
      link: '/pessoas/listar'
    },
    {
      name: 'Enderecos',
      link: '/enderecos/listar'
    },
    {
      name: 'Cidades',
      link: '/cidades/listar'
    },
    {
      name: 'Estados',
      link: '/estados/listar'
    },
  ];
}
