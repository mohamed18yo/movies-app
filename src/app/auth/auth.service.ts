import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
export interface authData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  staticUser = { email: 'test@gmail.com', password: '123456+' };
  IsAuth = new Subject<boolean>();
  auth = false;
  constructor(private router: Router) {}

  login(data: authData) {
    const user: authData = {
      email: data.email,
      password: data.password,
    };
    if (
      user.email === this.staticUser.email &&
      user.password === this.staticUser.password
    ) {
      this.auth = true;
      this.IsAuth.next(true);
      this.router.navigate(['movies']);
    }
  }
  isAuth() {
    return this.auth;
  }
}
