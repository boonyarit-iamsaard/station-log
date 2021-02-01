import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Airline {
  text: string;
  value: string;
}

interface Store {
  text: string;
  value: string;
}

interface Names {
  text: string;
  value: string;
}

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit {
  spareMovementForm: FormGroup;
  airlines: Airline[] = [
    { text: 'ASL', value: 'ASL' },
    { text: 'CX', value: 'CX' },
    { text: 'LD', value: 'LD' },
    { text: 'PR', value: 'PR' },
  ];
  stores: Store[] = [
    { text: 'BKK', value: 'BKK' },
    { text: 'BKK306', value: 'BKK306' },
  ];
  names: Names[] = [
    { text: 'Boonyarit', value: 'Boonyarit' },
    { text: 'Theerapong', value: 'Theerapong' },
    { text: 'Totsapon', value: 'Totsapon' },
  ];

  onSubmit() {
    console.log(this.spareMovementForm.value);
  }

  constructor() {
    this.spareMovementForm = new FormGroup({
      date: new FormControl(new Date()),
      airline: new FormControl(this.airlines[1].value),
      fltno: new FormControl('', Validators.required),
      acreg: new FormControl('', Validators.required),
      part: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      serial: new FormControl('NIL', Validators.required),
      grn: new FormControl('', [Validators.required, Validators.minLength(10)]),
      qty: new FormControl(0, [Validators.required]),
      store: new FormControl(this.stores[0].value),
      usedBy: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
}
