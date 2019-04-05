import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";
import { AuthService } from "src/app/services/auth.service";
import { Helpers } from "../../helpers/helpers";

import * as moment from "moment";
moment.locale("es");

@Component({
  selector: "app-recargos",
  templateUrl: "./recargos.component.html",
  styleUrls: ["./recargos.component.css"]
})
export class RecargosComponent implements OnInit {
  meses = this.helpers.meses;
  info = this.helpers.recargos;

  request: any = {};

  id_request: number;
  hasLink: boolean = false;

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private helpers: Helpers,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.info.parametros[0].anio = moment().year();
    this.info.parametros[1].mes = moment()
      .month()
      .toString();
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  newRequest() {
    this.request.informacion = JSON.stringify(this.info);
    this.request.cat_solicitude_id = 6;
    this.tablas.postNewRequest(this.request).subscribe((data: any) => {
      this.id_request = parseInt(data.result);
      !data.response
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
