import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if(!this.loginForm.valid) {
      alert("invalid input");
    } else {
      alert("redirect now");
      var time = moment();
      console.log(time.format('hhmm'));
      // redirect here
    }
  }
}
