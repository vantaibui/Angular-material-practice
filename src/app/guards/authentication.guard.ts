import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  public user!: User;

  constructor(public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.user.role === 'admin') {
      this.router.navigate(['admin']);
      return true;
    } else if (this.user.role === 'user') {
      this.router.navigateByUrl('home');
      return true;
    } else {
      return false;
    }
  }
}
