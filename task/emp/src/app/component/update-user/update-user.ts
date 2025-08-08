import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  standalone: true,  
  imports: [FormsModule],
  templateUrl: './update-user.html',
  styleUrls: ['./update-user.css'] 
})
export class UpdateUser   {
  user: User = new User();
  userId: number = 0; // Initialize userId
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.getUserById(this.userId);
  }
  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    }, error => {
      console.error("Error fetching user", error);
      alert("Failed to fetch user details");
    });
  }
  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe({
      next: data => {
        console.log(data);
        alert("User updated successfully");
        this.router.navigate(['/get']);
      },
      error: err => {
        console.error("Error updating user", err);
        alert("Failed to update user");
      }
    });
  }

  // Optionally, you can add a method to handle form submission
  onSubmit(): void {
    this.updateUser();
  }

  }

