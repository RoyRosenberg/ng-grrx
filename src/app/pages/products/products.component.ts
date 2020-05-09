import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShowProductCode } from 'src/app/reducers/product.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // productSubscription: Observable<any>;
  displayCode = false;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(getShowProductCode).subscribe(x => {
      this.displayCode = x;
    });
  }

  checkChanges(checked) {
    // console.log(checked);
    this.store.dispatch({ type: 'TOGGLE_PRODUCT_CODE', payload: checked });
  }

}
