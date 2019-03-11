import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Helpers {
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

  informacion: any[] = [
    {
      tipo: "update",
      tabla: "tinpc",
      valores: [
        {
          nombre: "",
          valor: 0
        }
      ],
      where: [
        {
          nombre: "ano",
          valor: 0
        },
        {
          nombre: "dof",
          valor: "2018-09-10"
        }
      ]
    }
  ];

  enlace: any = {
    solicitude_id: "",
    enlace: "",
    file: "",
    tipo: "link",
    descripcion: ""
  };
}
