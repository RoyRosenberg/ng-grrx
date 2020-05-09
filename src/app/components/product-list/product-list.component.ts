import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { getShowProductCode } from 'src/app/reducers/product.reducer';
import { State } from 'src/app/state/app.state';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  showProductCode = false;
  constructor(private prdService: ProductsService, private store: Store<State>) { }

  ngOnInit() {

    this.store.select(getShowProductCode).subscribe(showProductCode => {
      this.showProductCode = showProductCode;
    });

    this.prdService.getProducts().subscribe(list => {
      this.products = list;
      console.log(list);
    });
  }

}
