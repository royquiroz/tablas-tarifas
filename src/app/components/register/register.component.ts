import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  register(form: NgForm) {
    this._authService.register(form.value).subscribe((data: any) => {
      console.log(data);

      data.response
        ? this.openSnackBar(data.message, "Cerrar")
        : this.openSnackBar(data.response, "Cerrar");
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
