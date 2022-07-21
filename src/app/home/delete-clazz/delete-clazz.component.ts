import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClazzService} from "../../service/clazz.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-clazz',
  templateUrl: './delete-clazz.component.html',
  styleUrls: ['./delete-clazz.component.css']
})
export class DeleteClazzComponent implements OnInit {
  form = new FormGroup({
    id : new FormControl(""),
    name : new FormControl(""),
  })
  constructor(private clazzService : ClazzService,
              private activatedRoute:ActivatedRoute,
              private router :Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param : ParamMap)=>{
      this.clazzService.findById(param.get('id')).subscribe((data)=>{
        this.form.setValue(data);
      })
    })
  }
  delete(){
    const obj = this.form.value
    this.clazzService.delete(obj.id).subscribe(()=>{
      this.router.navigate(['/']);

    })
  }
  }
