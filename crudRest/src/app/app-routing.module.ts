import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './views/produto/produto.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [

  {path:'produto', component:ProdutoComponent},
  {path:'sobre', component:SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
