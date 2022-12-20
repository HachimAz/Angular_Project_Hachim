import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //if (this.userService.getLogin()) return true;
    //this.router.navigateByUrl('login');

    if (localStorage.getItem('token')) {
      return this.userService.isLoggedIn().pipe(
        tap((val: boolean) => {
          if (!val) {
            this.router.navigateByUrl('login');
          }
        })
      );
    } else {
      this.router.navigateByUrl('login');
      return of(false);
    }
  }
}
