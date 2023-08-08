import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminhomesection',
  templateUrl: './adminhomesection.component.html',
  styleUrls: ['./adminhomesection.component.css']
})
export class AdminhomesectionComponent implements OnInit{
  time = new Date();
  intervalId:any;
  user:User
  jsonObjectofUser:any
  jsonUser:any
  userName?:string|null
constructor(private userService:UserService){
  this.user=new User()
}
ngOnInit(): void {
  this.intervalId = setInterval(() => {
    this.time = new Date();
  }, 1000);
  const email=localStorage.getItem("Email")
  this.userService.GetUserByEmail(email).subscribe(res=>{
    if(res){
    
      this.jsonObjectofUser = JSON.stringify(res);
      this.jsonUser = JSON.parse(this.jsonObjectofUser);
      this.userName=this.jsonUser['name']
    }
   
  })
}
}
