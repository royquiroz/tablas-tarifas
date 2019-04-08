import {
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
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
    MatNativeDateModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ]
})
export class MaterialModule {}
