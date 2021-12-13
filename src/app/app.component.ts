import { Component, Input, OnInit,VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-checkbox-validation';

  myForm: FormGroup;
  isFormSubmitted = false;

  paymentOptions = [
    { name: 'Cash Payment', value: '100CP', checked: false },
    { name: 'Telegraphic Transfer', value: '101TR', checked: false },
    { name: 'Money Order or Postal Order', value: '102MO', checked: false },
    { name: 'Bill of Exchange', value: '103BE', checked: false },
    { name: 'Promissory Note', value: '104PN', checked: false },
    { name: 'Cheque', value: '105CQ', checked: false },
    { name: 'Bank Draft', value: '106BD', checked: false }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createMyForm();
  }

  createMyForm() {
    this.myForm = this.fb.group({
      paymentOption: [null, Validators.required]
    })
  }

  submitForm() {
    this.isFormSubmitted = true;
    console.log(this.myForm.value)
    if (!this.myForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.myForm.value)
    }
  }

  getChecked() {
    let getRadio = null;
    this.paymentOptions.forEach(o => {
      if (o.value !== null) {
        this.myForm.get('myForm').get('paymentOptions').patchValue(o.value.toString());
      }
    });
  }

}