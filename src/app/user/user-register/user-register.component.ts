import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  emailregex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
  constructor(){}
  ngOnInit(){
    this.registrationForm = new FormGroup({
      name : new FormControl('',Validators.required),
      // email : new FormControl('',[Validators.required,Validators.pattern(this.emailregex)]),
      email : new FormControl('',Validators.required),
      mobile : new FormControl('',Validators.required),
      pass : new FormControl('',Validators.required),
      confpass : new FormControl('',Validators.required)
    },this.passwordMatchingValidator);
  }
  onSubmit(){
    console.log(this.registrationForm.value);
  }
  get fget(){
    return this.registrationForm.controls;
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('pass')?.value === fc.get('confpass')?.value ? null :
      { notmatched: true }
  };
}
