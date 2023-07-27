import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRoom } from '../Model/book-room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  GetAllPendingRequest():Observable<BookRoom[]> {
    return this.httpClient.get<BookRoom[]>('https://localhost:7227/api/Admin/DisplayRequestByStatus/pending')
  }

  constructor(private httpClient:HttpClient) { }
}
