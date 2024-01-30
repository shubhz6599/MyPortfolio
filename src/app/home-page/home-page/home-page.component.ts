import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  name:any="";
  email:any="";
  subject:any="";
  Message:any="";
  ngOnInit(): void {
  }
  showPopup(val:any){
    window.alert("Sorry! No Link Available For " + val + " Account");

  }
  getUserDetails(){
    if (this.name == "" || this.name == null || this.name == undefined) {

      window.alert("Please Enter Your Name To Proceed");
    }
    else if (this.email == "" || this.email == null || this.email == undefined) {

      window.alert("Please Enter Your Email To Proceed");
    }
    else if (this.subject == "" || this.subject == null || this.subject == undefined) {

      window.alert("Please Enter  Subject To Proceed");
    }
    else if (this.Message == "" || this.Message == null || this.Message == undefined) {

      window.alert("Please Enter Message To Proceed");
    }
    else{
      window.alert("Thank You " + this.name + " Will reach You Soon." );

    }
  }
}
