import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { getCurrentProduct } from 'src/app/reducers/product.reducer';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selectedProduct: Product;
  product = new FormControl('product');

  constructor(private store: Store<State>) { }
  ngOnInit() {
    this.store.select(getCurrentProduct).subscribe(prd => {
      this.selectedProduct = prd;
      this.product.patchValue({name: prd.name, code: prd.code});
    });
  }

  onSubmit(f){
    console.log(f.value);
    // console.log(this.product);
  }

}
