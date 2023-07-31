import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.user = new User()
  }

  ngOnInit(): void {
    const email = localStorage.getItem('UserEmail')
    this.GetUserByEmail(email)
  }

  GetUserByEmail(email: string | null) {
    this.http.get<User>("https://localhost:44325/api/User/GetUserByEmail?email=" + email).subscribe(result => {
      console.warn(result)
      this.user = result
    })
  } 
  
 

}
