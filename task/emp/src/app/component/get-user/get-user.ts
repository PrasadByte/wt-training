import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user/user';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  imports: [CommonModule],
  templateUrl: './get-user.html',
  styleUrls: ['./get-user.css']
})
export class GetUser implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  updateUser(id: number): void {
    // Logic to update user
    this.router.navigate(['/update', id]);

    
  }
  deleteUser(id: number): void {
    // Logic to delete user
    this.router.navigate(['delete', id]);
    console.log(`Delete user with ID: ${id}`);
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log(`User with ID ${id} deleted`);
        alert("User deleted successfully");
        this.getUsers(); // Refresh the user list
      },
      error: err => {
        console.error("Error deleting user", err);
        alert("Failed to delete user");
      }
    });
  }
}
