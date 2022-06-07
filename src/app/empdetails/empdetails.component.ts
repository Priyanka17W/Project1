import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranshService } from '../transh.service';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  constructor(private acr:ActivatedRoute, private transh:TranshService) { }
  curr_id:any;
  curr_emp:any;
  emp_db:any;

  ngOnInit(): void {
  this.acr.params.subscribe(
    (para)=>{this.curr_id=para['id']}
  )
this.ongetData()
  }
ongetData(){
  this.emp_db=this.transh.onGetData()
  this.curr_emp=this.emp_db[this.curr_id]
}
  
  }
  


