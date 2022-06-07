import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StrDirComponent } from './str-dir/str-dir.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NgGCPar1Component } from './ng-g-c-par1/ng-g-c-par1.component';
import { NgGCPar2Component } from './ng-g-c-par2/ng-g-c-par2.component';
import { Para1Component } from './para1/para1.component';
import { Para2Component } from './para2/para2.component';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { UpdformComponent } from './updform/updform.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    StrDirComponent,
    Child1Component,
    Child2Component,
    NgGCPar1Component,
    NgGCPar2Component,
    Para1Component,
    Para2Component,
    Emp1Component,
    Emp2Component,
    EmpdetailsComponent,
    UpdformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
