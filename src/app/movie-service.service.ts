import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class Payments{
  accountNo:number;
  moneyCollected:number;
  seatsBooked:number;
  seatType:number;
  refund:number;
  dateOfTransac:string;
  constructor(accountNo, moneyCollected, seatsBooked, seatType, refund, date){
    this.accountNo = accountNo;
    this.moneyCollected = moneyCollected;
    this.seatsBooked = seatsBooked;
    this.seatType = seatType;
    this.refund = refund;
    this.dateOfTransac = date;
  }
}
export class Seat{

  sno:number;
  seatType:string;
 availableSeats:number;
 price:number;
  constructor(sno:number, seatType:string, availableSeats:number,price:number){
          this.sno=sno,
          this.seatType=seatType,
          this.availableSeats=availableSeats,
          this.price=price
      }
}

export class Refund{
  accountNo:number;
  moneyRefunded:number;
  bookingId:number;
  dateOfRefund:string;
  constructor(accountNo:number, moneyRefunded:number, bookingId:number, dateOfRefund:string){
    this.accountNo = accountNo;
    this.bookingId = bookingId;
    this.moneyRefunded = moneyRefunded;
    this.dateOfRefund = dateOfRefund;
  }
}

export class Ticket{
  no_of_seats:number;
  seat_name:string;
  bookingId:number;
  ticket_status:number;
  constructor(no_of_seats, seat_name, bookingId, ticket_status){
    this.bookingId = bookingId;
    this.no_of_seats = no_of_seats;
    this.seat_name = seat_name;
    this.ticket_status = ticket_status;
  }
}

export class BookingSlip{
  city:string;
  theatre:string;
  movie:string;
  show:string;
  language:string;
  seatType:string;
  seatsBooked:number;
  amount:number;
  constructor(city:string, theatre:string, movie:string, show:string, language:string,seatType:string, seatsBooked:number, amount:number){
    this.city = city;
    this.theatre = theatre;
    this.movie = movie;
    this.show = show;
    this.language = language;
    this.seatType = seatType;
    this.seatsBooked = seatsBooked;
    this.amount = amount;
  }
}


@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  constructor(private http:HttpClient) { }

  public addUser(adduser: Accounts) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post("http://localhost:5454/user/signup", adduser,  { headers, responseType: 'text'});
  }

  public validation(uname:string, pass:string){
    return this.http.get("http://localhost:5454/user/validation/"+uname+"/"+pass,{responseType:'json'});
  }

  public cityNames(){
    return this.http.get("http://localhost:5454/user/cities",{responseType: 'json'});
  }

  public selectedCity(city_name:string){
    return this.http.get("http://localhost:5454/user/theatres/"+city_name,{responseType:'json'});
  }
  
  public selected_theatre(theatre_name:string){
    return this.http.get("http://localhost:5454/user/movies/"+theatre_name,{responseType:'json'});
  }

  public selected_movie(){
    return this.http.get("http://localhost:5454/user/shows",{responseType:'json'});
  }

  public selected_show(){
    return this.http.get("http://localhost:5454/user/languages",{responseType:'json'});
  }

  public selected_language(){
    return this.http.get("http://localhost:5454/user/seats",{responseType:'json'});
  }

  public check_account(accountNo){
    return this.http.get("http://localhost:5454/user/account_data/"+accountNo,{responseType:'json'});
  }
 
  public update_seats(seats){
    console.log(seats);
    return this.http.put("http://localhost:5454/user/update_seats",seats,{responseType:'text'});
  }

  public pay(payment:Payments){
    return this.http.post("http://localhost:5454/user/payments",payment,{responseType:'text'});
  }

  public refund(acc_no:number, book_id:number){
    return this.http.get("http://localhost:5454/user/refund/"+acc_no+"/"+book_id,{responseType:'json'});
  }

  public update_pay(pay){
    return this.http.put("http://localhost:5454/user/update_payment",pay,{responseType:'text'});
  }

  public refund_details(ref){
    return this.http.post("http://localhost:5454/user/refund_details",ref,{responseType:'text'});
  }

  public seat_details(seat_type){
    return this.http.get("http://localhost:5454/user/seat_details/"+seat_type,{responseType:'json'});
  }

  public set_seat_details(seat_obj){
    return this.http.put("http://localhost:5454/user/set_seats",seat_obj,{responseType:'text'});
  }
  public update_customer(cust){
    return this.http.put("http://localhost:5454/update_customer",cust,{responseType:'text'});
  }
}
export class Accounts {
  sno: number;
  username: string;
  password: string;
  name:string;
  email:string;
  userPhoneno:number;
}