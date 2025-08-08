import { Component } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  saveUser() {
    this.userService.addEmployee(this.user).subscribe({
      next: data => {
        console.log(data);
        alert("User added successfully");
        this.router.navigate(['/get']);
      },
      error: err => {
        console.error("Error adding user", err);
        alert("Failed to add user");
      }
    });
  }
}
