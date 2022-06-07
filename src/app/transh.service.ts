import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class TranshService {

  constructor(private http:HttpClient) { }

database=[
  {eid:0,contact:"98764383",ename:'Neelam',dept:'Admin',email:'nmg@gamil.com'},
  {eid:1,contact:"987643644",ename:'Priya',dept:'Hr',email:'nmg@gamil.com'},
  {eid:2,contact:"987765433",ename:'Nilima',dept:'Hr',email:'nmg@gamil.com'},
  {eid:3,contact:"987643346",ename:'Nitin',dept:'Admin',email:'nmg@gamil.com'},
  ];

onNewData(i:any)
{
  this.database.push(i);
  console.log(this.database)
}
  onGetData()
  {
    return this.database;
  }
  onGetNodeData()
  {
    return this.http.get('http://localhost:3000/database_emp');
  }
  onGetmdbData()
  {
    return this.http.get('http://localhost:3000/empMongoDB');
  }
  onADDmdbData(formdata:any)
  {
    return this.http.post('http://localhost:3000/addData',formdata);
  }
  put_url='http://localhost:3000/updatedata'
  onUPDmdbData(formdata:any,id:any)
  {
    return this.http.put(`${this.put_url}/${id}`,formdata)
  
  }
del_url='http://localhost:3000/deldata'
onDelmdbData(id:any){
  return this.http.delete(`${this.del_url}/${id}`)
}
}
