import { Component } from '@angular/core';

@Component({
  selector: 'app-date', //seletor/ nome de atalho do componente
  templateUrl: './date.component.html', //Nome do arqivo html
  styleUrls: ['./date.component.css'] //Nome do arqivo css
})
export class DateComponent {

  data: Date = new Date();

}
