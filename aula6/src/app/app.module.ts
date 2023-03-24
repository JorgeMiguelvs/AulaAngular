import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DuasViasComponent } from './views/duas-vias/duas-vias.component';
import { Exe1Component } from './exerc/exe1/exe1.component';

@NgModule({
  declarations: [
    AppComponent,
    DuasViasComponent,
    Exe1Component
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
