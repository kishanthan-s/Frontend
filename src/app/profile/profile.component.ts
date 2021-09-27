import { Component, OnInit } from '@angular/core';
import { BookingDetailService } from '../shared/booking-detail.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { ProfileService } from '../shared/profile.service';
import { profile } from '../shared/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _profileservice: ProfileService ) { }
 
  Bookprofile: profile[];
  ngOnInit(): void {


    this._profileservice.getcommentbyparameter()
    .subscribe
    (
      data=>
      {
        this.Bookprofile=data;
      }
    );
    
    
  }

  
  

  

}
