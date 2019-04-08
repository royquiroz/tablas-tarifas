import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TablasService } from "../../services/tablas.service";
import { Helpers } from "../../helpers/helpers";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  tabs = this.helpers.tabs;

  requests: any[] = [];
  loadingList: boolean = false;

  constructor(
    private tablas: TablasService,
    private router: Router,
    private helpers: Helpers
  ) {}

  ngOnInit() {
    this.requestsForStatus("1");
  }

  allRequests() {
    this.tablas.getAllRequest().subscribe((data: any) => {
      this.requests = data.result.reverse();
      console.log(this.requests);
    });
  }

  requestsForStatus(status: string) {
    console.log("se ests ejecutando", status);
    this.loadingList = true;

    this.tablas.getRequestForStatus(status).subscribe((data: any) => {
      this.requests = data.result.reverse();
      console.log(this.requests);
      this.loadingList = false;
    });
  }

  catchRequest(req: any) {
    console.log(req.cat_solicitude_id);
    const requestId = parseInt(req.cat_solicitude_id);

    if (requestId === 4) {
      this.router.navigate([`inpc/${req.solicitude_id}`]);
    } else if (requestId === 5) {
      this.router.navigate([`udis/${req.solicitude_id}`]);
    } else {
      this.router.navigate([`recargos/${req.solicitude_id}`]);
    }
  }
}
