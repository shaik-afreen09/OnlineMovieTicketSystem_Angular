import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Theatres } from 'src/app/adminservice.service';
@Component({
  selector: 'app-updatetheatre',
  templateUrl: './updatetheatre.component.html',
  styleUrls: ['./updatetheatre.component.css']
})
export class UpdatetheatreComponent implements OnInit {
  obj1: any;
  theatres: Theatres[];
  message: string;
  constructor(public adminservice: AdminserviceService, public router: Router) {
    this.obj1 = this.adminservice.updatetMethod();
  }
  onUpdatet(utheatre: Theatres): any {
    return this.adminservice.onUpdatet(utheatre).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}

