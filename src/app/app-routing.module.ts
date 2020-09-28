import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddcityComponent } from './admin/addcity/addcity.component';
import { UpdatecityComponent } from './updatecity/updatecity.component';
import { CitylistComponent } from './citylist/citylist.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { MovielistComponent } from './admin/movielist/movielist.component';
import { AddshowComponent } from './admin/addshow/addshow.component';
import { UpdateshowComponent } from './admin/updateshow/updateshow.component';
import { ShowlistComponent } from './admin/showlist/showlist.component';
import { AddtheatreComponent } from './admin/addtheatre/addtheatre.component';
import { UpdatetheatreComponent } from './admin/updatetheatre/updatetheatre.component';
import { TheatrelistComponent } from './admin/theatrelist/theatrelist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'Book-ticket', component:BookTicketComponent},
  {path:'Cancel-ticket',component:CancelTicketComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'updatecity',component:UpdatecityComponent}, {path:'addcity',component:AddcityComponent},
  {path:'citylist',component:CitylistComponent},
  {path:'addmovie',component:AddmovieComponent}, {path:'updatemovie',component:UpdatemovieComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'addshow',component:AddshowComponent}, {path:'updateshow',component:UpdateshowComponent},
  {path:'showlist',component:ShowlistComponent}, {path:'updatetheatre',component:UpdatetheatreComponent},
  {path:'addtheatre',component:AddtheatreComponent}, {path:'theatrelist',component:TheatrelistComponent},
  {path:'adminlogin',component:AdminloginComponent},{path:'signup',component:SignupComponent},
  {path:'admin-logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
