import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateComponent } from './aula2/date/date.component';
import { SobreComponent } from './aula2/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
