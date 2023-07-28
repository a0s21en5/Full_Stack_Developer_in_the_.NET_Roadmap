import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Login/login';
import { User } from 'src/app/Model/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login
  user:User

  constructor(private http: HttpClient, private router: Router) {
    this.login = new Login()
    this.user = new User();
  }

  Login() {
    this.http.post<User>("https://localhost:44325/api/Login/loginUser", this.login).subscribe(result => {
      console.log("hii");
    // console.warn(result)

      let jsonObject = JSON.stringify(result);
      let jsonToken = JSON.parse(jsonObject);

      localStorage.setItem('UserEmail', jsonToken["Email"]);
      if(result){
        this.router.navigate(['/main-user-dashboard'])
      }
    })
  }

  AddUser(){
    console.log("hii");
    
    this.http.post<boolean>('https://localhost:44325/api/User/AddUser',this.user).subscribe(result=>{
      console.warn(result)
      if(result){
        this.router.navigate(['/home'])
      }
    })
  }

}