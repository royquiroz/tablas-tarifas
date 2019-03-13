import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
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
  loading: boolean = true;

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

  revision() {
    let id = { solicitude_id: this.id };
    this.tablas.postRevision(id).subscribe((data: any) => {
      console.log(data);
      this.getRequest();
    });
  }
}
