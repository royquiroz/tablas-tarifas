import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TablasService } from "src/app/services/tablas.service";

import * as moment from "moment";
moment.locale("es");

@Component({
  selector: "app-udis-id",
  templateUrl: "./udis-id.component.html",
  styleUrls: ["./udis-id.component.css"]
})
export class UdisIdComponent implements OnInit {
  id: number;
  request: any = {};
  info: any[] = [];

  loading: boolean = true;
  isEditable: boolean = true;

  constructor(private route: ActivatedRoute, private tablas: TablasService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getRequest();
  }

  getRequest() {
    this.tablas.getIdRequest(this.id).subscribe((data: any) => {
      console.log(data.result[0]);

      this.request = data.result[0];
      this.info = JSON.parse(data.result[0].informacion);
      this.loading = false;
    });
  }

  editFields() {
    this.isEditable = !this.isEditable;
  }
}
