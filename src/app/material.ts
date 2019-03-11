import {
  MatButtonModule,
  MatStepperModule,
  MatTabsModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatStepperModule, MatTabsModule],
  exports: [MatButtonModule, MatStepperModule, MatTabsModule]
})
export class MaterialModule {}
