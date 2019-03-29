import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "../../services/tablas.service";
import { AuthService } from "../../services/auth.service";

import * as moment from "moment";
moment.locale("es");

@Component({
  selector: "app-udis",
  templateUrl: "./udis.component.html",
  styleUrls: ["./udis.component.css"]
})
export class UdisComponent implements OnInit {
  request: any = {};

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.request.cat_solicitude_id = "5";
    this.request.fecha = moment(new Date()).format("YYYY/MM/DD");
    this.userFillForm();
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  newLoadUdis() {
    await this.limpiar();
    this.tablas.postUdis(this.request).subscribe((data: any) => {
      console.log(this.request);

      console.log(data);
      !data.response
        ? this.openSnackBar(data.message, "Cerrar")
        : this.openSnackBar(data.response, "Cerrar");
    });
  }

  limpiar() {
    this.request.textoUDIS = this.request.textoUDIS.replace(/\t/g, "\\t");
    this.request.textoUDIS = this.request.textoUDIS.replace(/\n/g, "\\n");
    this.request.textoUDIS = this.request.textoUDIS.replace(/"/g, "\\'");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
