import { Component, OnInit } from '@angular/core';
import { BookingDetailService } from '../shared/booking-detail.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProfileService } from '../shared/profile.service';
import { BookingDetail } from '../shared/booking-detail.model';
import { SignupDetail } from '../shared/signup-detail.model';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking/booking.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
 
})
export class ProfileComponent implements OnInit {

  constructor(private profileservice: ProfileService, private router: Router) { }

  books: any = [];
  Book?: BookingDetail[];
  ngOnInit(): void {


    

    this.retrieveBook();
   

  }
  retrieveBook() {
    this.profileservice.getAll()
      .subscribe(
        data => {
          //should filter using emial
          //  if(data[0].Email)
          // {
          //    console.log(data[0].Email);
          // }
          this.books = data;
          console.log(data);
          console.log(this.books);
          console.log("retrived sucessfully");
        },
        error => {
          console.log(error);
        });
  }

 
  onDelete(BookingId: number) {
    var isDelete = confirm("Do you want to delete Staff with Id: " + BookingId);
    if (isDelete) {
      this.profileservice.onDelete(BookingId).subscribe((data) => {

      }, error => { console.error(error); });
    }
  }

  

 


}
