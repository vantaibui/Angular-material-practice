import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Model
import { User } from 'src/app/models/User';

// Service
import { AuthService } from 'src/app/apis/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public user!: User;

  public subscription: Subscription | undefined;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.user = new User();
  }

  onLogin(formUser: NgForm): void {
    const userLogin = formUser.value;
    this.subscription = this.authService
      .authenticate(userLogin.username, userLogin.password)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['home']);
          formUser.reset();
        },
        (error) => {
          this.router.navigateByUrl('abc');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
