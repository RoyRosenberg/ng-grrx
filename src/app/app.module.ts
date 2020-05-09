import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductsComponent } from './pages/products/products.component';
import { productReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }),
    StoreDevtoolsModule.instrument({
      name: 'my ngrx example',
      maxAge: 25,
      logOnly: environment.production
    })
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
