import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API = 'http://localhost:8080/api/students'

  constructor(private httpClient : HttpClient) { }
  findAll() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API);
  }
  save(student : Student): Observable<any>{
    return this.httpClient.post( this.API ,student);
  }
  findById(id : any) : Observable<any>{
    return this.httpClient.get(this.API+'/'+id);
  }
  update(id:any,book:any){
    return this.httpClient.put(this.API+'/'+id,book)
  }
  delete(id:any){
    return this.httpClient.delete(this.API+'/'+id)
  }
}
