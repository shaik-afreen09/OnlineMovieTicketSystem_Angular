import { Component, OnInit } from '@angular/core';
import { AdminserviceService, Theatres } from 'src/app/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtheatre',
  templateUrl: './addtheatre.component.html',
  styleUrls: ['./addtheatre.component.css']
})
export class AddtheatreComponent implements OnInit {
  message: string;
  constructor(public adminservice: AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addthea:Theatres):any{
    console.log(addthea);
     this.adminservice.addThea(addthea).subscribe(data => {
      this.message=data});
      this.router.navigate(['theatrelist']);
     }
    
   }