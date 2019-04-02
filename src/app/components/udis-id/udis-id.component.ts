import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { TablasService } from "src/app/services/tablas.service";

import * as moment from "moment";
moment.locale("es");

@Component({
  selector: 'app-udis-id',
  templateUrl: './udis-id.component.html',
  styleUrls: ['./udis-id.component.css']
})
export class UdisIdComponent implements OnInit {
  id: number;
  request: any = {};
  loading: boolean = true;
  fecha: string;
  textoUDIS: string;
  isEditable: boolean = true;

  constructor(private route: ActivatedRoute, private tablas: TablasService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getRequest();
  }

  getRequest() {
    this.tablas.getIdRequest(this.id).subscribe((data: any) => {
      console.log(data.result[0]);

      this.request = data.result[0]
      this.fecha = moment(data.result[0].fecha_creacion).format("YYYY/MM/DD");
      this.textoUDIS = data.result[0].informacion;
      this.loading = false;
    });
  }

   editFields() {
    this.isEditable = !this.isEditable;
  }

}
