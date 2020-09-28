import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { MovieServiceService } from './movie-service.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddcityComponent } from './admin/addcity/addcity.component';
import { AdminserviceService } from './adminservice.service';
import { CitylistComponent } from './citylist/citylist.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdatecityComponent } from './updatecity/updatecity.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { MovielistComponent } from './admin/movielist/movielist.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { AddtheatreComponent } from './admin/addtheatre/addtheatre.component';
import { UpdatetheatreComponent } from './admin/updatetheatre/updatetheatre.component';
import { TheatrelistComponent } from './admin/theatrelist/theatrelist.component';
import { AddshowComponent } from './admin/addshow/addshow.component';
import { UpdateshowComponent } from './admin/updateshow/updateshow.component';
import { ShowlistComponent } from './admin/showlist/showlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './admin/logout/logout.component';

const adminRoute:Routes=[
  {path:'admin',component:AdminComponent,
  children:[
  {path:'addcity',component:AddcityComponent},
  {path:'citylist',component:CitylistComponent},{path:'addmovie',component:AddmovieComponent},
  {path:'addtheatre',component:AddtheatreComponent},{path:'addshow',component:AddshowComponent},
  {path:'showlist',component:ShowlistComponent}, {path:'theatrelist',component:TheatrelistComponent},
  {path:'movielist',component:MovielistComponent},{path:'admin-logout',component:LogoutComponent}
]

  }]
  
@NgModule({
  declarations: [
    AppComponent,
    BookTicketComponent,
    CancelTicketComponent,
    HomeComponent,
    AdminComponent,
    AddcityComponent,
    UpdatecityComponent,
   CitylistComponent,
   AddmovieComponent,
   MovielistComponent,
   UpdatemovieComponent,
   AddtheatreComponent,
   UpdatetheatreComponent,
   TheatrelistComponent,
   AddshowComponent,
   UpdateshowComponent,
   ShowlistComponent,
   AdminloginComponent,
   SignupComponent,
   LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(adminRoute, {useHash: true}),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieServiceService,AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
