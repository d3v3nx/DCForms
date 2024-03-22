import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IForm } from '../../model/iform';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit {
  @ViewChild('addForm') addForm:NgForm;
  @ViewChild('formTabs') formTabs ?: TabsetComponent;
  
  constructor(private router:Router){}

  // will come from masters
  propertyTypes: Array<string> = ['House','Apartment','Duplex'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished'];

  formView:IForm = {
    Id: null,
    SellRent: null,
    Name: "",
    PType: "",
    FType: "",
    Price: null,
    BHK: null,
    BuiltArea: null,
    City: "",
    RTM: null,
    Description:""
  };

  ngOnInit(){}
    onBack(){
      this.router.navigate(['/']);
    }
    onSubmit(){
      console.log(this.addForm);
    }
    selectTab(tabId:number){
      if (this.formTabs?.tabs[tabId]) {
        this.formTabs.tabs[tabId].active = true;
      }
    }
}

