import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Invalidlogin: boolean; 
  Invalidlogins: boolean=false; 

  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService) { }
   
 
  login(form: NgForm)
  {
    const Credential={
      'email': form.value.email,
      'password':form.value.password
    }
    console.log(Credential)
    this.http.post("https://localhost:5001/api/customer/login",Credential)
    .subscribe(Response=>{
      const token =(<any>Response).token;
      localStorage.setItem("jwt",token);
      this.Invalidlogin=false;
     // this.router.navigate(["/"]);
      location.reload();
    }, err =>{
      this.Invalidlogin= true;
      
    })

  }

  isUserAuthenticated()
  {
    const token: any = localStorage.getItem("jwt");
    if(token  && !this.jwtHelper.isTokenExpired(token)){
      
      this.Invalidlogins=true;
      
      return true;
    }
    else
    {
      
      this.Invalidlogins=false;
      
      return false;
    }
  }

  logOut()
  {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }

  

  ngOnInit() {
    this.isUserAuthenticated();
    
    
  }
  
  


}
