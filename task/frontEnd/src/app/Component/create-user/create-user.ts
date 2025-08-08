import { Component } from '@angular/core';
import { UserService } from '../../user-service';
import { error } from 'console';
import { User } from '../../user/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  user:User=new User();
constructor(private userService: UserService, private router: Router) {}
  saveUser()
  {
    this.userService.addEmployee(this.user).subscribe(data =>{
      console.log(data);
      alert("user added successfully");
       this.router.navigate(['/all']);
    }, 
    error =>{
      console.error("error adding user",error);
      alert("failed");
    })
  }
}
