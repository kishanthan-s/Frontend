import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupDetail } from './signup-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SignupDetailService {

  constructor(private http: HttpClient ) { }

  formData: SignupDetail = new SignupDetail();
  readonly baseUrl='https://localhost:5001/api/customer/register';

  postSignup(){
    return this.http.post(this.baseUrl,this.formData);
    
  }
}
