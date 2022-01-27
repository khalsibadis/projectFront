import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthServiceService} from './auth-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authservice: AuthServiceService,
              private router: Router) {}
              // @ts-ignore
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ): Observable<boolean> | Promise<boolean>| boolean {
    if (this.authservice.IsAuth) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
