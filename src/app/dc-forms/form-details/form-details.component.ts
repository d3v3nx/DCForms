import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.css'
})
export class FormDetailsComponent {
  public formid :number=0;
 constructor(private route:ActivatedRoute, private router:Router){}
 ngOnInit(){
  this.formid = Number(this.route.snapshot.params['id']);

  this.route.params.subscribe(
    (params)=>{
      this.formid = Number(params['id']);
    }
  )
 }
 onSelectNext(){
  this.formid += 1;
  this.router.navigate(['form-detail',this.formid]);
 }
}
