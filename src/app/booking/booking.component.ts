import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileComponent } from '../profile/profile.component';
import { BookingDetail } from '../shared/booking-detail.model';
import { BookingDetailService } from '../shared/booking-detail.service';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  //providers: [ProfileComponent]
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingDetailService, 
    private toastr: ToastrService, private route: ActivatedRoute) { }
//router is added externally
    bookrooms: BookingDetail;
  //here activated route is added

  bookingId: number;
  id: number;
  header: string;
 

 
  ngOnInit(): void {
   // this.bookingId = + !this.route.snapshot.paramMap.get('bookingId'); //! was inserted additionally to display whether to add or edit booking
  //  //this.header = this.bookingId === 0? 'Add Edit booking' : 'Add booking';inserted to see whethe it is add or edit
   // console.log(this.bookingId);
//newly inserted
 
    this.route.queryParams.subscribe(params => {
      this.bookingId = params['bookingId'];
    });
    console.log(this.bookingId);
 
    this.getBook();



  }

  onSubmit(form: NgForm) {
    this.service.postBooking().subscribe(
      (res) => {
        console.log("Submitted sucessfully");
        this.resetform(form);
        this.toastr.success('Submitted sucessfully', 'Booking detail register')
      },
      (err) => {
        console.log(err);
      }

    );

  }


  resetform(form: NgForm) {
    form.form.reset();
    this.service.formData = new BookingDetail();
  }

 
  //for update service
  getBook(): void{
    //to get the id
    const id=+! this.route.snapshot.paramMap.get("bookingId")
    console.log(id);
   if(id !=0)
   {
     
  }else
   {
   this.bookrooms=new BookingDetail;
   }


  }

 
  
}
