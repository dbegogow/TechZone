import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { httpOptions } from '../http-options';
import { IQuestion } from '../../interfaces/questions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}api/questions`;
  }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.apiUrl);
  }
}
