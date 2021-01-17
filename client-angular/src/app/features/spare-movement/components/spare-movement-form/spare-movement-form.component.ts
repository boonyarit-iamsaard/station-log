import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  spareMovementForm = new FormGroup({
    createdDate: new FormControl(new Date()),
    airline: new FormControl('CX'),
    fltno: new FormControl(''),
    acreg: new FormControl(''),
    partno: new FormControl(''),
    desc: new FormControl(''),
    serno: new FormControl(''),
    grn: new FormControl(''),
    qty: new FormControl(''),
    store: new FormControl(''),
  });

  onCreateSpareMovement() {
    console.log(this.spareMovementForm);
  }
}
