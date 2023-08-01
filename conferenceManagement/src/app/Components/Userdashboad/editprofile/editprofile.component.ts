import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user: User
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.user = new User()
  }

  ngOnInit(): void {
    const email = localStorage.getItem('UserEmail')
    this.GetUserByEmail(email)
  }


  GetUserByEmail(email: string | null) {
    this.http.get<User>("https://localhost:7227/api/User/GetUserByEmail/" + email).subscribe(result => {
      // console.warn(result)
      this.user = result
    })
  }

  Editprofile() {
    this.http.put<boolean>("https://localhost:7227/api/User/EditUser?user_Id=" + this.user.user_Id, this.user).subscribe(result => {
      // console.warn(result)
      if (result == true) {
        Swal.fire(
          'Edit Profile',
          'Edit Successfully',
          'success'
        )
        this.router.navigate(['/main-user-dashboard'])
      }
    })
  }

  Cancel() {
    this.router.navigate(['/main-user-dashboard'])
  }
}
