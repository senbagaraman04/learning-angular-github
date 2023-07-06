import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LengthValidator } from './custom.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customvalidator';
  studentForm: FormGroup;
  constructor(private fb: FormBuilder,){

    this.studentForm = this.fb.group({     
      studentName: ['',
        [Validators.required],
        [LengthValidator.maxTextLength('5')]],   
    });
  }
}
