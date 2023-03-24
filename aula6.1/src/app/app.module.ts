import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exe1Component } from './views/exe1/exe1.component';
import { Exe2Component } from './views/exe2/exe2.component';
import { Exe3Component } from './views/exe3/exe3.component';

@NgModule({
  declarations: [
    AppComponent,
    Exe1Component,
    Exe2Component,
    Exe3Component
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
