import { Component } from '@angular/core';

@Component({
  selector: 'app-propbind',
  templateUrl: './propbind.component.html',
  styleUrls: ['./propbind.component.css']
})

export class PropbindComponent {
  pais = "alemanha";

  trocarPais(){
    if(this.pais =='brasil'){
      this.pais = 'alemanha';
    }
    else{
      this.pais='brasil';
    }
  }
}
