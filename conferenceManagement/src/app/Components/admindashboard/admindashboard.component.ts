import { Component, OnInit } from '@angular/core';
import { BookRoom } from 'src/app/Model/book-room';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  allPendingRequest?:BookRoom[]
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
