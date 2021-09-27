import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient: HttpClient) { }


  getcommentbyparameter(): Observable<any> {
      let params1=new HttpParams().set("booking","1");
      return this.httpclient.get("https://localhost:5001/api", {params: params1})
  }
}
