import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  updatecity: Cities;
  updatemovie: Movies;
  updatetheatre: Theatres;
  updateshow: Shows;
  constructor(private httpService: HttpClient) { }
  public admin(uname:string, pass:string){
    return this.httpService.get("http://localhost:5454/admin/admin-validation/"+uname+"/"+pass,{responseType:'json'});
  }

  logOut() {
    sessionStorage.removeItem('uname')
  }
  public getCities() {
    console.log("ins service get cities");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Cities>("http://localhost:5454/admin/cityList");
  }

  public addCit(addcit: Cities) {
    console.log("ins service add");
    console.log(addcit);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:5454/admin/addcity", addcit,  { headers, responseType: 'text'});
  }
  
  public update(updatecity: Cities) {
    this.updatecity = updatecity;
  }
  public updateMethod() {
    return this.updatecity;
  }
  public onUpdate(updatcit: Cities) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:5454/admin/update_cities", updatcit,  { headers, responseType: 'text'});
  }
  delete(sno: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:5454/admin/removeCity/" + sno,  { headers, responseType: 'text'});
  }
  //movies
  public getMovies() {
    console.log("ins service get movies");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Movies>("http://localhost:5454/admin/moviesList");
  }

  public addMov(addmov: Movies) {
    console.log("ins service add");
    console.log(addmov);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:5454/admin/addmovie", addmov,  { headers, responseType: 'text'});
  }
  
  public updatem(updatemovie: Movies) {
    this.updatemovie = updatemovie;
  }
  public updatemMethod() {
    return this.updatemovie;
  }
  public onUpdatem(updatmov: Movies) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:5454/admin/update_movies", updatmov,  { headers, responseType: 'text'});
  }
  deletem(movie_id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:5454/admin/removeMovie/" + movie_id,  { headers, responseType: 'text'});
  }
//theatre
public getTheatres() {
  console.log("ins service get theatres");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Theatres>("http://localhost:5454/admin/theatreList");
}

public addThea(addthea: Theatres) {
  console.log("ins service add");
  console.log(addthea);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:5454/admin/addtheatre", addthea,  { headers, responseType: 'text'});
}
public updatet(updatetheatre: Theatres) {
  this.updatetheatre = updatetheatre;
}
public updatetMethod() {
  return this.updatetheatre;
}
public onUpdatet(updatthea: Theatres) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:5454/admin/update_theatres", updatthea,  { headers, responseType: 'text'});
}
deletet(theatre_id: number) {
  console.log("ins service delete");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.delete("http://localhost:5454/admin/removeTheatre/" + theatre_id,  { headers, responseType: 'text'});
}
//shows
public getShows() {
  console.log("ins service get shows");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Shows>("http://localhost:5454/admin/showsList");
}

public addSho(addsho: Shows) {
  console.log("ins service add");
  console.log(addsho);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:5454/admin/addshow", addsho,  { headers, responseType: 'text'});
}
public updates(updateshow: Shows) {
  this.updateshow = updateshow;
}
public updatesMethod() {
  return this.updateshow;
}
public onUpdates(updatesho: Shows) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:5454/admin/update_shows", updatesho,  { headers, responseType: 'text'});
}
deletes(sno: number) {
  console.log("ins service delete");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.delete("http://localhost:5454/admin/removeShow/" + sno,  { headers, responseType: 'text'});
}
}
export class Cities {
  sno: number;
  cityId: number;
  cityNames: string;
}
export class Movies {
  movieId: number;
  theatres: string;
  movie: string;
}
export class Theatres {
  theatreId: number;
  cityName: string;
  theatreName: string;
}
export class Shows {
  sno: number;
  timings: string;
  show: string;
}