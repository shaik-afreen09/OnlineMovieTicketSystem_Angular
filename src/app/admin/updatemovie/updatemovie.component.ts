import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Movies } from 'src/app/adminservice.service';
@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
  obj1: any;
  movies: Movies[];
  message: string;
  constructor(public adminservice: AdminserviceService, public router: Router) {
    this.obj1 = this.adminservice.updatemMethod();
  }
  onUpdatem(umovie: Movies): any {
    return this.adminservice.onUpdatem(umovie).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}

