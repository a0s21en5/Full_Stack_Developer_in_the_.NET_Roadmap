import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/Model/contact/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact: Contact

  constructor(private router: Router, private http: HttpClient) {
    this.contact = new Contact();
  }

  AddContact() {
    this.http.post<boolean>("https://localhost:7227/api/User/AddContact", this.contact).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/main-user-dashboard']);
    }, (error) => {
      console.log(error);
    })
  }

  Cancle() {
    this.router.navigate(['/main-user-dashboard']);
  }
}
