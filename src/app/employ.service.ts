import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor() { }

database=['abc','cde','fgh']

onNewData(){

}
onGetData(){
return this.database
}

}