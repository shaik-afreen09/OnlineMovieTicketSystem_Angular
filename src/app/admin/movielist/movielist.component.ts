
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService, Movies} from 'src/app/adminservice.service';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  message: string;
  movies: Movies[];
  constructor(public adminservice: AdminserviceService, public router: Router) {
  }
  ngOnInit(): any {
    this.adminservice.getMovies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.movies = response;
  }
  updatem(updatemovie: Movies) {
    console.log("update movie");
    this.adminservice.updatem(updatemovie);
    this.router.navigate(['/updatemovie']); //updating the movie
  }
  deletem(deletemovie: Movies): any {
    this.adminservice.deletem(deletemovie.movieId).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/movielist']);
  }
}


