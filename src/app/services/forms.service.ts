import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { IForm } from '../model/iform';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http:HttpClient){}

  detAllForms():Observable<IForm[]>{
    return this.http.get('data/forms.json').pipe(
      map(data=>{
        const formArr : Array<IForm>=[];
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