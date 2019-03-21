import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";
import { Helpers } from "../../helpers/helpers";
import * as moment from "moment";
moment.locale("es");

@Component({
  selector: "app-inpc-id",
  templateUrl: "./inpc-id.component.html",
  styleUrls: ["./inpc-id.component.css"]
})
export class InpcIdComponent implements OnInit {
  meses = this.helpers.meses;
  id: any;
  request: any = {};
  info: any[] = [];
  links: any[] = [];
  negations: any[] = [];

  negacion: any = {
    solicitude_id: "",
    descripcion: ""
  };

  isEditable: boolean = true;

  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private tablas: TablasService,
    private snackBar: MatSnackBar,
    private helpers: Helpers
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getRequest();
    this.getLinks();
    this.getNegations();
  }

  getRequest() {
    this.tablas.getIdRequest(this.id).subscribe((data: any) => {
      this.request = data.result[0];
      this.info = JSON.parse(data.result[0].informacion);
      this.loading = false;
    });
  }

  revision() {
    let id = { solicitude_id: this.id };
    this.tablas.postRevision(id).subscribe((data: any) => {
      console.log(data);

      if (!data.response) {
        this.openSnackBar(data.message, "Cerrar");
      }
      this.getRequest();
    });
  }

  getLinks() {
    this.tablas.getLinksId(this.id).subscribe((data: any) => {
      console.log(data);

      data.result === null ? (this.links = []) : (this.links = data.result);
      console.log(this.links);
    });
  }

  negation() {
    this.negacion.solicitude_id = this.id;
    console.log(this.negacion);

    this.tablas.postNegation(this.negacion).subscribe((data: any) => {
      console.log(data);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  editFields() {
    this.isEditable = !this.isEditable;
  }

  getNegations() {
    this.tablas.getAllNegations(this.id).subscribe((data: any) => {
      this.negations = data.result;
      console.log(data);
    });
  }
}
