import { Component, OnInit } from "@angular/core";
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
  id_request: number = 63;

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private helpers: Helpers
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.allRequests();
    this.info[0].where[0].valor = moment().format("YYYY");
    this.info[0].valores[0].nombre = `m0${moment().month()}`;
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      console.log(data);
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      console.log(data);
      this.requests = data.result.reverse();
    });
  }

  newRequest() {
    this.request.informacion = JSON.stringify(this.info);
    this.request.cat_solicitude_id = 4;
    console.log(this.request);
    this.tablas.postNewRequest(this.request).subscribe((data: any) => {
      console.log("Informacion enviada");
      console.log(data);
      this.id_request = parseInt(data.result);
    });
  }

  newLink() {
    this.enlace.solicitude_id = this.id_request;
    console.log(this.enlace);
    this.tablas.postNewLink(this.enlace).subscribe((data: any) => {
      console.log("Enlace enviado");
      console.log(data);
    });
  }

  catchRequest(request: any) {
    console.log(JSON.parse(request.informacion));
    this.id_request = request.solicitude_id;
    this.info = JSON.parse(request.informacion);
  }
}
