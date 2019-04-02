import { Component, Input } from "@angular/core";

import { TablasService } from "src/app/services/tablas.service";

@Component({
  selector: "app-cancel",
  templateUrl: "./cancel.component.html",
  styleUrls: ["./cancel.component.css"]
})
export class CancelComponent {
  @Input() id: number;

  negacion: any = {
    solicitude_id: "",
    descripcion: ""
  };

  constructor(private tablas: TablasService) {}

  negation() {
    this.negacion.solicitude_id = this.id;
    console.log(this.negacion);

    this.tablas.postNegation(this.negacion).subscribe((data: any) => {
      console.log(data);
    });
  }
}
