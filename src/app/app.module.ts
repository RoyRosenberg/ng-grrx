import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PostEffects } from './effects/post.effects';
import { MenuComponent } from './pages/menu/menu.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { postsReducer } from './reducers/post.reducer';
import { productReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent,
    PostsComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productReducer, posts: postsReducer }),
    EffectsModule.forRoot([PostEffects]),
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
