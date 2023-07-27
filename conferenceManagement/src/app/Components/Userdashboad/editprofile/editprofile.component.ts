import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/User/user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
 
  user:User
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) 
  {
    this.user=new User()
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.GetUserById(id)
  }
  
  GetUserById(id: any) {
    this.http.get<User>("https://localhost:44325/api/User/GetUserById?user_Id="+id).subscribe(res=>{
      this.user=res
    })
  }
}
