import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetStudentsService {

  constructor(private theHttp: Http) {}


    fetchStudents() {
      return this.theHttp.get('https://the-ironh4ck-tool-api.herokuapp.com/students')
      .toPromise()
      .then(result => result.json());
    }





}
