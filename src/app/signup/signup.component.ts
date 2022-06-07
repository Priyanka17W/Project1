import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
user_name:any;
onSignup(data:any){
  this.user_name=data.value;
  if(this.user_name!='Priyanka')
  {
    console.log(this.user_name)
  }
}
//function to add num
num1:any;
num2:any;
n1_n2_add:any;
onNumAdd(n1:any,n2:any)
{
  this.num1=Number(n1.value)
  this.num2=Number(n2.value)
  this.n1_n2_add=this.num1+this.num2;

}
//Function for user auth
un:any;
pw:any;
msg:any;
onLog(u:any,p:any)
{
  this.un=u.value;
  this.pw=p.value;
  if(this.un !="nmgLog")
  {
    this.msg="Enter correct Username"
  }
  else if(this.pw != "n123"){
    this.msg="Enter correct password"
  }
  else{
    this.msg="Login successfull"
  }
}
// Two way data binding
coursename:any;
qty=0;
amt=0;
}
