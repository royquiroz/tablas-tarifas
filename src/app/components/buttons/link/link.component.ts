import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";
import { Helpers } from "../../../helpers/helpers";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.css"]
})
export class LinkComponent {
  enlace = this.helpers.enlace;

  @Input() id_request: number;

  @Output() hasLink: EventEmitter<boolean>;

  constructor(
    private tablas: TablasService,
    private helpers: Helpers,
    private snackBar: MatSnackBar
  ) {
    this.hasLink = new EventEmitter();
  }

  newLink() {
    this.enlace.solicitude_id = this.id_request;
    this.tablas.postNewLink(this.enlace).subscribe((data: any) => {
      this.hasLink.emit(true);
      this.openSnackBar(data.message, "Cerrar");
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
