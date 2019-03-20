import {
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatSnackBarModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
