import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  isTeacher: boolean = false;

  // constructor(private theLogin: GodService ) { }
  constructor() { }

    newUser = {};

  ngOnInit() {
  }

  addNewUser (user) {
    const newUser = {
      userName: user.userName,
      teacher: user.isTeacher,
    }

    console.log(newUser.userName);
    console.log(newUser.teacher);
    // this.theLogin.addNewUser(newUser.userName);
    // console.log(this.theLogin);
  }
}
