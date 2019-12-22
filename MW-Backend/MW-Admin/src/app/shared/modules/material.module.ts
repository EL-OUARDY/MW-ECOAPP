import { NgModule } from "@angular/core";
import { MatSelectModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatRippleModule } from '@angular/material';
import { CdkTableModule } from "@angular/cdk/table";

const materials = [
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  CdkTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRippleModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule {}
