import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css'],
})
export class ThankyouComponent implements OnInit {

  brand: string;
  model: string;
  year: string;
  email: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.brand = this.activatedRoute.snapshot.paramMap.get('brand');
    this.model = this.activatedRoute.snapshot.paramMap.get('model');
    this.year = this.activatedRoute.snapshot.paramMap.get('year');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
  }
}
