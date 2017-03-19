import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStudentsService } from './get-students.service';
@Component({
  selector: 'app-shuffler',
  templateUrl: './shuffler.component.html',
  styleUrls: ['./shuffler.component.css'],
  providers: [GetStudentsService]
})
export class ShufflerComponent implements OnInit {
  students = [];
  constructor( private studentsService: GetStudentsService) { }

  ngOnInit() {
    this.studentsService.fetchStudents()
      .then(result => {
        this.students = result.students
      });
  }

  shuffleStudents(){
    this.students = this.shuffle(this.students)
  }

  shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  }
}
