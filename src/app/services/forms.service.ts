import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { IForms } from '../dc-forms/IForms.interface';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http:HttpClient){}

  detAllForms():Observable<IForms[]>{
    return this.http.get('data/forms.json').pipe(
      map(data=>{
        const formArr : Array<IForms>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            formArr.push(data[id]);
        }
        }
        return formArr;
      })
    );
  }
}