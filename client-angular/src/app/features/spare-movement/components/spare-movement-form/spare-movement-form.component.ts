import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-spare-movement-form',
  templateUrl: './spare-movement-form.component.html',
  styleUrls: ['./spare-movement-form.component.scss'],
})
export class SpareMovementFormComponent implements OnInit {
  date = new FormControl(new Date());
  airline = new FormControl('CX');
  fltno = new FormControl('');
  acreg = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
