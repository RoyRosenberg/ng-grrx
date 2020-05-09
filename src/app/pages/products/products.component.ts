import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
    this.store.select('products').subscribe(x => {
      this.displayCode = x.showProductCode;
    });
  }

  checkChanges(checked) {
    // console.log(checked);
    this.store.dispatch({ type: 'TOGGLE_PRODUCT_CODE', payload: checked });
  }

}
