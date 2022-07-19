import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-clazz',
  templateUrl: './list-clazz.component.html',
  styleUrls: ['./list-clazz.component.css']
})
export class ListClazzComponent implements OnInit {
  listClazz : any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/api/clazz").subscribe((data) => {
      console.log(data)
      this.listClazz = data;
    }, error => {

    })
  }
}
