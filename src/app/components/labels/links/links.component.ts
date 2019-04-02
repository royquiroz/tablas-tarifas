import { Component, OnInit, Input } from "@angular/core";

import { TablasService } from "src/app/services/tablas.service";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.css"]
})
export class LinksComponent implements OnInit {
  @Input() id: number;
  links: any[] = [];

  constructor(private tablas: TablasService) {}

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.tablas.getLinksId(this.id).subscribe((data: any) => {
      console.log(data);

      data.result === null ? (this.links = []) : (this.links = data.result);
      console.log(this.links);
    });
  }
}
