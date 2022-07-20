import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-inserir-editar-usuario',
  templateUrl: './inserir-editar-usuario.component.html',
  styleUrls: ['./inserir-editar-usuario.component.css']
})
export class InserirEditarUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  usuario: Usuario = new Usuario();
  novoUsuario!: boolean;
  loading!: boolean;
  id!: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];
    this.novoUsuario = !this.id; // Se houver um id, por estar usando um operador booleano antes, converte para true. Daí nega e fica falso

    if(!this.novoUsuario){
      this.usuarioService.buscarPorId(+this.id).subscribe(usuario => {
        this.usuario = usuario;
        this.usuario.senha = '';
      });
    }
  }

  salvar(): void {
    this.loading = true;
    if(this.formUsuario.form.valid){
      if(this.novoUsuario){
        this.salvarNovoUsuario();
      }else{
        this.salvarEdicaoUsuario();
      }
    }
  }

  salvarNovoUsuario(): void {
    this.usuarioService.inserir(this.usuario).subscribe(() => {
      this.loading = false;
      this.router.navigate(["/usuarios/listar"]);
    });
  }

  salvarEdicaoUsuario(): void {
    this.usuarioService.alterar(this.usuario).subscribe(() => {
      this.loading = false;
      this.router.navigate(["/usuarios/listar"]);
    });
  }
}
