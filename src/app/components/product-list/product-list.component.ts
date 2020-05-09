import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  showProductCode = false;
  constructor(private prdService: ProductsService, private store: Store<any>) { }

  ngOnInit() {

    this.store.select('product').subscribe(prd => {
      console.log('list:', prd);
      this.showProductCode = prd ? prd.showProductCode : this.showProductCode;
    });

    this.prdService.getProducts().subscribe(list => {
      this.products = list;
      console.log(list);
    });
  }

}
