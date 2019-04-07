import { Component, OnInit, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: number;
  request: any = {};

  @Input() data: any = [];
  @Input() info: any = {};

  constructor(
    private tablas: TablasService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userFillForm();
    this.id = this.info.solicitude_id;
    this.request.cat_estatus_solicitu_id = this.data.cat_estatus_solicitu_id;
    console.log(this.info);
  }

  userFillForm() {
    this.auth.getCheckToken().subscribe((data: any) => {
      this.request.usuario_id_responsable = parseInt(data.usuario_id);
    });
  }

  editRequest() {
    this.request.informacion = JSON.stringify(this.info);
    console.log(this.data);
    console.log(this.request);
    this.tablas.updateRequest(this.id, this.request).subscribe((data: any) => {
      console.log(data);

      !data.response
        ? this.openSnackBar(data.message, "Cerrar")
        : this.openSnackBar(data.response, "Cerrar");
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
