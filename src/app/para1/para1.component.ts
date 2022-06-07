import { Component, OnInit } from '@angular/core';
import { TranshService } from '../transh.service';

@Component({
  selector: 'app-para1',
  templateUrl: './para1.component.html',
  styleUrls: ['./para1.component.css']
})
export class Para1Component implements OnInit {

  constructor(private serve:TranshService) { }

  ngOnInit(): void {
  }
emp_name:any;
saveEmp()
{
  this.serve.onNewData(this.emp_name)
}


}
