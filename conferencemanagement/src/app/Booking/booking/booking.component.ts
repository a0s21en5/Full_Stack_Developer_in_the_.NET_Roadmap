import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import format from 'date-fns/format';
import { Booking } from 'src/app/Model/Booking/booking';
import { Room } from 'src/app/Model/Room/room';
import { User } from 'src/app/Model/User/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  user: User=new User;
  room:Room=new Room();
  id:string|undefined|null
  booking:Booking 
  convertedDate: Date=new Date;

  @Input() timeSlots?: string

  @Output() selectedTime: EventEmitter<string> = new EventEmitter<string>();

 

  onSelectTime(time: string) {

    this.selectedTime.emit(time);

}

  minDate = new Date();

 

  selectedDate!: Date  // Initialize the variable to null
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router)
  {
   this.booking=new Booking()
   this.booking.requestId=''
   this.booking.status=''
  }
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')

    const email = localStorage.getItem('UserEmail')
    this.GetUserByEmail(email)
    this.GetRoomById()
     
    
  }
  GetUserByEmail(email: string | null) {
    this.http.get<User>("https://localhost:7227/api/User/GetUserByEmail/" + email).subscribe(result => {

      this.user = result
      this.booking.userId=this.user.user_Id
      
    })
  }
  GetRoomById() {
    this.http.get<Room>("https://localhost:7227/api/Admin/GetRoomById/" + this.id).subscribe(result => {

      this.room = result
      this.booking.roomId=this.room.roomId
    })
  }


  onDateSelected(event: any): void {

    this.selectedDate = event.value;
    const formattedDate = format(this.selectedDate, 'yyyy-MM-dd');
   console.log('Formatted Date:', formattedDate);
   this.booking.date=formattedDate

  }

 

// chandrakant code

timeslots = [

  { label: '10 AM - 12 PM', isSelected: false },

  { label: '12 PM - 2 PM', isSelected: false },

  { label: '2 PM - 4 PM', isSelected: false },

  { label: '4 PM - 6 PM', isSelected: false },

];

selecteTime?: string // To store the label of the selected timeslot

toggleTimeslot(timeslot: any) {

  if (timeslot.isSelected) {
 // Deselect the current timeslot

  } else {

    this.selecteTime = timeslot.label; // Select the timeslot and store its label

  }

  // Deselect all other timeslots

  this.timeslots.forEach(slot => {

    if (slot !== timeslot) {

      slot.isSelected = false;

    }

  });

  // Toggle the selected state of the clicked timeslot

  timeslot.isSelected = !timeslot.isSelected;

}

onNextButtonClicked() {

  // Print the selected time in the console when "Next" button is clicked

  if (this.selecteTime ) {
    this.booking.timeSlot = this.selecteTime;
    console.log(this.booking);
    

  


    
    this.http.post<boolean>('https://localhost:7227/api/User/BookRoom',this.booking).subscribe(res=>{
     
      
   if(res){
    Swal.fire(

      'Good job!',

      'Room Booked Successfully!',

      'success'

    )
    this.router.navigate(['userdashboard'])
   }
    
    })

  } else {

    console.log('Error');

  }

}
Cancel(){
  this.router.navigate(['userdashboard'])
}

}
