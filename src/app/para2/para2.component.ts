import { Component, OnInit } from '@angular/core';
import { TranshService }  from '../transh.service';

@Component({
  selector: 'app-para2',
  templateUrl: './para2.component.html',
  styleUrls: ['./para2.component.css']
})
export class Para2Component implements OnInit {

  constructor(private serv:TranshService) { }

  ngOnInit(): void {

    this.showdata()

  }
  local_emp_database:any

  showdata(){
    this.local_emp_database=this.serv.onGetData();
  }

}
