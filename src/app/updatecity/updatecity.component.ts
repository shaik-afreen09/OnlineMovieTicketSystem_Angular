import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Cities } from '../adminservice.service';

@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.css']
})
export class UpdatecityComponent implements OnInit {
  obj1: any;
  cities: Cities[];
  message: string;
  constructor(public adminservice: AdminserviceService, public router: Router) {
    this.obj1 = this.adminservice.updateMethod();
  }
  onUpdate(ucity: Cities): any {
    return this.adminservice.onUpdate(ucity).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}
