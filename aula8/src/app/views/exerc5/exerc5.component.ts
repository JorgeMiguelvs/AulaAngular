import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc5',
  templateUrl: './exerc5.component.html',
  styleUrls: ['./exerc5.component.css']
})
export class Exerc5Component {
  res=0;
  numero1 =0;
  numero2=0;

  calc(op:string)
  {
    if (op=='+')
    {
      this.res = this.numero1 + this.numero2;
    }
    else if(op=='-')
    {
      this.res = this.numero1 - this.numero2;
    }
    else if(op=='*')
    {
      this.res = this.numero1 * this.numero2;
    }
    else if(op=='/')
    {
      this.res = this.numero1 / this.numero2;
    }
  }
}
