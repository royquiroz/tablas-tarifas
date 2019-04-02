import { Component, OnInit, Input } from "@angular/core";

import { TablasService } from "src/app/services/tablas.service";

@Component({
  selector: "app-cancels",
  templateUrl: "./cancels.component.html",
  styleUrls: ["./cancels.component.css"]
})
export class CancelsComponent implements OnInit {
  @Input() id: number;
  negations: any[] = [];

  constructor(private tablas: TablasService) {}

  ngOnInit() {
    this.getNegations();
  }

  getNegations() {
    this.tablas.getAllNegations(this.id).subscribe((data: any) => {
      this.negations = data.result;
      console.log(data);
    });
  }
}
