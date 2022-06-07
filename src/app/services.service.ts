import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

database=['abcd','efgh','hijk']

onNewData(i:any)
{
  this.database.push(i);
  console.log(this.database)
}
onGetData()
{
return this.database;
}







}
