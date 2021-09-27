import { Component, OnInit } from '@angular/core';
import { BookingDetailService } from '../shared/booking-detail.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { ProfileService } from '../shared/profile.service';
import { profile } from '../shared/profile';
import { BookingDetail } from '../shared/booking-detail.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _profileservice: ProfileService ) { }
 
 // Bookprofile: profile[];
books: any = []; 
 Book?: BookingDetail[];
  ngOnInit() {


  //  this._profileservice.getcommentbyparameter()
  //  .subscribe
  //  (
 //     data=>
   //   {
  //      this.Bookprofile=data;
   //   }
   // );

 //  this.getBookDetails();
 this.retrieveBook();
    
  }

  //retrieveBook() {
  //  this._profileservice.getBooks().subscribe(books => {
   //   console.log("retrived sucessfully");
   // });
  
  //}

 retrieveBook(): void {
  this._profileservice.getAll()
   .subscribe(
     data => {
        this.books = data;
        console.log(data);
        console.log("retrived sucessfully");
     },
     error => {
       console.log(error);
     });
}
  

}
