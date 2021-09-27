import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDetail } from '../shared/booking-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly baseUrl='https://localhost:5001/api/booking/9';
  constructor(private http: HttpClient) { }


 // getcommentbyparameter(): Observable<any> {
     // let params1=new HttpParams().set("booking","1");
     // return this.httpclient.get("https://localhost:5001/api/booking", {params: params1})
    // return this.httpclient.get("https://localhost:5001/api/booking/5")

 // }

 //getBooks()
//{
//   return this.http.get(this.baseUrl);
// }

 getAll(): Observable<BookingDetail[]> {
 return this.http.get<BookingDetail[]>(this.baseUrl);
}
}


