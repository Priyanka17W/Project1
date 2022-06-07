import { Component, NgModule, ɵɵstylePropInterpolate1 } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { Para1Component } from './para1/para1.component';
import { Para2Component } from './para2/para2.component';
import { SignupComponent } from './signup/signup.component';
import { StrDirComponent } from './str-dir/str-dir.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"str-dir",component:StrDirComponent},
  {path:"child1",component:Child1Component},
  {path:"child2",component:Child2Component},
  {path:"para1",component:Para1Component},
  {path:"para2",component:Para2Component},
  {path:"emp1",component:Emp1Component},
  {path:"emp2",component:Emp2Component},
{path:"empdetail/:id",component:EmpdetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

