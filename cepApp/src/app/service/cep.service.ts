import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  //construtor: instancia para criar obj, função que é chamada na classe,
  //htpp nome de variavel
  //com private todas funções conseguem acessar a função
  constructor(private http: HttpClient) { }
  //metodo: função do obj
  //diamond < >:falar o tipo
  obterEndereco(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}

