import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit(): void {
    if(!this.loginForm.valid) {
      alert("invalid input");
    } else {
      var time = moment();
      console.log(time.format('HHmm'));
      this.http.post<any>("http://localhost:8080/", 
      {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        token: time.format('HHmm').toString(),
      }).subscribe(value => {
        if (value.response === "Success") {
          window.location.href = "http://onecause.com";
        }
      });
    }
  }
}
