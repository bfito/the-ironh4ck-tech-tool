import { Injectable } from '@angular/core';

@Injectable()
export class GodService {
  user = {
    name: '',
    teacher: false
  }

  constructor() { }

  login(name: string, teacher: boolean){
    this.user.name = name;
    this.user.teacher = teacher;
  }
}
