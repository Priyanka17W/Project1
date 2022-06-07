import { Component, OnInit } from '@angular/core';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-ng-g-c-par2',
  templateUrl: './ng-g-c-par2.component.html',
  styleUrls: ['./ng-g-c-par2.component.css']
})
export class NgGCPar2Component implements OnInit {

  constructor(private serv:TransService) { }

  ngOnInit(): void {

this.showData()
  
}
local_emp_database:any
showData()
{
  this.local_emp_database = this.serv.onGetData;

}
  

}
