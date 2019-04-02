import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent {
  @Output() isEditable: EventEmitter<boolean>;

  constructor() {
    this.isEditable = new EventEmitter();
  }
}
