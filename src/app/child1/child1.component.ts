import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';
import { TranshService } from '../transh.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private transh:TranshService) { }

  ngOnInit(): void {
  }

saveEmp(i:NgForm)
{
  console.log(i.value)
  this.transh.onNewData(i.value)
  this.transh.onADDmdbData(i.value).subscribe(
    (mdbmsg)=>{console.log(mdbmsg)}
  )
}





}
