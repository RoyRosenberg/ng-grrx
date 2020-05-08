import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { StamComponent } from './pages/stam/stam.component';


const routes: Routes = [
  { path: '',   redirectTo: '/stam', pathMatch: 'full' },
  { path: 'stam', component: StamComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
