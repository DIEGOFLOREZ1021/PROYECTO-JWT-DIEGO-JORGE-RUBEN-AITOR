import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { NgFor } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (res) =>{
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }
}
