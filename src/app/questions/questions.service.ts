import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionsService {

  constructor(private myHttp: Http) { }

  getQuestion() {
    return this.myHttp.get('https://the-ironh4ck-tool-api.herokuapp.com/questions')
      .toPromise()
      .then(result => result.json())
  }
}
