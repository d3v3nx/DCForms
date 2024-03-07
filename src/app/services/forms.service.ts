import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http:HttpClient){}

  detAllForms(){
    return this.http.get('data/forms.json').pipe(
      map(data=>{
        const formArr : Array<any>=[];
        for(const i in data){
          if(data.hasOwnProperty(i)){
            formArr.push(data[i]);
        }
        }
      }
      return FormArray;
      )
    );
  }
}
//ashd