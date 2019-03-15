import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { TablasService } from "src/app/services/tablas.service";

@Component({
  selector: "app-inpc-id",
  templateUrl: "./inpc-id.component.html",
  styleUrls: ["./inpc-id.component.css"]
})
export class InpcIdComponent implements OnInit {
  id: any;
  request: any = {};
  info: any[] = [];
  links: any[] = [];

  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private tablas: TablasService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getRequest();
    this.getLinks();
  }

  getRequest() {
    this.tablas.getIdRequest(this.id).subscribe((data: any) => {
      this.request = data.result[0];
      this.info = JSON.parse(data.result[0].informacion);
      this.loading = false;
    });
  }

  revision() {
    let id = { solicitude_id: this.id };
    this.tablas.postRevision(id).subscribe((data: any) => {
      console.log(data);

      if (!data.response) {
        this.openSnackBar(data.message, "Cerrar");
      }
      this.getRequest();
    });
  }

  getLinks() {
    this.tablas.getAllLinks().subscribe((data: any) => {
      this.links = data.result.filter(
        (link: any) => link.solicitude_id === this.id
      );
      console.log(this.links);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
