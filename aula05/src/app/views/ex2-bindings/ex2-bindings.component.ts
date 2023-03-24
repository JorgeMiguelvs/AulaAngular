import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-bindings',
  templateUrl: './ex2-bindings.component.html',
  styleUrls: ['./ex2-bindings.component.css']
})
export class Ex2BindingsComponent {



   soma(n1:number,n2:number) {
   return n1+n2;
  }

}
