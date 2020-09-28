import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Payments, BookingSlip } from '../movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

 /* username:string;
  password:string;*/

  auth:any;

  cities:any;

  theatres:any;

  movie_details:any;

  show_details:any;

  language_details:any;

  seats:any;

  dummySeats:any;

  no_of_seats:number;

  /*total_amount:number;

  accountNo:number;

  account_data:any;*/

  message:string;
  
 /* payments:Payments  = new Payments(0,0,0,"",0,"");

  payment_message:string;

  printdate:any;

  booking_slip:BookingSlip = new BookingSlip("","","","","","",0,0);*/

  /*checkAuthentication0:boolean = true;
  checkAuthentication1:boolean = false;
  checkAuthentication2:boolean = false;*/
  checkTheatre:boolean = false;
  checkMovies:boolean = false;
  checkShows:boolean = false;
  checkLanguage: boolean = false;
  checkSeats: boolean = false;
  check:boolean= false;
  check1:boolean = false;
  check2:boolean = false;
  check3:boolean = false;
  check4:boolean = false;
  check5:boolean = false;

  constructor(private service:MovieServiceService) { 
   /* setInterval(()=>{
      let date = new Date();
      this.printdate = date.toLocaleDateString();
    },1000)*/
   }

  ngOnInit(): void {
  }

  getcityNames(){
    this.service.cityNames().subscribe((data)=>this.auth=data);
    if(this.auth != null){
      this.service.cityNames().subscribe((data)=>this.cities=data);
    }
  }

  selectCity(city_name:string){
   
    this.service.selectedCity(city_name).subscribe((data)=>this.theatres=data);
   // this.booking_slip.city = city_name;
    this.checkTheatre = true;
  }

  selectTheatre(theatre_name:string){
    this.service.selected_theatre(theatre_name).subscribe((data)=>this.movie_details=data);
   // this.booking_slip.theatre = theatre_name;
    this.checkMovies = true;
  }

  selectMovie(movie_name){
    this.service.selected_movie().subscribe((data)=>this.show_details=data);
    //this.booking_slip.movie = movie_name;
    this.checkShows = true;
  }

  selectShow(show){
    this.service.selected_show().subscribe((data)=>this.language_details=data);
    //this.booking_slip.show = show;
    this.checkLanguage = true;
  }

  selectLanguage(language){
    this.service.selected_language().subscribe((data)=>this.seats=data);
    //this.booking_slip.language = language;
    this.checkSeats = true;
  }

  chosenSeat(particular_seat_object:any){
    this.dummySeats = particular_seat_object;
   // this.booking_slip.seat_type = this.dummySeats.seat_type;
    this.check = true;
  }

 /* no_of_seats_selected(){
    if(this.no_of_seats > 0 && this.no_of_seats <= this.dummySeats.available_seats && !isNaN(this.no_of_seats))
    {
    this.dummySeats.available_seats = this.dummySeats.available_seats - this.no_of_seats;
    this.total_amount = this.dummySeats.price * this.no_of_seats;
    //
    this.booking_slip.seats_booked = this.no_of_seats;
    this.check1 = true;
    this.check5 = false;
    }
    else{
      this.check5 = true;
      this.check1 = false;
    }
  }*/

 /* entered_accountNo(){
    if(this.accountNo > 999 && this.accountNo < 10000 && !isNaN(this.accountNo))
    {
    this.service.check_account(this.accountNo).subscribe((data)=>this.account_data=data);
    if(this.account_data != null){
      if(this.account_data.current_balance < this.dummySeats.price){
        this.check2 = true;
        this.check3 = false;
        this.check4 = false;
      }
      else if(this.account_data.current_balance - this.total_amount < 0){
        this.check2 = true;
        this.check3 = false;
        this.check4 = false;
      }
      else{
        this.check3 = true;
        this.check2 = false;
        this.check4 = false;
        this.payments.account_no = this.accountNo;
        this.payments.money_collected = this.total_amount;
        //
        this.booking_slip.amount = this.total_amount;
        //
        this.payments.refund = 0;
        this.payments.seat_type = this.dummySeats.seat_type;
        this.payments.seats_booked = this.no_of_seats;
        this.payments.date_of_transac= this.printdate;
        this.service.pay(this.payments).subscribe((data)=>this.payment_message=data);
        //
        this.service.update_seats(this.dummySeats).subscribe((data)=>this.message=data);
      }
    }
  }
    else{
      this.check4 = true;
      this.check3 = false;
      this.check2 = false;
    }
  }*/
}
