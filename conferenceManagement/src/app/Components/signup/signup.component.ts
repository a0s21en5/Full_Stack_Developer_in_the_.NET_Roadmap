import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
user:User
constructor(private http:HttpClient,private router:Router) {   this.user = new User(); }
  AddUser(){

    this.http.post<boolean>('https://localhost:44325/api/User/AddUser',this.user).subscribe(result=>{
      console.warn(result)
      if(result){
        this.router.navigate(['/login'])
      }
    })
  }
}
