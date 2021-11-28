import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Model
import { User } from 'src/app/models/User';

// Service
import { AuthService } from 'src/app/apis/auth/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public user!: User;

  public formRegister!: FormGroup;

  public subscription!: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.createForm();
  }

  createForm(): void {
    this.formRegister = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }

  onRegister(): void {
    const userRegister = this.formRegister.value;

    this.user.username = userRegister.username;
    this.user.password = userRegister.password;
    this.user.firstName = userRegister.firstName;
    this.user.lastName = userRegister.lastName;
    this.user.email = userRegister.email;
    this.user.avatar = userRegister.avatar;
    this.user.gender = userRegister.gender;
    this.user.phone = userRegister.phone;
    this.user.birthday = userRegister.birthday;

    this.subscription = this.authService.register(this.user).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('login');
        this.formRegister.reset();
      },
      (error) => {
        console.log(error);
        this.router.navigateByUrl('register');
      }
    );
  }
}
