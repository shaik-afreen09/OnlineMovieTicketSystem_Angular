import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public adminservice: AdminserviceService, public router: Router) { }

  ngOnInit(): void {
    this.adminservice.logOut();
    this.router.navigate(['adminlogin'])
  }

}
