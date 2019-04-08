import {
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
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
    MatCardModule
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
    MatCardModule
  ]
})
export class MaterialModule {}
