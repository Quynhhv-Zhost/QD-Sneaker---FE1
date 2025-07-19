import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    { id: 1, name: 'Nike Air Max', price: 2500000, inStock: true },
    { id: 2, name: 'Adidas Ultraboost', price: 3000000, inStock: false },
    { id: 3, name: 'Puma Suede Classic', price: 1500000, inStock: true },
    { id: 4, name: 'Converse Chuck Taylor', price: 1200000, inStock: true },
    { id: 5, name: 'Vans Old Skool', price: 1000000, inStock: false }
  ];

  filterText = '';

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}