import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = 'https://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=10';
  constructor(private http:HttpClient) { }

  getUser(args){
    return this.http.post(this.URL , args);
  }

  displayDatas()
  {
    return this.http.get(this.URL+this.limit);
  }

  viewDatas(e)
  {
    return this.http.get(this.URL+'/'+e);
  }

}
