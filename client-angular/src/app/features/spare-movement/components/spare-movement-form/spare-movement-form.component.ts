import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit {
  spareMovementForm: FormGroup;

  airlines: string[] = ['ASL', 'CX', 'LD', 'PR'];
  types: string[] = ['Consumable', 'Return', 'Fluid'];
  stores: string[] = ['BKK', 'BKK306'];
  names: string[] = ['Boonyarit', 'Theerapong', 'Totsapon'];

  get acreg(): AbstractControl {
    return this.spareMovementForm.controls.acreg;
  }
  get airline(): AbstractControl {
    return this.spareMovementForm.controls.airline;
  }
  get grn(): AbstractControl {
    return this.spareMovementForm.controls.grn;
  }
  get qty(): AbstractControl {
    return this.spareMovementForm.controls.qty;
  }

  onSubmit() {
    console.log(this.spareMovementForm.value);
  }

  setPrefix(value: string) {
    switch (value) {
      case 'ASL':
        this.acreg.patchValue('EI-');
        break;
      case 'PR':
        this.acreg.patchValue('RP-C');
        break;
      default:
        this.acreg.patchValue('B-');
    }
  }

  forceUpperCase(name: string, event) {
    this.spareMovementForm.patchValue({
      [name]: event.target.value.toUpperCase(),
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.spareMovementForm = this.formBuilder.group({
      date: [new Date()],
      airline: [this.airlines[1]],
      fltno: [null, Validators.required],
      acreg: ['B-', Validators.required],
      part: [null, Validators.required],
      desc: [null, Validators.required],
      type: [this.types[0], Validators.required],
      serial: ['NIL', Validators.required],
      grn: [null, [Validators.required, Validators.minLength(10)]],
      qty: [0, [Validators.required, Validators.min(1)]],
      store: [this.stores[0]],
      usedBy: [null, Validators.required],
    });

    this.airline.valueChanges.subscribe((value) => {
      this.setPrefix(value);
    });
  }
}
