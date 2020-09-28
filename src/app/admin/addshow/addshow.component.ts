import { Component, OnInit } from '@angular/core';
import { Shows, AdminserviceService } from 'src/app/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshow',
  templateUrl: './addshow.component.html',
  styleUrls: ['./addshow.component.css']
})
export class AddshowComponent implements OnInit {
  message: string;
  constructor(public adminservice: AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addsho:Shows):any{
    console.log(addsho);
     this.adminservice.addSho(addsho).subscribe(data => {
      this.message=data});
      this.router.navigate(['showlist']);
     }
    
   }
