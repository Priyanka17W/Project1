import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-str-dir',
  templateUrl: './str-dir.component.html',
  styleUrls: ['./str-dir.component.css']
})
export class StrDirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    for(let std of this.students){
      console.log(std);
      this.x+=std;
      this.stu_name=this.x
    }
  }
x="";
stu_name:any;
students=["Priyanka","Poonam","Aishwarya","Sagar"]


//student task
stname:any;
mt:any;
eng:any;
sci:any;
bio:any;
pass_st=new Array;
fail_st=new Array;
onAddStudent()
{
  const st = {name:this.stname,maths:this.mt,english:this.eng,science:this.sci,bio:this.bio}
  if(this.mt>85 && this.eng>35 && this.sci>45 && this.bio>56)
  {
    this.pass_st.push(st)
  }
  else
  {
    this.fail_st.push(st)
  }
}

ngIf_cond=true;
ngIf_marks=72;
data12='';



 











}