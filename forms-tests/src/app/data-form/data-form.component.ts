import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(''),
    //   email:
    // });
    this.formulario = this.formBuilder.group({
      nome: [''],
      email: ['']
    });
  }

}
