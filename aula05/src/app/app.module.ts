import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex1BindingsComponent } from './views/ex1-bindings/ex1-bindings.component';
import { Ex2BindingsComponent } from './views/ex2-bindings/ex2-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex03Component,
    Ex04Component,
    Ex1BindingsComponent,
    Ex2BindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
