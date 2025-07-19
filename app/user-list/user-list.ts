import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users = [
    { id: 1, username: 'quynh', email: 'quynh@gmail.com' },
    { id: 2, username: 'admin', email: 'admin@gmail.com' },
    { id: 3, username: 'test', email: 'test@gmail.com' }
  ];
  filterText = '';
  filterUsers() {
    return this.users.filter(user => user.email.toLowerCase().includes(this.filterText.toLowerCase()))
  }
}
