import { Component, OnInit } from "@angular/core";
import { TablasService } from "../../services/tablas.service";

@Component({
  selector: "app-inpc",
  templateUrl: "./inpc.component.html",
  styleUrls: ["./inpc.component.css"]
})
export class InpcComponent implements OnInit {
  requests: any[] = [];
  request: any[] = [
    {
      tipo: "update",
      tabla: "tinpc",
      valores: [
        {
          nombre: "m02",
          valor: 120.6
        }
      ],
      where: [
        {
          nombre: "ano",
          valor: 2019
        },
        {
          nombre: "dof",
          valor: "2018-09-10"
        }
      ]
    }
  ];
  meses: any[] = [
    {
      name: "Enero",
      valor: "m01"
    },
    {
      name: "Febrero",
      valor: "m02"
    },
    {
      name: "Marzo",
      valor: "m03"
    },
    {
      name: "Abril",
      valor: "m04"
    },
    {
      name: "Mayo",
      valor: "m05"
    },
    {
      name: "Junio",
      valor: "m06"
    },
    {
      name: "Julio",
      valor: "m07"
    },
    {
      name: "Agosto",
      valor: "m08"
    },
    {
      name: "Septiembre",
      valor: "m09"
    },
    {
      name: "Octubre",
      valor: "m10"
    },
    {
      name: "Noviembre",
      valor: "m11"
    },
    {
      name: "Diciembre",
      valor: "m12"
    }
  ];

  constructor(private tablas: TablasService) {}

  ngOnInit() {
    this.allRequests();
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      console.log(data);
      this.requests = data.result;
    });
  }
}
