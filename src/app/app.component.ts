import { Component, Input, OnInit,VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-checkbox-validation';

  // checkoutForm: FormGroup;
  // optionsForm: FormGroup;
  isFormSubmitted = false;

  optionsForm = this.fb.group({
    optionForm: [null, Validators.required]
  })

  checkoutForm = this.fb.group({
    optionsCheckForm: this.optionsForm,
    addressForm: this.fb.group({
      address: [null, Validators.required]
    })
  })

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
    // console.clear();
  }

  createCheckoutForm() {
    // this.checkoutForm = this.fb.group({
    //   optionsForm: this.fb.group({
    //     optionForm: [null, Validators.required]
    //   }),
    //   addressForm: this.fb.group({
    //     address: [null, Validators.required]
    //   })
    // })
    // this.checkoutForm = this.fb.group({
    //   optionForm: [null, Validators.required]
    // })

  }

  submitForm() {
    this.isFormSubmitted = true;
    console.log(this.checkoutForm.value)
    if (!this.checkoutForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.checkoutForm.value)
    }
  }

  getChecked() {
    this.paymentOptions.forEach(o => {
      if (o.value !== null) {
        this.checkoutForm.get('optionsForm').get('paymentOptions').patchValue(o.value.toString());
        console.log(this.checkoutForm.value)
      }
    });
  }

}

export interface IOption {
  name: string,
  value: string,
  checked: boolean
}