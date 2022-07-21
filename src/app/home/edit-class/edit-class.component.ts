import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClazzService} from "../../service/clazz.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(""),
  })
  obj: any
  constructor(private activatedRoute:ActivatedRoute,
              private clazzService : ClazzService,
              private router : Router) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((param) => {
        const id = param.get('id');
        this.findById(id);
      })
  }

  findById(id: any) {
    this.clazzService.findById(id).subscribe((data) => {
      console.log(data);
      this.form = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
      })
    })
  }

  save(){
    this.obj = {
      name: this.form.value.name
    }
    console.log(this.obj)
    this.clazzService.update(this.form.value.id, this.obj).subscribe(() => {
      alert("Thanh cong")
    }, error => {
      alert("Loi")
      console.log(error)
    })
  }

}
