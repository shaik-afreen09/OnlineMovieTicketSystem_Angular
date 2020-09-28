import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Refund } from '../movie-service.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  refund_obj:Refund = new Refund(0,0,0,"");

  accountNo:number;

  bookingId:number;

  refunded_data:any;

  refunddate:any;

  payment_message:string;

  refund_message:string;

  seat_data:any;

  seat_update_message:string;

  check:boolean = false;
  check1:boolean = false;
  
  message: string;
  updatedSeats: any;
 
  seat_info:any;

  account_data:any;
  account_update_message: string;

  constructor(private service:MovieServiceService) { 
    setInterval(()=>{
      let date = new Date();
      this.refunddate = date.toLocaleDateString();
    },1000)
  }

  ngOnInit(): void {
  }

  refund_data(){
    if(this.accountNo > 999 && this.accountNo < 10000 && !isNaN(this.accountNo) && !isNaN(this.bookingId) && this.bookingId > 0)
    {
      console.log("1");
    this.service.refund(this.accountNo, this.bookingId).subscribe((data)=>this.refunded_data=data);
    console.log("2");
    if(this.refunded_data != null)
    {
      console.log("3");
      if(this.refunded_data.moneyCollected > 0)
      {
        console.log("4");
        this.service.seat_details(this.refunded_data.seatType).subscribe((data)=>this.seat_data=data);
        //
        this.service.check_account(this.refunded_data.accountNo).subscribe((data)=>this.account_data=data);
      this.refund_obj.accountNo = this.refunded_data.accountNo;
      this.refund_obj.bookingId = this.refunded_data.bookingId;
      this.refund_obj.dateOfRefund = this.refunddate;
      this.refund_obj.moneyRefunded = this.refunded_data.moneyCollected;
      //
      this.account_data.currentBalance = this.account_data.currentBalance + this.refunded_data.moneyCollected;
      this.refunded_data.moneyCollected = this.refunded_data.moneyCollected - this.refunded_data.moneyCollected;
      this.service.update_customer(this.account_data).subscribe((data)=>this.account_update_message=data);
      this.seat_data.availableSeats = this.seat_data.availableSeats + this.refunded_data.seatsBooked;
      
      this.refunded_data.refund = this.refund_obj.moneyRefunded;
      //
      this.service.update_pay(this.refunded_data).subscribe((data)=>this.payment_message=data);
      //
      this.service.refund_details(this.refund_obj).subscribe((data)=>this.refund_message=data);
      
      //this.service.seat_details(this.refunded_data.seat_type).subscribe((data)=>this.seat_data=data);
      
      console.log("seat details"+this.seat_data);
      
     // this.seat_data.available_seats = this.seat_data.available_seats + this.refunded_data.seats_booked;
      
      console.log("old seat = "+this.refunded_data.seatsBooked);
      console.log("updated seat = "+this.seat_data.availableSeats);
      
      console.log("updated seat obj"+this.seat_data);
      
      this.service.set_seat_details(this.seat_data).subscribe((data)=>this.seat_update_message=data);
      
      this.check = true;
      this.check1 = false;
    }
    else{
      console.log("5");
      this.check1 = true;
      this.check = false;
    }
  }
  else{
    console.log("6");
    this.check1 = true;
    this.check = false;
  }
}
    else{
      console.log("7");
      this.check1 = true;
      this.check = false;
    }
  }

}
