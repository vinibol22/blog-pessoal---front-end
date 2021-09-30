import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient


  ) { }

  entrar(UsuarioLogin:UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://viniblogpessoal.herokuapp.com/usuarios/logar',UsuarioLogin)
  }
  cadastrar(Usuario:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('https:viniblogpessoal.herokuapp.com/usuarios/cadastrar',Usuario)
  }

  logado(){
    let ok:boolean = false;
    if(environment.token != ''){
      ok=true
    }
    return ok;
  }
}
//https://viniblogpessoal.herokuapp.com