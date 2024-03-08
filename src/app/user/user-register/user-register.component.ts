import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  emailregex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
  constructor(private fb:FormBuilder){}
  ngOnInit(){
  //   this.registrationForm = new FormGroup({
  //     name : new FormControl('',Validators.required),
  //     // email : new FormControl('',[Validators.required,Validators.pattern(this.emailregex)]),
  //     email : new FormControl('',Validators.required),
  //     mobile : new FormControl('',Validators.required),
  //     pass : new FormControl('',Validators.required),
  //     confpass : new FormControl('',Validators.required)
  //   },this.passwordMatchingValidator);
  this.createRegistrationForm();
  }
  onSubmit(){
    console.log(this.registrationForm.value);
  }
  get fget(){
    return this.registrationForm.controls;
  }
  createRegistrationForm(){
    this.registrationForm = this.fb.group
    ({
      name : ['',Validators.required],
      email : ['',Validators.required],
      mobile : ['',Validators.required],
      pass : ['',Validators.required],
      confpass : ['',Validators.required]
    },
    {Validators:this.passwordMatchingValidator}
    );
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('pass')?.value === fc.get('confpass')?.value ? null :
      { notmatched: true }
  };
}
