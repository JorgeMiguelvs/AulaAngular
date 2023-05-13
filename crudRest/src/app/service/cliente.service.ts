import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) {


   }

  listar(){
  return this.http.get<produto[]>('http://localhost:3000/produto');
  }

  inserir(produto:produto){
  return this.http.post<produto>('http://localhost:3000/produto',produto);

  }

  atualizar(produto:produto){
   this.http.put<produto>(`http://localhost:3000/produto/${produto.id}`,produto);

  }

  apagar(){
    this.http.delete<produto>(`http://localhost:3000/produto/${produto.id}`);
  }

}
