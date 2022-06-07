import { Component, OnInit } from '@angular/core';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-ng-g-c-par1',
  templateUrl: './ng-g-c-par1.component.html',
  styleUrls: ['./ng-g-c-par1.component.css']
})
export class NgGCPar1Component implements OnInit {

  constructor(private serv:TransService) { }

  ngOnInit(): void {
  }
emp_name:any;
saveEmp()
{
  this.serv.onNewData(this.emp_name)
}



}
