import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User
  userEmail?:string|null
constructor(private userService:UserService, private activatedRoute: ActivatedRoute, private router: Router){
  this.user=new User()
}
ngOnInit(): void {
  const email = localStorage.getItem('UserEmail')
  this.userEmail=email
    this.GetUserByEmail(email)
}
GetUserByEmail(email: string|null ) {
  this.userService.GetUserByEmail(email).subscribe(res=>{
this.user=res
  })
}
  Logout(){
    this.router.navigate(['/'])
    localStorage.clear()
  }
}
