import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material/material.module';
import { SpareMovementComponent } from './spare-movement.component';
import { SpareMovementFormComponent } from './components/spare-movement-form/spare-movement-form.component';

@NgModule({
  declarations: [SpareMovementComponent, SpareMovementFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [SpareMovementComponent],
})
export class SpareMovementModule {}
