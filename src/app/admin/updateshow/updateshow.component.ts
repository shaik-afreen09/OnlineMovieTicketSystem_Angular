import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Shows } from 'src/app/adminservice.service';
@Component({
  selector: 'app-updateshow',
  templateUrl: './updateshow.component.html',
  styleUrls: ['./updateshow.component.css']
})
export class UpdateshowComponent implements OnInit {
  obj1: any;
  shows: Shows[];
  message: string;
  constructor(public adminservice: AdminserviceService, public router: Router) {
    this.obj1 = this.adminservice.updatesMethod();
  }
  onUpdates(ushow: Shows): any {
    return this.adminservice.onUpdates(ushow).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}

/*import { Component, OnInit } from '@angular/core';
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
*/
