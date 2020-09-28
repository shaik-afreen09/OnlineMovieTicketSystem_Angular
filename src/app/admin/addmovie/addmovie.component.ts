import { Component, OnInit } from '@angular/core';
import { Movies, AdminserviceService } from 'src/app/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  message: string;
  constructor(public adminservice: AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addmov:Movies):any{
    console.log(addmov);
     this.adminservice.addMov(addmov).subscribe(data => {
      this.message=data});
      this.router.navigate(['movielist']);
     }
    
   }
