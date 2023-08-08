import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginuser } from 'src/app/Model/LoginUser/loginuser';
import { User } from 'src/app/Model/User/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Loginuser
  user:User
  token?:string|null
  jsonObjectOfUser:any
  jsonObjectoftoken:any
  jsonTokenoftoken:any
  jsonUser:any
  userEmail:any
constructor(private userService:UserService,private router:Router){
  this.user=new User()
  this.login=new Loginuser()
}
ngOnInit(): void {
  const signUpButton: HTMLElement | null = document.getElementById('signUp');
  const signInButton: HTMLElement | null = document.getElementById('signIn');
  const container: HTMLElement | null = document.getElementById('container');


  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
}
  
 Login() {
  this.userService.Login(this.login).subscribe(result => {
      this.token=result
      this.jsonObjectoftoken = JSON.stringify(result);
      this.jsonTokenoftoken = JSON.parse(this.jsonObjectoftoken);
    // console.warn(result)
    if(this.jsonTokenoftoken["Email"] && this.jsonTokenoftoken["Token"]){
      // console.log(this.jsonTokenoftoken);
   
      let jsonObject = JSON.stringify(result);
      let jsonToken = JSON.parse(jsonObject);
      localStorage.setItem('Token', this.jsonTokenoftoken["Token"]);
      localStorage.setItem('UserEmail', jsonToken["Email"]);

      // this.userEmail=localStorage.getItem('UserEmail')

      this.userService.GetUserByEmail(this.jsonTokenoftoken["Email"]).subscribe(res=>{
    
        this.jsonObjectOfUser = JSON.stringify(res);
        this.jsonUser = JSON.parse(this.jsonObjectOfUser);
        let userEmail=this.jsonUser["email"]
      // console.log(userEmail)

      var userrole=this.jsonUser["isAdmin"]
  
      if(userrole==true){
        Swal.fire(
          'Login Admin',
          'Login Successfully',
          'success'
        )
        localStorage.setItem('Email',userEmail)
        localStorage.setItem('Role', userrole);
        this.router.navigate(['adminhomesection'])
        
      }
      else{
        Swal.fire(
          'Login User',
          'login Successfully',
          'success'
        )
        localStorage.setItem('Email',userEmail)
        this.router.navigate(['userdashboard'])
      }
      }) 

    }
    
     this.router.navigate(['login']) 
      // localStorage.setItem("Token",this.token)
      
    })
   
  }

  AddUser(){
    this.userService.AddUser(this.user).subscribe(result=>{
      debugger
      // console.warn(result)
       if(result){
        Swal.fire(
          'Register User',
          'Registered Successfully Go To Sign In',
          'success'
        )
        
        // location.reload();
        //  this.router.navigate(['/login'])
       }
      
    })
    
  }
}
