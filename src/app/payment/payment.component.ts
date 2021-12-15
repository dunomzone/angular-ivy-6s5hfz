import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppComponent, IOption } from '../app.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @Input() paymentForm: FormGroup;
  // option: IOption;
  options: IOption[];

  constructor(private paymentService: AppComponent) {}

  ngOnInit() {
    this.options = this.paymentService.paymentOptions;
    console.log(this.options)
  }
}
