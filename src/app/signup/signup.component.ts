import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MovieServiceService, Accounts } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{3,15}$";
  pwdPattern ="(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,14}";
 mobnumPattern ="^[6-9]\\d{9}$"; 
  emailPattern ="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  //isValidFormSubmitted = null;
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    userPhoneno: ['',[Validators.required, Validators.pattern(this.mobnumPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });


  message:string;
  
constructor(private formBuilder:FormBuilder,public movieservice: MovieServiceService,private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit(adduser:Accounts):any{
    console.log(adduser);
     this.movieservice.addUser(adduser).subscribe(data => {
      this.message=data});
      this.router.navigate(['Book-ticket']);
     }

}
