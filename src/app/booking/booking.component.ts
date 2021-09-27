import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookingDetail } from '../shared/booking-detail.model';
import { BookingDetailService } from '../shared/booking-detail.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingDetailService,
    private toastr:ToastrService) { }


  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm){
    this.service.postBooking().subscribe(
      (res)=> {
        console.log("Submitted sucessfully");
        this.resetform(form);
        this.toastr.success('Submitted sucessfully','Booking detail register')
      },
      (err)=>{
        console.log(err);
      }

    );

  }


  resetform(form:NgForm)
  {
    form.form.reset();
    this.service.formData=new BookingDetail();
  }


}
