import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  user!:User;
  userSubmitted:boolean = false;
  emailregex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
  constructor(private fb: FormBuilder, private userServeice: UserService) { }
  ngOnInit() {
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
  onSubmit() {
    // console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
    // this.user = Object.assign(this.user, this.registrationForm.value);
    this.userServeice.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted = false;
    }
  }
  get fget() {
    return this.registrationForm.controls;
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group
      ({
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        pass: ['', Validators.required],
        confpass: ['', Validators.required]
      },
        { Validators: this.passwordMatchingValidator }
      );
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('pass')?.value === fc.get('confpass')?.value ? null :
      { notmatched: true }
  };
  userData():User{
    return this.user = {
      name : this.name.value,
      email:this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }
  }
  get name(){
    return this.registrationForm.get('name') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  
}
