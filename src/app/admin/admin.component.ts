import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Cities} from '../adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message: string;
  constructor(public adminservice: AdminserviceService,private router: Router) { }
  ngOnInit(): void {
  }
}
