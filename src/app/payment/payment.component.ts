import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @Input() paymentForm: FormGroup;
  option: {
    name: string;
    value: string;
    checked: boolean;
  };
  options: {
    name: string;
    value: string;
    checked: boolean;
  }[];
  isFormSubmitted: boolean;

  constructor(private paymentService: AppComponent) {}

  ngOnInit() {
    this.options = this.paymentService.paymentOptions;
    this.isFormSubmitted = this.paymentService.isFormSubmitted;
  }
}
