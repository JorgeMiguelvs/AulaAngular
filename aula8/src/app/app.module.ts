import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exer3Component } from './views/exer3/exer3.component';
import { Exer4Component } from './views/exer4/exer4.component';
import { Exerc5Component } from './views/exerc5/exerc5.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { ExercNgforImgComponent } from './views/exerc-ngfor-img/exerc-ngfor-img.component';

@NgModule({
  declarations: [
    AppComponent,
    Exer3Component,
    Exer4Component,
    Exerc5Component,
    ExemploNgforComponent,
    ExercNgforImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
