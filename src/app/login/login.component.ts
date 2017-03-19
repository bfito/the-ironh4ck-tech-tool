import { Component, OnInit } from '@angular/core';
import { GodService } from '../services/god.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GodService]
})
export class LoginComponent implements OnInit {
  name: string = '';
  teacher: boolean = false;

  constructor(private theGodService: GodService ) { }

    newUser = {};

  ngOnInit() {
  }

  login (user) {
    const newUser = {
      name: user.name,
      teacher: user.teacher,
    }

    this.theGodService.login(newUser.name, newUser.teacher);
    console.log(this.theGodService);
    console.log(newUser.name);
    console.log(newUser.teacher);
  }
}
