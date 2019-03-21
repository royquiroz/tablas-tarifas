import {
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
