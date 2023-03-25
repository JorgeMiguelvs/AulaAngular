import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-gif',
  templateUrl: './exemplo-ng-gif.component.html',
  styleUrls: ['./exemplo-ng-gif.component.css']
})
export class ExemploNgGifComponent {
  //para usar bidind de 2 vias preciar ativat FormsMolude
  nome="";

  //boleano
  ativado = false;

  ligaDesliga()
  {//esta negando a estrutura
    this.ativado = !this.ativado;
  }

}
