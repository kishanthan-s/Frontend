import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingDetail } from './booking-detail.model';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailService {

  constructor(private http: HttpClient) { }

  formData: BookingDetail=new BookingDetail();
  readonly baseUrl='https://localhost:5001/api/booking';
 
  
 

  postBooking()
  {
    return this.http.post(this.baseUrl,this.formData);
  }

 

}
