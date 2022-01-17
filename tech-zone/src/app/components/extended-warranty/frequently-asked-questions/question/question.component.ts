import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from '../../../../interfaces/questions/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  isOpen = false;
  @Input() question: IQuestion;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.isOpen
      ? this.isOpen = false
      : this.isOpen = true;
  }
}
