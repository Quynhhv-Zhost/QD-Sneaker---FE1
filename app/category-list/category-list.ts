import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  categories = [
    { id: 1, name: 'Running Shoes' },
    { id: 2, name: 'Casual Sneakers' },
    { id: 3, name: 'High Tops' },
    { id: 4, name: 'Skate Shoes' },
    { id: 5, name: 'Basketball Shoes' }
  ];
  filterText = '';
  filterCategories() {
    return this.categories.filter((category) => category.name.toLowerCase().includes(this.filterText.toLowerCase()))
  }
}