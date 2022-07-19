import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
listStudent : any;
  constructor(private httpClient : HttpClient ,
              private studentService : StudentService) {

  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe((data)=>{
      console.log(data)
      this.listStudent = data;
    },error => {

    })

  }

}
