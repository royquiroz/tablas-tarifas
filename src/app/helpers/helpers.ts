import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Helpers {
  meses: any[] = [
    {
      name: "Enero",
      valor: "m01",
      indice: 0
    },
    {
      name: "Febrero",
      valor: "m02",
      indice: 1
    },
    {
      name: "Marzo",
      valor: "m03",
      indice: 2
    },
    {
      name: "Abril",
      valor: "m04",
      indice: 3
    },
    {
      name: "Mayo",
      valor: "m05",
      indice: 4
    },
    {
      name: "Junio",
      valor: "m06",
      indice: 5
    },
    {
      name: "Julio",
      valor: "m07",
      indice: 6
    },
    {
      name: "Agosto",
      valor: "m08",
      indice: 7
    },
    {
      name: "Septiembre",
      valor: "m09",
      indice: 8
    },
    {
      name: "Octubre",
      valor: "m10",
      indice: 9
    },
    {
      name: "Noviembre",
      valor: "m11",
      indice: 10
    },
    {
      name: "Diciembre",
      valor: "m12",
      indice: 11
    }
  ];

  inpc: any[] = [
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

  tabs: any[] = [
    {
      label: "Nuevas",
      value: "1"
    },
    {
      label: "Pendientes Revision 1",
      value: "2"
    },
    {
      label: "Pendientes Revision 2",
      value: "3"
    },
    {
      label: "Aprobadas",
      value: "4"
    }
  ];

  recargos: any = {
    parametros: [
      {
        anio: 0
      },
      {
        mes: 0
      },
      {
        meses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      {
        recargos: [
          {
            entidad: 22,
            mora: 1.13,
            plazo: 0
          },
          {
            entidad: 16,
            mora: 1.13,
            plazo: 0
          },
          {
            entidad: 15,
            mora: 1.85,
            plazo: 0
          },
          {
            entidad: 33,
            mora: 1.47,
            plazo: 0.98
          },
          {
            entidad: 7,
            mora: 0,
            plazo: 0
          },
          {
            entidad: 9,
            mora: 0,
            plazo: 0
          }
        ]
      }
    ]
  };
}
