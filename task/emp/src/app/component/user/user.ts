import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  id:number=0;
  name:string="";
  email:string="";
  number:string="";
  password:string="";
  accountNo:string="";

}
