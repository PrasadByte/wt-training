
import { Component, OnInit } from '@angular/core'; 
import { User } from '../../user/user';           
import { UserService } from '../../user-service'; 

@Component({
  selector: 'app-get-user',
  standalone: false,
  templateUrl: './get-user.html',
  styleUrls: ['./get-user.css']
})
export class GetUser {    
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




