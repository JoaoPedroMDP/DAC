import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared';

const BASE_URL = "http://localhost:3000/usuarios"
const HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(BASE_URL);
  }

  buscarPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(BASE_URL + id, HEADERS);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post(BASE_URL, JSON.stringify(usuario), HEADERS)
  }

  remover(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(BASE_URL + id, HEADERS);
  }

  alterar(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(BASE_URL+usuario.id, JSON.stringify(usuario), HEADERS);
  }
}
