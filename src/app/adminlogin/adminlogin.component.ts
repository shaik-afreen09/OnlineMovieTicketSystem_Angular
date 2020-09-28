import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:string;
  password:string;
  auth:any;
  checkAuthentication0:boolean = true;
  checkAuthentication1:boolean = false;
  checkAuthentication2:boolean = false;
  constructor(public service:AdminserviceService,public router: Router) { }
  ngOnInit(): void {
  }
  aLogin(){
    this.service.admin(this.username, this.password).subscribe((data)=>this.auth=data);
    if(this.auth != null){
     // this.service.cityNames().subscribe((data)=>this.cities=data);
      this.checkAuthentication1 = true;
      this.checkAuthentication2 = false;
      this.checkAuthentication0 = false;
      this.router.navigate(['/admin']);
    }
    else{
      this.checkAuthentication2 = true;
      this.checkAuthentication1 = false;
    }
  }

}
