import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit { private authGuard : AuthGuard 

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }
  Invalidlogins: boolean=false;
  
  ngOnInit(){
    
    this.isUserAuthenticated();
  }


  


 

  isUserAuthenticated()
  {
    const token: any = localStorage.getItem("jwt");
    if(token  && !this.jwtHelper.isTokenExpired(token)){
      
      this.Invalidlogins=true;
      console.log(this.Invalidlogins);
      return true;
    }
    else
    {
      
      this.Invalidlogins=false;
      console.log(this.Invalidlogins);
      return false;
    }
  }

  logOut()
  {
    localStorage.removeItem("jwt");
    location.reload();
    this.router.navigate(["/"]);
  }

   
}



