import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SpareMovementComponent } from './spare-movement.component';
import { SpareMovementFormComponent } from './components/spare-movement-form/spare-movement-form.component';

@NgModule({
  declarations: [SpareMovementComponent, SpareMovementFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [SpareMovementComponent],
})
export class SpareMovementModule {}
