import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  constructor(){}
  ngOnInit(){
    this.registrationForm = new FormGroup({
      userName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      mobile : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      pass : new FormControl('',[Validators.required,Validators.maxLength(5)]),
      confpass : new FormControl('',[Validators.required,Validators.maxLength(5)])
    },this.passwordMatchingValidator);
  }
  onSubmit(){
    console.log(this.registrationForm);
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('pass')?.value === fc.get('confpass')?.value ? null :
      { notmatched: true }
  };
}
