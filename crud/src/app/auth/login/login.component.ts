import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("formLogin") formLogin!: NgForm;
  message!: string;
  login: Login = new Login();
  loading!: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      if(this.loginService.usuarioLogado){
        this.router.navigate(["/pessoas"]);
      }
    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params["errors;"]
    })
  }

  logar(){
    this.loading = true;

    if(this.formLogin.form.valid){
      this.loginService.login(this.login).subscribe(usu => {
        if(usu != null){
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate(["/pessoas"]);
        }else{
          this.message = "Credenciais inválidas.";
        }
      });
    }
    this.loading = false;
  }
}
