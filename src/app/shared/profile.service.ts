import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly baseUrl='https://localhost:5001/api/booking/1';
  constructor(private http: HttpClient) { }


 // getcommentbyparameter(): Observable<any> {
     // let params1=new HttpParams().set("booking","1");
     // return this.httpclient.get("https://localhost:5001/api/booking", {params: params1})
    // return this.httpclient.get("https://localhost:5001/api/booking/5")

 // }

 getBooks()
 {
   return this.http.get(this.baseUrl);
 }
}


