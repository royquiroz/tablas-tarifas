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
  id_request: number;

  hasLink: boolean = false;

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

  async newLoadUdis() {
    await this.limpiar();
    this.tablas.postNewRequest(this.request).subscribe((data: any) => {
      console.log(data);

      this.id_request = parseInt(data.result);
      !data.response
        ? this.openSnackBar(data.message, "Cerrar")
        : this.openSnackBar(data.response, "Cerrar");
    });
  }

  limpiar() {
    let datos;
    datos = this.request.textoUDIS.replace(/\t/g, "\\t");
    datos = this.request.textoUDIS.replace(/\n/g, "\\n");
    datos = this.request.textoUDIS.replace(/"/g, "\\'");
    this.request.datos = datos
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
