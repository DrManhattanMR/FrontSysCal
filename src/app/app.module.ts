import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewStudentComponent } from './Components/new-student/new-student.component';
import { NewTeacherComponent } from './Components/new-teacher/new-teacher.component';
import { GroupComponent } from './Components/group/group.component';
import { PeriodoComponent } from './Components/periodo/periodo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NewStudentComponent,
    NewTeacherComponent,
    GroupComponent,
    PeriodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
