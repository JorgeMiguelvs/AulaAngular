import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  //bolean - flag
  botao = false;

  sumirDiv()
  {
    this.botao = !this.botao;
  }
}
