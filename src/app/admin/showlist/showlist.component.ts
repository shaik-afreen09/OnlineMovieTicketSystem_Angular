import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Shows } from 'src/app/adminservice.service';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  message: string;
  shows: Shows[];
  constructor(public adminservice: AdminserviceService, public router: Router) {
  }
  ngOnInit(): any {
    this.adminservice.getShows().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.shows = response;
  }
  updates(updateshow: Shows) {
    console.log("update showwww");
    this.adminservice.updates(updateshow);
    this.router.navigate(['/updateshow']); //updating the show
  }
  deletes(deleteshow: Shows): any {
    this.adminservice.deletes(deleteshow.sno).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/showlist']);
  }
}


