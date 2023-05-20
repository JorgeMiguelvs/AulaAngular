import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) {


   }
   //observable chamada em paralelo

  listar():Observable<produto[]>{
  return this.http.get<produto[]>('http://localhost:3000/produto');
  }

  inserir(produto:produto):Observable<produto>{
  return this.http.post<produto>('http://localhost:3000/produto',produto);

  }

  atualizar(produto:produto):Observable<produto>{
   return this.http.put<produto>(`http://localhost:3000/produto/${produto.id}`,produto);

  }

  apagar(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/produto/${id}`);
  }

}
