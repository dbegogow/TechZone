import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.isOpen
      ? this.isOpen = false
      : this.isOpen = true;
  }
}
