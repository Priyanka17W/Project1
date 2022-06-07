import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranshService } from '../transh.service';

@Component({
  selector: 'app-updform',
  templateUrl: './updform.component.html',
  styleUrls: ['./updform.component.css']
})
export class UpdformComponent implements OnInit {
   curr_id:any;
   mdb_data_pull:any;
   en='';
   ei:any;
   ed:any;
  constructor(private transh:TranshService, private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe(
      (para)=>{this.curr_id=para['id']}
    )
    // this.transh.onGetmdbData().subscribe(
    //   (data)=>{this.mdb_data_pull=data;
    //   console.log(this.mdb_data_pull)}
    // )
  }
updEmpForm=new FormGroup({
  ename:new FormControl(this.en),
  eid:new FormControl(),
})
onUpd()
{
  console.log(this.updEmpForm.value)
  this.transh.onUPDmdbData(this.updEmpForm.value,this.curr_id).subscribe(
    (info)=>{console.log(info)}
  )
}
}
