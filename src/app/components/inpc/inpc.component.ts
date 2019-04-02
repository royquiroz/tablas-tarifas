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
  tabs = this.helpers.tabs;
  info = this.helpers.informacion;
  enlace = this.helpers.enlace;

  requests: any[] = [];
  request: any = {};
  id_request: number;

  isShowRequests: boolean = false;
  hasLink: boolean = false;
  loadingList: boolean = false;

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private helpers: Helpers,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.requestsForStatus("1");
    //this.allRequests();
    this.info[0].where[0].valor = moment().format("YYYY");
    this.info[0].valores[0].nombre = `m0${moment().month()}`;
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  requestsForStatus(status: string) {
    console.log("se ests ejecutando", status);
    this.loadingList = true;

    this.tablas.getRequestForStatus(status).subscribe((data: any) => {
      this.requests = data.result.reverse();
      console.log(this.requests);
      this.loadingList = false;
    });
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      this.requests = data.result.reverse();
      console.log(this.requests);
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
    this.requestsForStatus("1");
  }

  catchRequest(req: any) {
    console.log(req.cat_solicitude_id);
    const requestId = parseInt(req.cat_solicitude_id)
    
    requestId === 4 ? this.router.navigate([`inpc/${req.solicitude_id}`]) : this.router.navigate([`udis/${req.solicitude_id}`]); 

    //this.router.navigate([`inpc/${req.solicitude_id}`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
