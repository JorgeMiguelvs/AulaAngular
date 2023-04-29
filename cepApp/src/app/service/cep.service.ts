import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  //construtor: instancia para criar obj
  constructor(private http: HttpClient) { }

  obterEndereco(cep: string){
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`);

  }
}
