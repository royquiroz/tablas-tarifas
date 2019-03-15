import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "../../services/tablas.service";
import { AuthService } from "../../services/auth.service";
import { Helpers } from "../../helpers/helpers";

import * as moment from "moment";
moment.locale("es");

@Component({
  selector: "app-inpc",
  templateUrl: "./inpc.component.html",
  styleUrls: ["./inpc.component.css"]
})
export class InpcComponent implements OnInit {
  meses = this.helpers.meses;
  info = this.helpers.informacion;
  enlace = this.helpers.enlace;

  requests: any[] = [];
  request: any = {};
  id_request: number = 64;

  isShowRequests: boolean = false;
  hasLink: boolean = false;

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private helpers: Helpers,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.allRequests();
    this.info[0].where[0].valor = moment().format("YYYY");
    this.info[0].valores[0].nombre = `m0${moment().month()}`;
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      this.requests = data.result.reverse();
    });
  }

  newRequest() {
    if (this.info[0].valores[0].valor > 0) {
      this.request.informacion = JSON.stringify(this.info);
      this.request.cat_solicitude_id = 4;
      this.tablas.postNewRequest(this.request).subscribe((data: any) => {
        this.id_request = parseInt(data.result);
      });
    } else {
      this.openSnackBar("El valor del inpc no puede ser 0", "Cerrar");
    }
    this.allRequests();
  }

  newLink() {
    this.enlace.solicitude_id = this.id_request;
    this.tablas.postNewLink(this.enlace).subscribe((data: any) => {
      console.log(data);
      this.hasLink = data.response;
      this.openSnackBar(data.message, "Cerrar");
    });
  }

  catchRequest(req: any) {
    this.router.navigate([`inpc/${req.solicitude_id}`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
