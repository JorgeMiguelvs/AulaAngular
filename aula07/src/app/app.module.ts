import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgGifComponent } from './views/exemplo-ng-gif/exemplo-ng-gif.component';
import { Exercicio1Component } from './views/exercicio1/exercicio1.component';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgGifComponent,
    Exercicio1Component,
    Exercicio2Component
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
