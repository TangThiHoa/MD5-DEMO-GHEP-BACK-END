import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {ListClazzComponent} from './home/list-clazz/list-clazz.component';
import {CreateClazzComponent} from './home/create-clazz/create-clazz.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateStudentComponent } from './home/create-student/create-student.component';
import { ListStudentComponent } from './home/list-student/list-student.component';
import { EditClassComponent } from './home/edit-class/edit-class.component';
import { EditStudentComponent } from './home/edit-student/edit-student.component';
import { DeleteStudentComponent } from './home/delete-student/delete-student.component';
import { DeleteClazzComponent } from './home/delete-clazz/delete-clazz.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ListClazzComponent,
    CreateClazzComponent,
    HomeComponent,
    CreateStudentComponent,
    ListStudentComponent,
    EditClassComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    DeleteClazzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
