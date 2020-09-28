import { Component, OnInit } from '@angular/core';
import { Cities, AdminserviceService } from 'src/app/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
  message: string;
  constructor(public adminservice: AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addcit:Cities):any{
    console.log(addcit);
     this.adminservice.addCit(addcit).subscribe(data => {
      this.message=data});
      this.router.navigate(['citylist']);
     }
    
   }
