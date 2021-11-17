import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PostDataComponent } from './post-data/post-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { homedir } from 'os';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'form', component: FormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'getdata', component: GetDataComponent},
  {path: 'postdata', component: PostDataComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
