import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    let token = window.localStorage.getItem('login');

    if (token!="1") {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}