import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataFormComponent} from './data-form/data-form.component';


const routes: Routes = [
  {path: 'data-form-component', component: DataFormComponent},
  {path: '',   redirectTo: '/data-form-component', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
