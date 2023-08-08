import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getalluser',
  templateUrl: './getalluser.component.html',
  styleUrls: ['./getalluser.component.css']
})
export class GetalluserComponent implements OnInit {
  users?:User[]
constructor(private adminService:AdminService,private router:Router){}
ngOnInit(): void {
  this.GetAllUsers()
}
  GetAllUsers() {
    this.adminService.GetAllUsers().subscribe(res=>{
    this.users=res
    })
  }
}
