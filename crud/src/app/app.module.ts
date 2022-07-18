import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaService } from './pessoa/services/pessoa.service';
import { EnderecoModule } from './endereco/endereco.module';
import { CidadeModule } from './cidade/cidade.module';
import { EnderecoService } from './endereco/services/endereco.service';
import { CidadeService } from './cidade/services/cidade.service';
import { EstadoModule } from './estado/estado.module';
import { SharedModule } from './shared';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    FormsModule,
    SharedModule,
    AuthModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [PessoaService, EnderecoService, CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
