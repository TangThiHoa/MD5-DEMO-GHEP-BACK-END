import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {ListClazzComponent} from "./home/list-clazz/list-clazz.component";
import {CreateClazzComponent} from "./home/create-clazz/create-clazz.component";
import {HomeComponent} from "./home/home.component";
import {ListStudentComponent} from "./home/list-student/list-student.component";
import {CreateStudentComponent} from "./home/create-student/create-student.component";
import {EditClassComponent} from "./home/edit-class/edit-class.component";
import {EditStudentComponent} from "./home/edit-student/edit-student.component";
import {DeleteClazzComponent} from "./home/delete-clazz/delete-clazz.component";
import {DeleteStudentComponent} from "./home/delete-student/delete-student.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent, children: [

      {
        path: "list",
        component: ListClazzComponent
      }, {
        path: "list-student",
        component: ListStudentComponent
      },
      {
        path: "create",
        component: CreateClazzComponent
      }, {
        path: "create-student",
        component: CreateStudentComponent
      },
      {
        path: "edit/:id",
        component: EditClassComponent
      },
      {
        path: "edit-student/:id",
        component: EditStudentComponent
      },
      {
        path: "delete",
        component: DeleteClazzComponent
      },
      {
        path: "delete-student",
        component: DeleteStudentComponent


      }]
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
