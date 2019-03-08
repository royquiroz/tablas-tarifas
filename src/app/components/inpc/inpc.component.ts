import { Component, OnInit } from "@angular/core";
import { TablasService } from "../../services/tablas.service";
import { LoginService } from "../../services/login.service";
import { Helpers } from "../../helpers/helpers";

@Component({
  selector: "app-inpc",
  templateUrl: "./inpc.component.html",
  styleUrls: ["./inpc.component.css"]
})
export class InpcComponent implements OnInit {
  meses = this.helpers.meses;
  info = this.helpers.informacion;

  requests: any[] = [];
  request: any = {};
  id_request: number;

  constructor(
    private tablas: TablasService,
    private login: LoginService,
    private helpers: Helpers
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.allRequests();
  }

  userFillForm() {
    this.login.getCheckToken().subscribe((data: any) => {
      console.log(data);
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      console.log(data);
      this.requests = data.result;
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
}
