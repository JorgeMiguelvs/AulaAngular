import { Component } from '@angular/core';
import { produto } from 'src/app/model/produto';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  //array vazio
  listaProdutos: produto[] = [];
  produto = new produto();
  estaEditando = false;

  constructor(private clienteService:ClienteService){

  }
  //subscribe: interesse no retorno
  listar(){                               //arrowFunctions parametro que vai dentro do subscribe
    this.clienteService.listar().subscribe(produtos =>{
        this.listaProdutos = produtos;
    });
  }

  inserir(){
    this.clienteService.inserir(this.produto).subscribe(produto =>{
      this.listar();
  });
  }

  remover(id:number){                       //()não tem parametro
    this.clienteService.apagar(id).subscribe(()=>{
    this.listar();
    });
  }

  atualizar(){
    this.clienteService.atualizar(this.produto).subscribe(()=>{
      this.listar();
    });
  }

  salvar(){
    if(this.estaEditando){
      this.atualizar();
    }
    else{
      this.inserir();
    }
  }

  selecionar(produto:produto){
    this.produto=produto;
    this.estaEditando = true;

  }

  cancelar(){
    this.estaEditando = false;
    this.produto = new produto();
  }

}
