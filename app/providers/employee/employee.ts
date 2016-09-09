import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Employee {

  constructor(private http: Http) {}

  getUsers() {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let url = `https://jsonplaceholder.typicode.com/users`;

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => reject(err));
    });
  }  
}

