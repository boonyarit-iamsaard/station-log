import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit {
  spareMovementForm = new FormGroup({
    date: new FormControl(new Date()),
    airline: new FormControl('CX'),
    fltno: new FormControl(''),
    acreg: new FormControl(''),
    part: new FormControl(''),
    desc: new FormControl(''),
    serial: new FormControl('NIL'),
    grn: new FormControl(''),
    qty: new FormControl(0),
    store: new FormControl(''),
    usedBy: new FormControl(''),
  });

  onSubmit() {
    console.log(this.spareMovementForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
