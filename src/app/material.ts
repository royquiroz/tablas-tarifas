import {
  MatButtonModule,
  MatStepperModule,
  MatSnackBarModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatStepperModule, MatSnackBarModule],
  exports: [MatButtonModule, MatStepperModule, MatSnackBarModule]
})
export class MaterialModule {}
