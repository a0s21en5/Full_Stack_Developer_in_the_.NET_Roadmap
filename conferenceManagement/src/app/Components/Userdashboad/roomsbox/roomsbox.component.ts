import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConferenceRoom } from 'src/app/Model/ConferenceRoom/conference-room';

@Component({
  selector: 'app-roomsbox',
  templateUrl: './roomsbox.component.html',
  styleUrls: ['./roomsbox.component.css']
})
export class RoomsboxComponent {

  displayAllRoom: ConferenceRoom[] = [];

  constructor(private http: HttpClient) {
    this.http.get<ConferenceRoom[]>("https://localhost:7227/api/User/DisplayAllRoom").subscribe(result => {
      // console.warn(result)
      this.displayAllRoom = result;
    })
  }

}
