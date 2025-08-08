import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../../services/user-service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ge-user',
  imports: [CommonModule],
  templateUrl: './ge-user.html',
  styleUrl: './ge-user.css'
})
export class GeUser implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}


