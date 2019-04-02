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
  }

  getRequest() {
    this.tablas.getIdRequest(this.id).subscribe((data: any) => {
      this.request = data.result[0];
      this.info = JSON.parse(data.result[0].informacion);
      this.loading = false;
    });
  }

  editFields() {
    this.isEditable = !this.isEditable;
  }
}
