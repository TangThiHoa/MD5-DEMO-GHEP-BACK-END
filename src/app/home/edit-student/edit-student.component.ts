import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from 'src/app/service/student.service';
import {Clazz} from "../../model/clazz";
import {ClazzService} from "../../service/clazz.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  student: any
  updateForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    age: new FormControl(""),
    score: new FormControl(""),
    clazzId: new FormControl(""),
  })


  clazz: Clazz[] = []
  constructor(
    private router: Router,
    private clazzService: ClazzService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllClazz()
    this.activatedRoute.paramMap.subscribe((param)=>{

      const id = param.get('id');
      this.findById(id);
    })


  }

  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data);
      this.updateForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        age: new FormControl(data.age),
        score: new FormControl(data.score),
        clazzId: new FormControl(data.clazzId)
      })
    })
  }

  getAllClazz() {
    this.clazzService.findAll().subscribe((data) => {
        this.clazz = data
      }, error => {
        console.log(error)
      }
    )
  }


  updateStudent()
  {
    this.student = {
      name : this.updateForm.value.name,
      age : this.updateForm.value.age,
      score : this.updateForm.value.score,
      clazz : {
        id : this.updateForm.value.clazzId
      },
    }
    this.studentService.update(this.updateForm.value.id, this.student).subscribe(()=>{
      alert("ok0000")
      this.router.navigateByUrl("home/list-student")
    },error =>{
    console.log(error)

  })
  }
}
