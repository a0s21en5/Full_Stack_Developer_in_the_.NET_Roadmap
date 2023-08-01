import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Model/Booking/booking';
import { Observable } from 'rxjs';
import { Room } from '../Model/Room/room';
import { User } from '../Model/User/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  GetAllUsers():Observable<User[]> {
    return this.httpClient.get<User[]>('https://localhost:7227/api/Admin/GetAllUser')
  }
  UpdateRoomByAdmin(room: Room):Observable<boolean> {
    return this.httpClient.put<boolean>('https://localhost:7227/api/Admin/UpdateRoom/'+room.roomId,room)
  }
  GetRoomByRoomId(id: any):Observable<Room> {
    return this.httpClient.get<Room>('https://localhost:7227/api/Admin/GetRoomById/'+id)
  }
  DeleteRoom(roomId: any):Observable<boolean>{
    return this.httpClient.delete<boolean>('https://localhost:7227/api/Admin/DeleteRoom/'+roomId)
  }
  DisplayAllRoomToAdmin():Observable<Room[]> {
   return this.httpClient.get<Room[]>("https://localhost:7227/api/User/DisplayAllRoom")
  }
  CreateNewRoom(createRoom: Room):Observable<boolean> {
   return this.httpClient.post<boolean>('https://localhost:7227/api/Admin/AddRoom',createRoom)
  }
  GetAllPendingRequest():Observable<Booking[]> {
    return this.httpClient.get<Booking[]>('https://localhost:7227/api/Admin/DisplayRequestByStatus/pending')
  }
  getAllBooking(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>('https://localhost:7227/api/Admin/GetAllBooking');
  }
  constructor(private httpClient:HttpClient) { }

}
