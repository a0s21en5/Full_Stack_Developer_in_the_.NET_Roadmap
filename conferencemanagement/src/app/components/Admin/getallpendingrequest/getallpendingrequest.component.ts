import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/Model/Booking/booking';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-getallpendingrequest',
  templateUrl: './getallpendingrequest.component.html',
  styleUrls: ['./getallpendingrequest.component.css']
})
export class GetallpendingrequestComponent implements OnInit {
  allPendingRequest?:Booking[]
constructor(private adminService:AdminService){}
ngOnInit(): void {
  this.GetAllPendingRequest()
}
GetAllPendingRequest() {
  this.adminService.GetAllPendingRequest().subscribe(res=>{
  this.allPendingRequest=res
  })
}
}
