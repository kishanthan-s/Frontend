import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDetail } from '../shared/booking-detail.model';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //[x: string]: any;
  // profiles: Profile[];
  readonly baseUrl = 'https://localhost:5001/api/booking/24';
  readonly base_Url = 'https://localhost:5001/api/booking/24';
  
  constructor(private http: HttpClient) { }




  getAll(): Observable<BookingDetail[]> {
    return this.http.get<BookingDetail[]>(this.baseUrl);
  }

 

  listBooks() {
    return this.http.get(this.baseUrl);
  }

//number is changed to any
  onDelete(BookingId :any){
    return this.http.delete(this.base_Url,BookingId)

  }


 
}


