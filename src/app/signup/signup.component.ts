import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupDetail } from '../shared/signup-detail.model';
import { SignupDetailService } from '../shared/signup-detail.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public service: SignupDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm ){
    this.service.postSignup().subscribe(
      (res)=>{
        console.log("Submitted sucessfully");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
