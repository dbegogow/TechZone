import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { httpOptions } from '../http-options';
import { Question } from '../../interfaces/questions/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient,
    private url = environment.apiUrl) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }
}
