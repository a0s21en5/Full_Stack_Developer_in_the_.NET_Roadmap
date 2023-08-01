import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Login/login';
import { User } from 'src/app/Model/User/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login


  constructor(private http: HttpClient, private router: Router) {
    this.login = new Login()
 
  }

  Login() {
    this.http.post<User>("https://localhost:7227/api/Login/loginUser", this.login).subscribe(result => {
      
    // console.warn(result)

      let jsonObject = JSON.stringify(result);
      let jsonToken = JSON.parse(jsonObject);

      localStorage.setItem('UserEmail', jsonToken["Email"]);
      if(result){
        Swal.fire(
          'User Login',
          'Login Successfully',
          'success'
        )
        this.router.navigate(['/main-user-dashboard'])
      }
    })
  }

 

}