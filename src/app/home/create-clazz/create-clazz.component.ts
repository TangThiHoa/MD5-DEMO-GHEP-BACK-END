import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-clazz',
  templateUrl: './create-clazz.component.html',
  styleUrls: ['./create-clazz.component.css']
})
export class CreateClazzComponent implements OnInit {
  form = new FormGroup({
    name : new FormControl(""),
  })
  obj : any;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  add(){
    console.log(this.form.value);
    this.obj = {
      name : this.form.value.name,
    }
    this.httpClient.post("http://localhost:8080/api/clazz",this.obj).subscribe(()=>{
      alert("Thanh cong")
    },error => {
      alert("loi")
    })
  }

}
