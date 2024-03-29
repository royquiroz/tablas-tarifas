import { Component, OnInit } from "@angular/core";
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
  info = this.helpers.inpc;
  enlace = this.helpers.enlace;

  request: any = {};
  id_request: number;

  isShowRequests: boolean = false;
  hasLink: boolean = false;

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private helpers: Helpers,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.info[0].where[0].valor = moment().format("YYYY");
    this.info[0].valores[0].nombre = `m0${moment().month()}`;
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
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
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
