import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private theLogin: GodService ) { }
    newStudent = {};
    
  ngOnInit() {
  }

  addNewUser (user) {
    const newUser = {
      userName: user.userName,
    }
    this.theLogin.addNewUser(newUser.userName);
    console.log(this.theLogin);
  }
}
