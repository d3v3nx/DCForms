import { Component } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { error } from 'console';


@Component({
  selector: 'app-dc-forms-list',
  templateUrl: './dc-forms-list.component.html',
  styleUrl: './dc-forms-list.component.css'
})
export class DcFormsListComponent {
  DCForms : Array<any>;

  constructor(private fromserv:  FormsService){}

  ngOnInit():void{

    this.fromserv.detAllForms().subscribe(
        data=>{
        this.DCForms=data;
        // console.log(data);
      },error=>{
        console.log(error);
      }
    );

    // this.http.get('data/forms.json').subscribe(
    //   data=>{
    //     this.DCForms=data;
    //     console.log(data);
    //   }
    // );
  }
}
