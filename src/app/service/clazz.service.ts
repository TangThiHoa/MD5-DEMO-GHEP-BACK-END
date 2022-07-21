import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class ClazzService {
  API = 'http://localhost:8080/api/clazz'

  constructor(private httpClient : HttpClient) { }
  findAll() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API);
  }
  save(clazz : any) {
    return this.httpClient.post(this.API,clazz);
  }
  findById(id : any) :Observable<any>{
    return this.httpClient.get(this.API+`/${id}`)
  }
  update(id:any , clazz:any) : Observable<any>{
    return this.httpClient.put(this.API+ '/' +id,clazz)
  }
  delete(id :any){
    return this.httpClient.delete(this.API+'/'+id)
  }
}
