import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";

@Component({
  selector: "app-advance",
  templateUrl: "./advance.component.html",
  styleUrls: ["./advance.component.css"]
})
export class AdvanceComponent {
  @Input() id: number;

  @Output() updateData: EventEmitter<boolean>;

  constructor(private tablas: TablasService, private snackBar: MatSnackBar) {
    this.updateData = new EventEmitter();
  }

  revision() {
    let id = { solicitude_id: this.id };
    this.tablas.postRevision(id).subscribe((data: any) => {
      console.log(data);

      if (!data.response) {
        this.openSnackBar(data.message, "Cerrar");
      }
      this.updateData.emit(true);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
