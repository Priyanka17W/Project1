import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {

  constructor(private emp:EmployService) { }

  data:any;
  ngOnInit(): void {
    this.data = this.emp.onGetData()
  }
subfun(data:NgForm)
{
console.log(data)
console.log(data.value)
// console.log(data.value.frame)
// console.log(data.valid)
}

}
