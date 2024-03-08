import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  constructor(private router:Router){}
  ngOnInit(){}
    onBack(){
      this.router.navigate(['/']);
    }
    onSubmit(addForm:NgForm){
      console.log(addForm.value);
    }
}

