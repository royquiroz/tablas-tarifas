import {
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {}
