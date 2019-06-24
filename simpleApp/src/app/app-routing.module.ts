import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';
import { DataviewComponent } from './components/dataview/dataview.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'data',
    component:DataComponent
  },
  {
    path:'dataview/:id',
    component:DataviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
