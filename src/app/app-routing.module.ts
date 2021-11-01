import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  
  {path: 'Profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path: 'SignUp', component:SignupComponent , canActivate:[AuthGuard]},
  {path: 'Booking', component:BookingComponent, canActivate:[AuthGuard]},
  {path: 'Home', component:DashboardComponent},
  //new route
  {
    path:"add/:BookingId",
    component: BookingComponent
  },

  {
    path:"Edit/:BookingId",
    component: BookingComponent
  }
   //new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
