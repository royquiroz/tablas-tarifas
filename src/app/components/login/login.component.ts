import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router) {}
  msg: string;
  ok: boolean = true;

  ngOnInit() {
    this._authService.logout();
  }

  login(form: NgForm) {
    this._authService.login(form.value).subscribe(
      (data: any) => {
        if (data === true) {
          console.log("Ingresaste exitosamente", data);
          this.router.navigate(["home"]);
        }
      },
      (err: any) => {
        console.log(err);

        this.msg = err.message;
        this.ok = err.response;
      }
    );
  }

  notShow() {
    this.ok = !this.ok;
  }

  register() {
    this.router.navigate(["register"]);
  }
}
