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

}
