import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Theatres } from 'src/app/adminservice.service';
@Component({
  selector: 'app-theatrelist',
  templateUrl: './theatrelist.component.html',
  styleUrls: ['./theatrelist.component.css']
})
export class TheatrelistComponent implements OnInit {
  message: string;
  theatres: Theatres[];
  constructor(public adminservice: AdminserviceService, public router: Router) {
  }
  ngOnInit(): any {
    this.adminservice.getTheatres().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.theatres = response;
  }
  updatet(updatetheatre: Theatres) {
    console.log("update theatre");
    this.adminservice.updatet(updatetheatre);
    this.router.navigate(['/updatetheatre']); //updating the theatre
  }
  deletet(deletetheatre: Theatres): any {
    this.adminservice.deletet(deletetheatre.theatreId).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/theatrelist']);
  }
}


