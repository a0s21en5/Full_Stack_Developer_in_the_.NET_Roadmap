import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginuser } from 'src/app/Model/LoginUser/loginuser';
import { User } from 'src/app/Model/User/user';
import { UserService } from 'src/app/services/user.service';

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

      localStorage.setItem('UserEmail', jsonToken["Email"]);

      // this.userEmail=localStorage.getItem('UserEmail')

      this.userService.GetUserByEmail(this.jsonTokenoftoken["Email"]).subscribe(res=>{
        debugger;
        this.jsonObjectOfUser = JSON.stringify(res);
        this.jsonUser = JSON.parse(this.jsonObjectOfUser);
        let userEmail=this.jsonUser["email"]
      // console.log(userEmail)

      var userrole=this.jsonUser["isAdmin"]
  
      if(userrole==true){
        localStorage.setItem('Email',userEmail)
        localStorage.setItem('Role', userrole);
        this.router.navigate(['admindashboard'])
        
      }
      else{
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
      // console.warn(result)
       if(result){
         this.router.navigate(['/login'])
       }
    })
  }
}
