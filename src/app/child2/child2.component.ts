import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { TranshService } from '../transh.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private transh:TranshService , private router: Router) { }

  ngOnInit(): void {
  
   this.shwData()

  }
local_emp_database:any

shwData()
{
  this.local_emp_database = this.transh.onGetData();

}
onRou(n:any)
{
  this.router.navigate(['/empdetails',n])
}
onAddEmpRou()
{
  this.router.navigate(['/child1'])
}
onEdit(i:any)
{
  this.router.navigate(['/upd',i])
}
onDel(i:any)
{
  this.transh.onDelmdbData(i).subscribe(
    (data)=>{console.log(data)}
  )
}
}

