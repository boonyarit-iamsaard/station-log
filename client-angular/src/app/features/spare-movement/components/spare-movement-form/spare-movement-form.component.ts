import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit, OnChanges {
  spareMovementForm: FormGroup;

  airlines: string[] = ['ASL', 'CX', 'LD', 'PR'];
  types: string[] = ['Consumable', 'Return', 'Fluid'];
  stores: string[] = ['BKK', 'BKK306'];
  names: string[] = ['Boonyarit', 'Theerapong', 'Totsapon'];

  onSubmit() {
    console.log(this.spareMovementForm.value);
    // this.spareMovementForm.reset();
  }

  setPrefix(value: string) {
    switch (value) {
      case 'ASL':
        this.spareMovementForm.controls['acreg'].patchValue('EI-');
        break;
      case 'PR':
        this.spareMovementForm.controls['acreg'].patchValue('RP-C');
        break;
      default:
        this.spareMovementForm.controls['acreg'].patchValue('B-');
    }
  }

  onGrnInvalid() {
    if (this.spareMovementForm.controls['grn'].hasError('required')) {
      return 'GRN is required.';
    }
    return this.spareMovementForm.controls['grn'].hasError('minlength')
      ? 'GRN must contain 10 digits.'
      : null;
  }

  onQtyInvalid() {
    if (this.spareMovementForm.controls['qty'].hasError('required')) {
      return 'Qty is required.';
    }
    return this.spareMovementForm.controls['qty'].hasError('min')
      ? 'Qty must not be 0.'
      : null;
  }

  constructor() {}

  ngOnInit(): void {
    this.spareMovementForm = new FormGroup({
      date: new FormControl(new Date()),
      airline: new FormControl(this.airlines[1]),
      fltno: new FormControl(null, Validators.required),
      acreg: new FormControl('B-', Validators.required),
      part: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),
      type: new FormControl(this.types[0]),
      serial: new FormControl('NIL', Validators.required),
      grn: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      qty: new FormControl(0, [Validators.required, Validators.min(1)]),
      store: new FormControl(this.stores[0]),
      usedBy: new FormControl(null, Validators.required),
    });
    this.spareMovementForm.controls['airline'].valueChanges.subscribe(
      (value) => {
        console.log(value);
        this.setPrefix(value);
      }
    );
  }

  ngOnChanges(): void {}
}
