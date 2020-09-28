import { Component, OnInit } from '@angular/core';
import { AdminserviceService, Cities } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  message: string;
  cities: Cities[];
  constructor(public adminservice: AdminserviceService, public router: Router) {
  }
  ngOnInit(): any {
    this.adminservice.getCities().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.cities = response;
  }
  update(updatecity: Cities) {
    this.adminservice.update(updatecity);
    this.router.navigate(['/updatecity']); //updating the city
  }
  delete(deletecity: Cities): any {
    this.adminservice.delete(deletecity.sno).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/citylist']);
  }
}

