import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShowProductCode } from 'src/app/reducers/product.reducer';
import { State } from 'src/app/state/app.state';
import * as ProductActions from 'src/app/state/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // productSubscription: Observable<any>;
  displayCode = false;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select(getShowProductCode).subscribe(x => {
      this.displayCode = x;
    });
  }

  checkChanges(checked) {
    this.store.dispatch(new ProductActions.ToggleProductCode(checked));
  }

  newProduct(){
    this.store.dispatch(new ProductActions.InitiateCurrentProduct());
  }

}
