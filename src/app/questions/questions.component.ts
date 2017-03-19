import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {

  questions = [];

  // questions: Array<Object> = [];
  // questions: Promise<string>;

  constructor(
    private router: Router,
    private theQuestion: QuestionsService
  ) {}

  ngOnInit() {
    // This is to refresh site for random joke
    this.getTheQuestion()
  }

  getTheQuestion() {
    this.theQuestion.getQuestion()
    .then((result) => {
        this.questions = result.questions;
      console.log(result);
      console.log(result.questions.message)

      // none of the following console.logs or "call backs" are working/
      // this.questions = result.value.questions;
      // console.log(getQuestion.theQuestion);

      // this.questions = this.theQuestion.getQuestion;

      // The following is not working. console.log(result) is returning somethig.
      // console.log(result.value.questions);
      // this.questions = result.value.questions;
    })
    .catch((err) => {
      console.log('Question Error');
      console.log(err);
      // The following error message was stating the questions could not be assigned to an array.
      // this.questions = 'There was an error. Try again later.';
    });

  }
}
