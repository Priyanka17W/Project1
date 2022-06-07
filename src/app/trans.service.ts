import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor() { }

database=['Priyu','vishal','hijk']

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