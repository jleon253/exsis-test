import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data = {
    brand: '',
    model: '',
    year: '',
    email: ''
  };
  error = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  saveForm(f: NgForm) {
    console.log('Submit disparado');
    if (f.invalid) {
      Object.values(f.controls).forEach( control => {
        control.markAsTouched();
      });
      this.error = true;
      return;
    }
    this.error = false;
    console.log(f.value);
    this.router.navigate(['thankyou', f.value]);
  }

}
