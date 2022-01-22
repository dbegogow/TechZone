import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  remember: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Error');
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
      remember: this.remember
    }

    // this.authService
    //   .register(user)
    //   .subscribe(() => {
        
    //   });

    this.router.navigate(['home']);
  }
}
