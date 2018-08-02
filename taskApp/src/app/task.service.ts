import { Injectable } from '@angular/core';

import {Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class TaskService
{

  private _getUrl ='/api/getTask';


  private _postUrl = '/api/insertTask';


  private _putUrl ='/api/updateTask/'


  private _deleteurl = '/api/deleteTask/';


  constructor(private _http: Http) { }



//method of getTask
getTask()
{
  console.log('get All Task');
  return this._http.get(this._getUrl)
   .map((response:Response) => response.json());

}



addTask(task)
{
  console.log('add Task');
  let headers = new Headers({'Content-Type':'application/json'})
  let options = new RequestOptions({headers : headers});
  return this._http.post(this._postUrl,JSON.stringify(task), options)
   .map((response:Response) => response.json());

}


updateTask(task)
{
   console.log('update Task');

      let headers = new Headers({'Content-Type':'application/json'})
     let options = new RequestOptions({headers : headers});
     return this._http.put(this._putUrl + task._id,JSON.stringify(task), options)
      .map((response:Response) => response.json());


}



deleteTask(task)
{
  return this._http.delete(this._deleteurl+task._id)
   .map((response:Response)=> response.json());
}




}
