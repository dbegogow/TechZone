import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { httpOptions } from '../http-options';
import { IUserLogin } from '../../interfaces/auth/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}api/auth`;
  }

  register(user: IUserLogin): Observable<IUserLogin> {
    return this.http.post<IUserLogin>(`${this.apiUrl}/register`, user, httpOptions);
  }
}
