import { Component, OnInit } from '@angular/core'; 4
import { QuestionsService } from '../../../services/questions/questions.service';
import { IQuestion } from '../../../interfaces/questions/question';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  questions: IQuestion[] = [];
  showLoader: boolean = true;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService
      .getQuestions()
      .subscribe((questions) => {
        this.questions = questions;
        this.showLoader = false;
      });
  }
}
