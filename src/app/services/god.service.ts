import { Injectable } from '@angular/core';

@Injectable()
export class GodService {
  user = {
    name: 'Anonym',
    teacher: false
  }

  constructor() { }

  login(name: string, teacher: boolean){
    if(name) this.user.name = name;
    if(teacher) this.user.teacher = teacher;
  }
}
