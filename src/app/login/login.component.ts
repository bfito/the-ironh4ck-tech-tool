import { Component, OnInit } from '@angular/core';
import { GodService } from '../services/god.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GodService]
})
export class LoginComponent implements OnInit {

  newUser = {};

  constructor(private theGodService: GodService ) { }

  ngOnInit() {}

  login (newUser) {
    this.theGodService.login(newUser.name, newUser.teacher);
    console.log(this.theGodService.user);

  }
}
