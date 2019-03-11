import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  constructor(private _authService: AuthService, private router: Router) {}

  navbarMenu: boolean = false;

  ngOnInit() {}

  logout() {
    this._authService.logout();
    this.router.navigate(["login"]);
  }

  isAuthenticated() {
    if (localStorage.getItem("currentUser")) {
      return true;
    }
    return false;
  }
}
